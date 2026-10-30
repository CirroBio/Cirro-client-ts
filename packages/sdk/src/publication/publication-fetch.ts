import { ColumnDataType, FetchAPI, SheetDataRequest, SheetQueryRequest } from "@cirrobio/api-client";
import {
  buildRawQuery,
  buildSheetQuery,
  quoteIdentifier,
  ROW_ID_COLUMN,
  SheetQueryError,
  sqlLiteral,
  SqlRunner,
  toCellValue,
  toColumnDataType,
} from "./sheet-sql";

export interface PublicationFetchOptions {
  /** Public URL of the publication root, e.g. https://bucket.s3.amazonaws.com/some/prefix */
  baseUrl: string;
  /** Must match the DataService `basePath`. */
  apiBasePath?: string;
  /** Answers sheet row and SQL queries; without it those requests fail with 501. */
  runSql?: SqlRunner;
  /** Fetches publication documents; defaults to the global fetch. */
  fetch?: FetchAPI;
}

interface RouteContext {
  params: string[];
  query: URLSearchParams;
  body: any;
}

type Handler = (ctx: RouteContext) => Promise<unknown>;

class HttpError extends Error {
  constructor(readonly status: number, message: string) {
    super(message);
  }
}

// Mirrors the Cirro API's default page size for dataset manifests.
const DEFAULT_MANIFEST_LIMIT = 20000;
const SEGMENT = "([^/:]+)";

/**
 * A `fetch` replacement that answers Cirro API requests from a publication: a public bucket
 * laid out as described in the Cirro-publish-data-objects SPEC.md. Pass it to `DataService`
 * as `fetchApi`; read calls then work unchanged and everything else is a 404.
 */
