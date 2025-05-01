import { toTitleCase } from './to-title-case';

/**
 * Converts a field name to a more human-readable format.
 * Ex., "helloWorld" -> "Hello World"
 * @param value The value to convert.
 */
export function toFriendlyName(value: string): string {
  let _value = value.split(/(?=[A-Z])/).join(' ');
  _value = _value.split('_').join(' ');
  _value = _value.split('|').join(' ');
  _value = _value.replace(/ +/g, ' ');
  return toTitleCase(_value);
}
