/** Removes any trailing characters found in `chars`, in linear time (a `/x+$/` regex can backtrack polynomially). */
export function stripTrailing(value: string, chars: string): string {
  let end = value.length;
  while (end > 0 && chars.includes(value[end - 1])) end--;
  return value.slice(0, end);
}
