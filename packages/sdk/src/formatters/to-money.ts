const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

/**
 * Converts a number or bigint to a formatted money string.
 * Ex., 1234.56 -> $1,234.56
 * @param value Input number or bigint value.
 */
export function toMoney(value: number | bigint): string {
  return money.format(value as number);
}
