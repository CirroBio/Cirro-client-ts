/**
 * Removes the starting slash from a path.
 * @param path Input path
 */
export function removeStartingSlash(path: string): string {
  if (!path) return path;
  if (path.startsWith('./')) return path.substring(2);
  if (path.startsWith('/')) return path.substring(1);
  return path;
}

/**
 * Removes the ending slash from a path.
 * @param path Input path
 */
export function removeEndingSlash(path: string): string {
  return path?.endsWith('/') ? path.slice(0, -1) : path;
}
