import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { DuckDBConnection, DuckDBInstance } from "@duckdb/node-api";
import { FetchAPI, FilterOperator, SqlSortOrder } from "@cirrobio/api-client";
import { ApiError } from "../../api/error";
import { DataService } from "../../data/data.service";
import { createPublicationFetch } from "../publication-fetch";
import { SqlRunner } from "../sheet-sql";

const TS = "2026-10-01T12:00:00.000Z";

// A publication on local disk: documents are read through an injected fetch, and DuckDB reads
// the parquet files by path, so the base URL is the directory itself.
let root: string;
let connection: DuckDBConnection;
let dataService: DataService;

const write = (rel: string, body: unknown) => {
  const path = join(root, rel);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(body));
};

const fetchFromDisk: FetchAPI = async (input) => {
  const rel = String(input).slice(root.length + 1);
  try {
    return new Response(readFileSync(join(root, rel)));
  } catch {
    return new Response("<Error><Code>AccessDenied</Code></Error>", { status: 403 });
  }
};

const runSql: SqlRunner = async (sql) => {
  const reader = await connection.runAndReadAll(sql);
  return { columns: reader.columnNames(), rows: reader.getRowsJS() as unknown[][] };
};

const tag = { key: null, value: "atlas", editable: true };

beforeAll(async () => {
  root = mkdtempSync(join(tmpdir(), "publication-"));
  write("catalog.json", { formatVersion: 1, apiPrefix: "v1" });
  write("v1/projects/index.json", [{ id: "p1", name: "Atlas", description: "", status: "COMPLETED", tags: [tag], organization: null, classificationIds: [], billingAccountId: null }]);
  write("v1/projects/p1.json", {
    id: "p1", name: "Atlas", description: "", status: "COMPLETED", tags: [tag], organization: null, contacts: [],
    createdBy: null, createdAt: TS, updatedAt: TS, billingAccountId: null, classificationIds: [], settings: null,
    account: null, statusMessage: null, deployedAt: null, deployedVersion: null, roleVersion: null,
  });
  const dataset = {
    id: "d1", name: "Counts", description: null, projectId: "p1", processId: "csv", sourceDatasetIds: [],
    status: "COMPLETED", tags: [], createdBy: null, createdAt: TS, updatedAt: TS,
  };
  write("v1/projects/p1/datasets/index.json", { data: [dataset], nextToken: null });
  write("v1/projects/p1/datasets/d1.json", {
    ...dataset, s3: "files/p1/datasets/d1", sourceDatasets: [], originatingProjectId: null, isViewRestricted: false,
    totalSizeBytes: 30, fileCount: 3, params: {}, info: {}, sourceSampleIds: [], sourceSampleFilesMap: {},
    share: null, statusMessage: null,
  });
  write("v1/projects/p1/datasets/d1/files.json", {
    domain: "files/p1/datasets/d1",
    files: ["a", "b", "c"].map(n => ({ path: `data/${n}.csv`, size: 10, metadata: {} })),
    totalFiles: 3, viz: [], tables: [], artifacts: [], structuredInputs: [],
  });
  const sheet = {
    id: "s1", name: "Samples", description: "", projectId: "p1", namespaceName: "study", tableName: "samples",
    sheetType: "TABLE", sheetCreationMode: "FILE", virtual: false, status: "COMPLETED", totalRowCount: 3, tags: [],
    createdBy: null, createdAt: TS, updatedAt: TS, mappingTargets: [],
  };
  const columns = [
    { name: "name", dataType: "STRING", semanticType: "STANDARD" },
    { name: "count", dataType: "INTEGER", semanticType: "STANDARD" },
    { name: "collected", dataType: "DATE", semanticType: "STANDARD" },
  ];
  write("v1/projects/p1/sheets/index.json", [{ ...sheet, columns, columnRelationships: [] }]);
  write("v1/projects/p1/sheets/s1.json", {
    ...sheet, columns, viewDefinition: null, lastRefreshedAt: null, resourceArn: null, stagingUploadPath: null,
    schemaVersionId: null, minSnapshotsToKeep: null, maxSnapshotAgeHours: null,
  });
  write("v1/processes/index.json", [{ id: "csv", name: "CSV", description: "", dataType: "csv", executor: "INGEST", tags: [], isArchived: false, isTenantWide: true, allowMultipleSources: false, usesSampleSheet: false, requiresInternet: false, executionModes: [], owner: null, maintainers: null, fileRequirementsMessage: null, linkedProjectIds: [], childProcessIds: [], parentProcessIds: [] }]);

  connection = await (await DuckDBInstance.create(":memory:")).connect();
  mkdirSync(join(root, "files/p1/sheets"), { recursive: true });
  await connection.run(`COPY (
    SELECT * FROM (VALUES ('a', 3, DATE '2026-01-02'), ('b', NULL, NULL), ('c', 7, DATE '2026-03-04')) t(name, count, collected)
  ) TO '${join(root, "files/p1/sheets/s1.parquet")}' (FORMAT parquet)`);

  dataService = new DataService({ fetchApi: createPublicationFetch({ baseUrl: root, runSql, fetch: fetchFromDisk }) });
});

