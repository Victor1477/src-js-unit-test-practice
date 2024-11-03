import { describe, expect, it } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("Should transform numeric string to number", () => {
    const numericString = "789";
    const result = transformToNumber(numericString);
    expect(result).toBeTypeOf("number");
  });

  it("Should transform numeric string to number", () => {
    const numericString = "789";
    const result = transformToNumber(numericString);
    expect(result).toBe(789);
  });

  it("Should yield NaN when trying to transform non-numeric string to number", () => {
    const input = "This is a simple string 789";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("Should return an array of numeric values if an array of numeric strings is provided", () => {
    const numericStringValues = ["1", "2"];

    const actual = cleanNumbers(numericStringValues);

    expect(actual[0]).toBeTypeOf("number");
    expect(actual[1]).toBeTypeOf("number");
    expect(actual).toEqual([1, 2]);
  });

  it("Should throw error if at least one empty string is provided", () => {
    const numericStringValues = ["1", ""];

    const actual = () => {
      cleanNumbers(numericStringValues);
    };

    expect(actual).toThrow();
  });
});
