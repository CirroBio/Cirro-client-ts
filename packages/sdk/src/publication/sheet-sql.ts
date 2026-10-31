import { ColumnDataType, Filter, FilterOperator, FilterValuesInner, SheetDataRequest } from "@cirrobio/api-client";

/** Runs one SQL statement, e.g. against a DuckDB-WASM connection, and returns its rows positionally. */
export type SqlRunner = (sql: string) => Promise<{ columns: string[]; rows: unknown[][] }>;

// Matches the Cirro API's defaults and limits for sheet queries.
export const DEFAULT_LIMIT = 1000;
export const DEFAULT_PAGE = 1;
const MAX_FILTER_DEPTH = 10;
const MAX_IN_VALUES = 1000;

export const ROW_ID_COLUMN = "_row_id";

const SINGLE_VALUE_OPERATORS: Partial<Record<FilterOperator, string>> = {
  [FilterOperator.Equals]: "=",
  [FilterOperator.NotEquals]: "!=",
  [FilterOperator.GreaterThan]: ">",
  [FilterOperator.GreaterThanOrEquals]: ">=",
  [FilterOperator.LessThan]: "<",
  [FilterOperator.LessThanOrEquals]: "<=",
  [FilterOperator.Like]: "LIKE",
  [FilterOperator.NotLike]: "NOT LIKE",
};

export class SheetQueryError extends Error {}

export function quoteIdentifier(name: string): string {
  return `"${name.split('"').join('""')}"`;
}

export function sqlLiteral(value: FilterValuesInner | null): string {
  if (value === null) return "NULL";
  if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
  if (typeof value === "number") return String(value);
  return `'${value.split("'").join("''")}'`;
}

/** Translates a sheet filter tree to a SQL condition, following the Cirro backend's FilterSqlBuilder. */
export function filterToSql(filter: Filter, columns: Set<string>, depth = 0): string {
  if (depth > MAX_FILTER_DEPTH) {
    throw new SheetQueryError(`Filter nesting exceeds maximum depth of ${MAX_FILTER_DEPTH}`);
  }
  const isGroup = filter.logicalOperator != null || filter.conditions != null;
  const isLeaf = filter.column != null || filter.operator != null;
  if (isGroup && isLeaf) throw new SheetQueryError("Filter node cannot be both a group and a leaf condition");
  if (isGroup) {
    if (!filter.logicalOperator) throw new SheetQueryError("Filter group must have a logicalOperator");
    if (!filter.conditions?.length) throw new SheetQueryError("Filter group must have at least one condition");
    return `(${filter.conditions.map(c => filterToSql(c, columns, depth + 1)).join(` ${filter.logicalOperator} `)})`;
  }
  if (!isLeaf || !filter.column || !filter.operator) {
    throw new SheetQueryError("Leaf filter must have column and operator");
  }
  const column = resolveColumn(filter.column, columns);
  const values = filter.values ?? [];
  switch (filter.operator) {
    case FilterOperator.IsNull:
      return `${column} IS NULL`;
    case FilterOperator.IsNotNull:
      return `${column} IS NOT NULL`;
    case FilterOperator.In:
    case FilterOperator.NotIn:
      if (values.length === 0) {
        throw new SheetQueryError(`Filter on ${filter.column} with operator ${filter.operator} requires a non-empty values list`);
      }
      if (values.length > MAX_IN_VALUES) {
        throw new SheetQueryError(`IN/NOT_IN filter exceeds maximum of ${MAX_IN_VALUES} values`);
      }
      return `${column} ${filter.operator === FilterOperator.NotIn ? "NOT " : ""}IN (${values.map(sqlLiteral).join(", ")})`;
    default:
      if (values.length !== 1) {
        throw new SheetQueryError(`Filter on ${filter.column} with operator ${filter.operator} requires exactly one value`);
      }
      return `${column} ${SINGLE_VALUE_OPERATORS[filter.operator]} ${sqlLiteral(values[0])}`;
  }
}

function resolveColumn(name: string, columns: Set<string>): string {
  if (!columns.has(name)) throw new SheetQueryError(`Unknown column: ${name}`);
  return quoteIdentifier(name);
}

