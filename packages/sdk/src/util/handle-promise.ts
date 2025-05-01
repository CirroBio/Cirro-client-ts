/**
 * Ignores dangling promise rejections.
 * @param err The error to ignore.
 */
export function handlePromiseError(err): void {
  console.warn(err);
}
