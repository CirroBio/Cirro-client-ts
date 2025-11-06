import { FILE_IMAGE_EXTENSIONS, FILE_TXT_GENOMICS_EXTENSIONS, matchesExtension } from "../extensions.fn";

describe("extensions", () => {
  it("should return true when file extension matches", () => {
    expect(matchesExtension("document.PDF", ["pdf"])).toBe(true);
    expect(matchesExtension("image.jpg", FILE_IMAGE_EXTENSIONS)).toBe(true);
    expect(matchesExtension("folder1/sample1.fastq", FILE_TXT_GENOMICS_EXTENSIONS)).toBe(true);
    expect(matchesExtension("sample1.fastq.gz", FILE_TXT_GENOMICS_EXTENSIONS)).toBe(true);
  });

  it("should return false when file extension does not match", () => {
    expect(matchesExtension("document.pdf", ["png"])).toBe(false);
  });

  it("should handle empty extensions array", () => {
    expect(matchesExtension("file.txt", [])).toBe(false);
  });

  it("should handle files with multiple dots", () => {
    expect(matchesExtension("my.file.name.txt", ["txt"])).toBe(true);
  });

  it("should handle files with no extension", () => {
    expect(matchesExtension("README", ["txt"])).toBe(false);
  });

  it("should handle files with starting dot", () => {
    expect(matchesExtension(".", [""])).toBe(true);
    expect(matchesExtension(".gitignore", ["gitignore"])).toBe(true);
    expect(matchesExtension(".bashrc", ["bashrc"])).toBe(true);
  });

  it("should handle empty string filename", () => {
    expect(matchesExtension("", ["txt"])).toBe(false);
  });
});
