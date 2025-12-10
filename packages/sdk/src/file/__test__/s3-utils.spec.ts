import { s3UriToParams } from "../../file";


describe("s3-utils", () => {
  describe("s3UriToParams", () => {
    it("should parse a valid s3 URI", () => {
      const uri = "s3://my-bucket/my-key/nested/folder";
      const result = s3UriToParams(uri);
      expect(result).toEqual({ Bucket: "my-bucket", Key: "my-key/nested/folder" });
    });

    it("should throw an error for an invalid URI", () => {
      const uri = "invalid-uri";
      expect(() => s3UriToParams(uri)).toThrow(`Received invalid uri: '${uri}'`);
    });
  });
})
