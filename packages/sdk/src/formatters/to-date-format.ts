const dateFormat = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });

/**
 * Converts a date string or Date object to MM/DD/YY date string.
 * Ex., "2023-10-01" -> "10/01/23"
 * @param date Input date string or Date object.
 */
export function toDateFormat(date: string | Date): string {
  if (!date) return null;
  const d: Date = (typeof date === 'string') ? new Date(date) : date
  return dateFormat.format(d);
}
