
/**
 * Returns the parent directory of a given file path.
 */
export function getParentPath(path: string): string {
  return path.split("/").slice(0, -1).join("/") ?? ""
}
