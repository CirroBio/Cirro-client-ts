/**
 * Normalize a string by trimming it and returning null if it is empty.
 * @param input The string to normalize.
 */
export function normalizeString(input: string): string {
  if (!input?.trim()) return null;
  return input.trim();
}
