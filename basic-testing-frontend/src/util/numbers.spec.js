import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

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