/**
 * The page and count queries for a sheet stored as parquet. `_row_id` is synthesized from the
 * file's row order, which the publication writer preserves.
 */
export function buildSheetQuery(parquetUrl: string, columnNames: string[], request: SheetDataRequest) {
  const limit = request.limit ?? DEFAULT_LIMIT;
  const page = request.page ?? DEFAULT_PAGE;
  if (limit < 1) throw new SheetQueryError("limit must be >= 1");
  if (page < 1) throw new SheetQueryError("page must be >= 1");
  const columns = new Set([ROW_ID_COLUMN, ...columnNames]);
  const selectList = [ROW_ID_COLUMN, ...columnNames].map(quoteIdentifier).join(", ");
  const source = `(SELECT row_number() OVER () AS ${ROW_ID_COLUMN}, * FROM read_parquet(${sqlLiteral(parquetUrl)}))`;
  const where = request.filter ? ` WHERE ${filterToSql(request.filter, columns)}` : "";
  const orderBy = request.sort?.orderBy
    ? ` ORDER BY ${resolveColumn(request.sort.orderBy, columns)} ${request.sort.order ?? "ASC"}`
    : "";
  return {
    pageSql: `SELECT ${selectList} FROM ${source}${where}${orderBy} LIMIT ${limit} OFFSET ${(page - 1) * limit}`,
    countSql: `SELECT count(*) FROM ${source}${where}`,
  };
}

/** The page and count queries for a raw SQL query, wrapped as the Cirro backend wraps it. */
export function buildRawQuery(query: string, limit = DEFAULT_LIMIT, page = DEFAULT_PAGE) {
  if (limit < 1) throw new SheetQueryError("limit must be >= 1");
  if (page < 1) throw new SheetQueryError("page must be >= 1");
  const inner = query.replace(/[;\s]+$/, "").trim();
  return {
    pageSql: `SELECT * FROM (${inner}) LIMIT ${limit} OFFSET ${(page - 1) * limit}`,
    countSql: `SELECT count(*) FROM (${inner})`,
    describeSql: `DESCRIBE SELECT * FROM (${inner})`,
  };
}

const DUCKDB_TYPES: Record<string, ColumnDataType> = {
  TINYINT: ColumnDataType.Integer,
  SMALLINT: ColumnDataType.Integer,
  INTEGER: ColumnDataType.Integer,
  UTINYINT: ColumnDataType.Integer,
  USMALLINT: ColumnDataType.Integer,
  UINTEGER: ColumnDataType.Bigint,
  BIGINT: ColumnDataType.Bigint,
  UBIGINT: ColumnDataType.Bigint,
  HUGEINT: ColumnDataType.Bigint,
  UHUGEINT: ColumnDataType.Bigint,
  FLOAT: ColumnDataType.Float,
  DOUBLE: ColumnDataType.Double,
  BOOLEAN: ColumnDataType.Boolean,
  DATE: ColumnDataType.Date,
};

/** Maps a DuckDB column type to the sheet column type the Cirro API reports; unmapped types are STRING. */
export function toColumnDataType(duckDbType: string): ColumnDataType {
  const type = duckDbType.toUpperCase();
  if (type.startsWith("DECIMAL")) return ColumnDataType.Double;
  if (type.startsWith("TIMESTAMP")) return ColumnDataType.Timestamp;
  return DUCKDB_TYPES[type] ?? ColumnDataType.String;
}

/** Converts a value from the SQL runner to the JSON value the Cirro API returns for that column type. */
export function toCellValue(value: unknown, dataType: ColumnDataType): unknown {
  if (value === null || value === undefined) return null;
  if (dataType === ColumnDataType.Date || dataType === ColumnDataType.Timestamp) {
    // DuckDB-WASM returns dates and timestamps as epoch milliseconds.
    const iso = (value instanceof Date ? value : new Date(value as number | string)).toISOString();
    return dataType === ColumnDataType.Date ? iso.slice(0, 10) : iso;
  }
  if (typeof value === "bigint") {
    return Number.isSafeInteger(Number(value)) ? Number(value) : value.toString();
  }
  return value;
}
