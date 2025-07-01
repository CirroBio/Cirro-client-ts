import { DatasetAssetsManifest } from "@cirrobio/api-client";
import { ManifestParser } from "../manifest-parser";
import { FileSystemObjectType } from "../models/file-object.model";


describe("manifestParser", () => {
  const testManifest: DatasetAssetsManifest = {
    domain: 's3://example-bucket/datasets',
    files: [
      {
        path: 'file1.txt',
        size: 1234,
        metadata: {
          description: 'Test file 1',
        }
      },
      {
        path: 'folder1/folder2/file2.txt',
        size: 1234,
        metadata: {
        }
      },
      {
        path: 'folder1/folder2/file3.txt',
        size: 1234,
        metadata: {
        }
      },
    ],
  }

  it("should generate assets", () => {
    const parser = new ManifestParser(testManifest);
    const assets = parser.generateAssets();
    expect(assets.length).toBe(3);
    expect(assets[0].url).toBe('s3://example-bucket/datasets/file1.txt');
    expect(assets[0].size).toBe(testManifest.files[0].size);
    expect(assets[0].name).toBe('file1.txt');
    expect(assets[0].id).toBeTruthy();
    expect(assets[1].url).toBe('s3://example-bucket/datasets/folder1/folder2/file2.txt');
    expect(assets[1].size).toBe(testManifest.files[0].size);
    expect(assets[1].name).toBe('file2.txt');
    expect(assets[1].path).toBe('folder1/folder2');
    // calculate check
    expect(assets.totalSizeBytes).toBe(3702);
    expect(assets.totalSize).toBe("3.6 KiB");

  });

  it("should generate assets with folders", () => {
    const parser = new ManifestParser(testManifest);
    const assets = parser.generateAssets(true);
    const folders = assets.filter(a => a.type === FileSystemObjectType.FOLDER);
    expect(folders.length).toBe(2);
    expect(folders[0].name).toBe('folder1');
    expect(folders[1].name).toBe('folder2');
    const files = assets.filter(a => a.type === FileSystemObjectType.FILE);
    expect(files.length).toBe(3);
  });
})
