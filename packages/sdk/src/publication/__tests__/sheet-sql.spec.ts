import { ColumnDataType, FilterOperator, LogicalOperator } from "@cirrobio/api-client";
import { buildRawQuery, buildSheetQuery, filterToSql, SheetQueryError, toCellValue, toColumnDataType } from "../sheet-sql";

const columns = new Set(["name", "count", "o'brien"]);

describe("filterToSql", () => {
  it("renders leaf operators as the Cirro backend does", () => {
    expect(filterToSql({ column: "count", operator: FilterOperator.GreaterThanOrEquals, values: [3] }, columns)).toBe('"count" >= 3');
    expect(filterToSql({ column: "name", operator: FilterOperator.NotLike, values: ["a%"] }, columns)).toBe(`"name" NOT LIKE 'a%'`);
    expect(filterToSql({ column: "name", operator: FilterOperator.NotIn, values: ["a", "b"] }, columns)).toBe(`"name" NOT IN ('a', 'b')`);
    expect(filterToSql({ column: "name", operator: FilterOperator.IsNull }, columns)).toBe('"name" IS NULL');
  });

  it("escapes identifiers and string literals", () => {
    expect(filterToSql({ column: "o'brien", operator: FilterOperator.Equals, values: ["it's"] }, columns)).toBe(`"o'brien" = 'it''s'`);
  });

  it("nests groups", () => {
    const filter = {
      logicalOperator: LogicalOperator.Or,
      conditions: [
        { column: "name", operator: FilterOperator.Equals, values: ["a"] },
        {
          logicalOperator: LogicalOperator.And,
          conditions: [
            { column: "count", operator: FilterOperator.GreaterThan, values: [1] },
            { column: "count", operator: FilterOperator.IsNotNull },
          ],
        },
      ],
    };
    expect(filterToSql(filter, columns)).toBe(`("name" = 'a' OR ("count" > 1 AND "count" IS NOT NULL))`);
  });

  it.each([
    [{ column: "missing", operator: FilterOperator.Equals, values: [1] }, "Unknown column: missing"],
    [{ column: "count", operator: FilterOperator.Equals, values: [] }, "requires exactly one value"],
    [{ column: "count", operator: FilterOperator.In, values: [] }, "non-empty values list"],
    [{ logicalOperator: LogicalOperator.And, conditions: [] }, "at least one condition"],
    [{ logicalOperator: LogicalOperator.And, conditions: [{ column: "count", operator: FilterOperator.IsNull }], column: "count" }, "both a group and a leaf"],
  ])("rejects invalid filters (%#)", (filter, message) => {
    expect(() => filterToSql(filter, columns)).toThrow(SheetQueryError);
    expect(() => filterToSql(filter, columns)).toThrow(message);
  });
});

describe("buildSheetQuery", () => {
  it("synthesizes _row_id and pages from 1", () => {
    const { pageSql, countSql } = buildSheetQuery("https://pub/files/p/sheets/s.parquet", ["name"], {
      limit: 10, page: 3, sort: { orderBy: "name", order: "DESC" as never },
    });
    expect(pageSql).toBe(
      `SELECT "_row_id", "name" FROM (SELECT row_number() OVER () AS _row_id, * FROM read_parquet('https://pub/files/p/sheets/s.parquet')) ORDER BY "name" DESC LIMIT 10 OFFSET 20`);
    expect(countSql).toBe(`SELECT count(*) FROM (SELECT row_number() OVER () AS _row_id, * FROM read_parquet('https://pub/files/p/sheets/s.parquet'))`);
  });

  it("rejects sorting by an unknown column", () => {
    expect(() => buildSheetQuery("u", ["name"], { sort: { orderBy: "x; DROP" } })).toThrow("Unknown column");
  });
});

describe("buildRawQuery", () => {
  it("strips trailing semicolons and wraps with paging", () => {
    expect(buildRawQuery("select 1 ;  ", 5, 2).pageSql).toBe("SELECT * FROM (select 1) LIMIT 5 OFFSET 5");
  });
});

describe("cell and type conversion", () => {
  it("maps DuckDB types", () => {
    expect(toColumnDataType("DECIMAL(10,2)")).toBe(ColumnDataType.Double);
    expect(toColumnDataType("TIMESTAMP WITH TIME ZONE")).toBe(ColumnDataType.Timestamp);
    expect(toColumnDataType("UBIGINT")).toBe(ColumnDataType.Bigint);
    expect(toColumnDataType("VARCHAR[]")).toBe(ColumnDataType.String);
  });

  it("converts runner values to API cell values", () => {
    expect(toCellValue(Date.UTC(2026, 0, 2), ColumnDataType.Date)).toBe("2026-01-02");
    expect(toCellValue(new Date(Date.UTC(2026, 0, 2, 3, 4, 5)), ColumnDataType.Timestamp)).toBe("2026-01-02T03:04:05.000Z");
    expect(toCellValue(BigInt(5), ColumnDataType.Bigint)).toBe(5);
    expect(toCellValue(BigInt("9007199254740993"), ColumnDataType.Bigint)).toBe("9007199254740993");
    expect(toCellValue(undefined, ColumnDataType.String)).toBeNull();
  });
});