export function createPublicationFetch(options: PublicationFetchOptions): FetchAPI {
  const baseUrl = options.baseUrl.replace(/\/+$/, "");
  const apiBasePath = (options.apiBasePath ?? "/api").replace(/\/+$/, "");
  const fetchDocument = options.fetch ?? ((input, init) => fetch(input, init));
  const v1 = "v1/projects";

  const resolve = (rel: string) => `${baseUrl}/${rel}`;

  async function document(rel: string): Promise<any> {
    const response = await fetchDocument(resolve(rel));
    // A public bucket without list permission answers 403 for keys that do not exist.
    if (response.status === 403 || response.status === 404) throw new HttpError(404, `Not published: ${rel}`);
    if (!response.ok) throw new HttpError(response.status, `Failed to read ${rel}`);
    return response.json();
  }

  function sqlRunner(): SqlRunner {
    if (!options.runSql) throw new HttpError(501, "This publication reader was created without a SQL runner");
    return options.runSql;
  }

  async function sheetQuery({ params: [p, s], body }: RouteContext) {
    const runSql = sqlRunner();
    const sheet = await document(`${v1}/${p}/sheets/${s}.json`);
    const columns: { name: string; dataType: ColumnDataType }[] = sheet.columns;
    const { pageSql, countSql } = buildSheetQuery(
      resolve(`files/${p}/sheets/${s}.parquet`), columns.map(c => c.name), (body ?? {}) as SheetDataRequest);
    const page = await runSql(pageSql);
    const count = await runSql(countSql);
    const responseColumns = [{ name: ROW_ID_COLUMN, dataType: ColumnDataType.Bigint }, ...columns.map(c => ({ name: c.name, dataType: c.dataType }))];
    return {
      columns: responseColumns,
      rows: page.rows.map(row => row.map((v, i) => toCellValue(v, responseColumns[i].dataType))),
      totalRowCount: Number(count.rows[0][0]),
    };
  }

  async function rawQuery({ params: [p], body }: RouteContext) {
    const runSql = sqlRunner();
    const request = body as SheetQueryRequest;
    const sheets: { id: string; namespaceName: string; tableName: string }[] = await document(`${v1}/${p}/sheets/index.json`);
    // Views are recreated for every query so that names always resolve to this project's sheets.
    const namespaces = Array.from(new Set(sheets.map(s => s.namespaceName)));
    for (const namespace of namespaces) {
      await runSql(`CREATE SCHEMA IF NOT EXISTS ${quoteIdentifier(namespace)}`);
    }
    for (const sheet of sheets) {
      const parquetUrl = resolve(`files/${p}/sheets/${sheet.id}.parquet`);
      await runSql(`CREATE OR REPLACE VIEW ${quoteIdentifier(sheet.namespaceName)}.${quoteIdentifier(sheet.tableName)} AS SELECT * FROM read_parquet(${sqlLiteral(parquetUrl)})`);
    }
    if (namespaces.length) {
      await runSql(`SET search_path = ${sqlLiteral(namespaces.join(","))}`);
    }
    const { pageSql, countSql, describeSql } = buildRawQuery(request.query, request.limit ?? undefined, request.page ?? undefined);
    // Failures from here on come from the caller's SQL, which the Cirro API reports as 400.
    const runQuery = (sql: string) => runSql(sql).catch((e: Error) => { throw new HttpError(400, e.message); });
    const description = await runQuery(describeSql);
    const nameIndex = description.columns.indexOf("column_name");
    const typeIndex = description.columns.indexOf("column_type");
    const columns = description.rows.map(r => ({ name: String(r[nameIndex]), dataType: toColumnDataType(String(r[typeIndex])) }));
    const page = await runQuery(pageSql);
    const count = await runQuery(countSql);
    return {
      columns,
      rows: page.rows.map(row => row.map((v, i) => toCellValue(v, columns[i].dataType))),
      totalRowCount: Number(count.rows[0][0]),
    };
  }

  async function datasetDetail({ params: [p, d] }: RouteContext) {
    const dataset = await document(`${v1}/${p}/datasets/${d}.json`);
    return { ...dataset, s3: resolve(dataset.s3) };
  }

  async function datasetManifest({ params: [p, d], query }: RouteContext) {
    const manifest = await document(`${v1}/${p}/datasets/${d}/files.json`);
    const offset = Number(query.get("fileOffset") ?? 0);
    const limit = Number(query.get("fileLimit") ?? DEFAULT_MANIFEST_LIMIT);
    return { ...manifest, domain: resolve(manifest.domain), files: manifest.files.slice(offset, offset + limit) };
  }

  async function processDetail({ params: [processId] }: RouteContext) {
    const processes: { id: string }[] = await document("v1/processes/index.json");
    const process = processes.find(entry => entry.id === processId);
    if (!process) throw new HttpError(404, `Not published: process ${processId}`);
    return process;
  }

  const routes: [string, RegExp, Handler][] = [
    ["GET", /^\/projects$/, () => document(`${v1}/index.json`)],
    ["GET", route(`/projects/${SEGMENT}`), ({ params: [p] }) => document(`${v1}/${p}.json`)],
    ["GET", route(`/projects/${SEGMENT}/datasets`), ({ params: [p] }) => document(`${v1}/${p}/datasets/index.json`)],
    ["GET", route(`/projects/${SEGMENT}/datasets/${SEGMENT}`), datasetDetail],
    ["GET", route(`/projects/${SEGMENT}/datasets/${SEGMENT}/files`), datasetManifest],
    ["GET", route(`/projects/${SEGMENT}/sheets`), ({ params: [p] }) => document(`${v1}/${p}/sheets/index.json`)],
    ["POST", route(`/projects/${SEGMENT}/sheets/raw-query`), rawQuery],
    ["GET", route(`/projects/${SEGMENT}/sheets/${SEGMENT}`), ({ params: [p, s] }) => document(`${v1}/${p}/sheets/${s}.json`)],
    ["POST", route(`/projects/${SEGMENT}/sheets/${SEGMENT}/data/query`), sheetQuery],
    ["GET", route(`/projects/${SEGMENT}/dashboards`), ({ params: [p] }) => document(`${v1}/${p}/dashboards/index.json`)],
    ["GET", route(`/projects/${SEGMENT}/dashboards/${SEGMENT}`), ({ params: [p, id] }) => document(`${v1}/${p}/dashboards/${id}.json`)],
    ["GET", /^\/processes$/, () => document("v1/processes/index.json")],
    ["GET", route(`/processes/${SEGMENT}`), processDetail],
  ];

  return async (input, init) => {
    const method = (init?.method ?? (input instanceof Request ? input.method : "GET")).toUpperCase();
    const url = new URL(typeof input === "string" ? input : input instanceof URL ? input.href : input.url, "http://publication.invalid");
    if (!url.pathname.startsWith(apiBasePath)) {
      return jsonResponse(404, { message: `Not an API request: ${url.pathname}` });
    }
    const path = url.pathname.slice(apiBasePath.length);
    for (const [routeMethod, pattern, handler] of routes) {
      const match = method === routeMethod ? pattern.exec(path) : null;
      if (!match) continue;
      try {
        const body = typeof init?.body === "string" ? JSON.parse(init.body) : undefined;
        const params = match.slice(1).map(decodeURIComponent);
        return jsonResponse(200, await handler({ params, query: url.searchParams, body }));
      } catch (e) {
        if (e instanceof HttpError) return jsonResponse(e.status, { message: e.message });
        if (e instanceof SheetQueryError) return jsonResponse(400, { message: e.message });
        throw e;
      }
    }
    return jsonResponse(404, { message: `Not available from a publication: ${method} ${path}` });
  };
}

function route(pattern: string): RegExp {
  return new RegExp(`^${pattern}$`);
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}
