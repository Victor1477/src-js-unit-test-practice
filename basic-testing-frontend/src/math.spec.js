import { expect, it } from "vitest";
import { add } from "./math";

it("Should summarize all the values in an array", () => {
  const numbers = [3, 1, 2];

  const expected = numbers.reduce((acc, cur) => acc + cur, 0);

  const actual = add(numbers);

  expect(actual).toBe(expected);
});

it("Should yield NaN if at least one invalid number is provided", () => {
  const numbers = ["invalid", 1];

  const actual = add(numbers);

  expect(actual).toBeNaN();
});

it("Should yield a correct sum if an array of numberic values is provided", () => {
  const numbers = ["3", "1", "2"];

  const expected = numbers.reduce((acc, cur) => +acc + +cur, 0);

  const actual = add(numbers);

  expect(actual).toBe(expected);
});

it("Should yield 0 if an empty array is provided", () => {
  const actual = add([]);

  expect(actual).toBe(0);
});

it("Should throw error if no value is provided", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it("Should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
