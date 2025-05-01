/**
 * Extracts a value from an object using the json path notation, i.e. $.test.id
 * @param path JSON path to the value
 * @param obj Object to extract the value from
 */
export function extractFromObject(path: string, obj: object): any {
  const pathParts = path.slice(2).split('.')
  return pathParts.reduce(function(o, k) {
    return o && o[k];
  }, obj);
}
