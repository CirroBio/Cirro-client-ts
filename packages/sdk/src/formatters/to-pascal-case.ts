/**
 * Converts a string to PascalCase.
 * Ex., "hello world" -> "HelloWorld"
 * @param value The string to convert.
 */
export function toPascalCase(value: string): string {
  return value.replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
}
