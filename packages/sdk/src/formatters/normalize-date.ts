/**
 * Normalizes a date to UTC by adjusting for the timezone offset.
 * Useful when you are working with dates that may not include time information.
 * @param date
 */
export function normalizeDate(date: Date | string | undefined | null): Date {
  if (!date) throw new Error("Attempt to normalize undefined");
  if (!(date instanceof Date)) date = new Date(date);
  return new Date(date.getTime() - date.getTimezoneOffset() * -60000);
}
