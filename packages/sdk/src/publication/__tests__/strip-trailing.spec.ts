import { stripTrailing } from "../strip-trailing";

describe("stripTrailing", () => {
  it.each([
    ["https://pub/root//", "/", "https://pub/root"],
    ["/api", "/", "/api"],
    ["///", "/", ""],
    ["select 1 ;\n ; ", "; \t\r\n", "select 1"],
  ])("strips %j", (value, chars, expected) => {
    expect(stripTrailing(value, chars)).toBe(expected);
  });
});
