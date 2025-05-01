/**
 * Pretty prints a JSON object with the specified indentation level.
 * @param obj JSON object to be pretty printed.
 * @param indentLevel Number of spaces to use for indentation.
 */
export function jsonPrettyPrint(obj: object, indentLevel=2): string {
  return JSON.stringify(obj, null, indentLevel);
}
