import { parseDatasetUri } from "../dataset-uri";

describe("parseDatasetUri", () => {
  it("parses publication URIs, which have no tenant", () => {
    expect(parseDatasetUri("cirro::p1:dataset:d1")).toEqual({ tenantId: "", projectId: "p1", datasetId: "d1" });
  });

  it("keeps the path within the dataset's data directory", () => {
    expect(parseDatasetUri("cirro:dev:p1:dataset:d1/slides/index.json")).toEqual({
      tenantId: "dev", projectId: "p1", datasetId: "d1", path: "slides/index.json",
    });
  });

  it.each(["d1", "cirro::p1:sheet:s1", "cirro:p1:dataset:d1", "cirro::p1:dataset:"])("rejects %s", (uri) => {
    expect(() => parseDatasetUri(uri)).toThrow("Not a Cirro dataset URI");
  });
});
