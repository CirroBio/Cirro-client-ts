/**
 * Removes the starting slash from a path.
 * @param path Input path
 */
export function removeStartingSlash(path: string): string {
  return path?.startsWith('/') ? path.substring(1) : path;
}

/**
 * Removes the ending slash from a path.
 * @param path Input path
 */
export function removeEndingSlash(path: string): string {
  return path?.endsWith('/') ? path.slice(0, -1) : path;
}
