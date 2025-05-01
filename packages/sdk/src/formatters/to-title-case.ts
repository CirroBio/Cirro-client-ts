/**
 * Converts a string to Title case.
 * Ex., "hello world" -> "Hello world"
 * @param value
 */
export function toTitleCase(value: string): string {
  if (!value) return null;
  return value[0].toUpperCase() + value.slice(1).toLowerCase();
}
