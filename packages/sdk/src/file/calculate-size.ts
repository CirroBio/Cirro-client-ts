import { FileSystemObject } from "./file-object.model";

/**
 * Calculate the total size of all files in a directory.
 * @param files - An array of FileSystemObject representing the files in the directory.
 * @return The total size of all files in bytes.
 */
export function calculateTotalSize(files: Array<FileSystemObject>): number {
  let totalSize = 0;
  for (const file of files) {
    totalSize += file.size;
  }
  return totalSize;
}
