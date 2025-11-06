/**
 * Converts a string to PascalCase.
 * Ex., "hello world" -> "HelloWorld"
 * @param value The string to convert.
 */
export function toPascalCase(value: string): string {
  return value
    // Split on non-alphanumeric characters and spaces
    .split(/[^a-zA-Z0-9]+/)
    // Filter out empty strings
    .filter(word => word.length > 0)
    // Capitalize first letter and lowercase the rest
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    // Join all words together
    .join('');
}
