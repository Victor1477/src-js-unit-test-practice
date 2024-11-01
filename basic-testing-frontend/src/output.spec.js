import { describe, expect, it } from "vitest";
import { generateResultText } from "./output.js";

describe("generateResultText()", () => {
  it("Should return a string no matter what input is provided", () => {
    const input = "4";
    const input2 = 2;
    const input3 = {};
    const input4 = [];
    const input5 = false;

    const actual = generateResultText(input);
    const actual2 = generateResultText(input2);
    const actual3 = generateResultText(input3);
    const actual4 = generateResultText(input4);
    const actual5 = generateResultText(input5);

    expect(actual).toBeTypeOf("string");
    expect(actual2).toBeTypeOf("string");
    expect(actual3).toBeTypeOf("string");
    expect(actual4).toBeTypeOf("string");
    expect(actual5).toBeTypeOf("string");
  });

  it("Should return correct output", () => {
    const input = "4";
    const actual = generateResultText(input);

    expect(actual).toBe(`Result: ${input}`);
  });

  it("Should return invalid inputs response when invalid input", () => {
    const input = "invalid";
    const actual = generateResultText(input);

    expect(actual).match(/Invalid input. You must enter valid numbers./);
  });

  it("Should return empty response when there is no calculation to do", () => {
    const input = "no-calc";
    const actual = generateResultText(input);

    expect(actual).toBe("");
  });
});
