import { bytesToString } from "../bytes-to-string";
import { normalizeDate } from "../normalize-date";
import { removeEndingSlash, removeStartingSlash } from "../slash";
import { toFriendlyName } from "../to-friendly-name";
import { toMoney } from "../to-money";
import { toTitleCase } from "../to-title-case";

describe('bytesToString', () => {
  it('should convert IEC bytes to string', () => {
    expect(bytesToString(12521, false)).toBe('12.2 KiB');
  });

  it('should convert SI bytes to string', () => {
    expect(bytesToString(12521, true, 2)).toBe('12.52 kB');
  });
});

describe('normalizeDate', () => {
  it('should work on a string input', () => {
    const dateString = '2022-12-01'
    const output = normalizeDate(dateString).toISOString().split('T')[0]
    expect(output).toEqual(dateString);
  });

  it('should work on a Date object input', () => {
    const dateString = '2022-12-01'
    const output = normalizeDate(new Date(dateString)).toISOString().split('T')[0]
    expect(output).toEqual(dateString);
  });
});

describe('removeStartingSlash', () => {
  it('should remove the starting slash from a string', () => {
    expect(removeStartingSlash('/example/path/')).toBe('example/path/');
    expect(removeStartingSlash('./example/path/')).toBe('example/path/');
  });
});

describe('removeEndingSlash', () => {
  it('should remove the ending slash from a string', () => {
    expect(removeEndingSlash('/example/path/')).toBe('/example/path');
  });
});

describe('toFriendlyName', () => {
  it('should add correct spaces to a string', () => {
    expect(toFriendlyName('ExampleUnfriendly|Name_here')).toBe('Example unfriendly name here');

  });
});

describe('toMoney', () => {
  it('convert an integer value to a money-formatted string', () => {
    expect(toMoney(25)).toBe('$25.00');
  });

  it('convert a float value to a money-formatted string', () => {
    expect(toMoney(117.15)).toBe('$117.15');
  });
});

describe('toTitleCase', () => {
  it('should convert a string to title case', () => {
    expect(toTitleCase('convert To Title case')).toBe('Convert to title case');
  });
});
