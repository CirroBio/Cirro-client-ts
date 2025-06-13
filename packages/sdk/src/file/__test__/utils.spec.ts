import { getParentPath } from "../../file";

describe('getParentPath', () => {
  it('should return the parent path of a given file path', () => {
    const filePath = 's3://bucket/path/to/file.txt';
    const parentPath = getParentPath(filePath);
    expect(parentPath).toBe('s3://bucket/path/to');
  })
})
