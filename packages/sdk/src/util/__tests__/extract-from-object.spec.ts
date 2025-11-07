import { extractFromObject } from "../extract-from-object";

describe("extractFromObject", () => {
  const obj = {
    user: {
      name: "Cirro",
      age: 30
    },
    test: 'test'
  };

  it("basic path extraction", () => {
    expect(extractFromObject("$.user.name", obj)).toBe("Cirro");
    expect(extractFromObject("$.user.age", obj)).toBe(30);
    expect(extractFromObject("$.test", obj)).toBe("test");
  });

  it("should extract entire nested object", () => {
    expect(extractFromObject("$.user", obj)).toEqual(obj.user);
  });

  it("should return undefined for non-existent property", () => {
    expect(extractFromObject("$.bad", obj)).toBeUndefined();
  });

  it("should handle empty object", () => {
    expect(extractFromObject("$.name", {})).toBeUndefined();
  });
});