beforeEach(() => jest.spyOn(console, "warn").mockImplementation(() => undefined));

afterAll(() => {
  connection.closeSync();
  rmSync(root, { recursive: true, force: true });
});

describe("createPublicationFetch through DataService", () => {
  it("lists projects and reads a project", async () => {
    expect((await dataService.projects.getProjects()).map(p => p.id)).toEqual(["p1"]);
    const project = await dataService.projects.getProject({ projectId: "p1" });
    expect(project.createdAt).toEqual(new Date(TS));
    expect(project.contacts).toEqual([]);
  });

  it("reads datasets with file locations resolved against the base URL", async () => {
    const page = await dataService.datasets.getDatasets({ projectId: "p1", limit: 10 });
    expect(page.data.map(d => d.id)).toEqual(["d1"]);
    expect(page.nextToken).toBeNull();
    const dataset = await dataService.datasets.getDataset({ projectId: "p1", datasetId: "d1" });
    expect(dataset.s3).toBe(`${root}/files/p1/datasets/d1`);
  });

  it("pages the dataset manifest", async () => {
    const manifest = await dataService.datasets.getDatasetManifest({ projectId: "p1", datasetId: "d1", fileOffset: 1, fileLimit: 1 });
    expect(manifest.domain).toBe(`${root}/files/p1/datasets/d1`);
    expect(manifest.files.map(f => f.path)).toEqual(["data/b.csv"]);
    expect(manifest.totalFiles).toBe(3);
  });

  it("queries sheet rows with filter, sort and paging", async () => {
    const response = await dataService.sheets.querySheetData({
      projectId: "p1",
      sheetId: "s1",
      sheetDataRequest: {
        limit: 1,
        page: 1,
        sort: { orderBy: "count", order: SqlSortOrder.Desc },
        filter: { column: "count", operator: FilterOperator.IsNotNull },
      },
    });
    expect(response.columns.map(c => [c.name, c.dataType])).toEqual([
      ["_row_id", "BIGINT"], ["name", "STRING"], ["count", "INTEGER"], ["collected", "DATE"],
    ]);
    expect(response.rows).toEqual([[3, "c", 7, "2026-03-04"]]);
    expect(response.totalRowCount).toBe(2);
  });

  it("runs raw SQL over the project's sheets by qualified and unqualified name", async () => {
    const qualified = await dataService.sheets.queryData({
      projectId: "p1", sheetQueryRequest: { query: "SELECT name, count FROM study.samples ORDER BY name;" },
    });
    expect(qualified.rows).toEqual([["a", 3], ["b", null], ["c", 7]]);
    expect(qualified.columns.map(c => c.dataType)).toEqual(["STRING", "INTEGER"]);

    const unqualified = await dataService.sheets.queryData({
      projectId: "p1", sheetQueryRequest: { query: "SELECT sum(count) AS total FROM samples", limit: 5 },
    });
    expect(unqualified.rows).toEqual([[10]]);
    expect(unqualified.totalRowCount).toBe(1);
  });

  it("reports SQL errors as 400", async () => {
    const request = dataService.sheets.queryData({ projectId: "p1", sheetQueryRequest: { query: "SELECT nope FROM samples" } });
    await expect(request).rejects.toMatchObject({ errorCode: 400 });
  });

  it("serves processes by id from the process index", async () => {
    expect((await dataService.processes.getProcess({ processId: "csv" })).name).toBe("CSV");
  });

  it.each([
    ["unpublished objects", () => dataService.datasets.getDataset({ projectId: "p1", datasetId: "missing" })],
    ["unsupported routes", () => dataService.workspaces.getWorkspaces({ projectId: "p1" })],
  ])("answers 404 for %s", async (_, call) => {
    const error = await call().catch(e => e);
    expect(error).toBeInstanceOf(ApiError);
    expect(error.errorCode).toBe(404);
  });

  it("answers 501 for sheet queries without a SQL runner", async () => {
    const service = new DataService({ fetchApi: createPublicationFetch({ baseUrl: root, fetch: fetchFromDisk }) });
    const request = service.sheets.querySheetData({ projectId: "p1", sheetId: "s1", sheetDataRequest: {} });
    await expect(request).rejects.toMatchObject({ errorCode: 501 });
  });
});
