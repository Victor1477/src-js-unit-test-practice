import { add } from "../math.js";
import { cleanNumbers } from "./numbers.js";

export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error("Invalid input - must not be empty.");
  }
}

export function validateNumber(number) {
  if (isNaN(number) || typeof number !== "number") {
    throw new Error("Invalid number input.");
  }
}

export function calculateResult(numberInputs) {
  let result = "";
  try {
    const numbers = cleanNumbers(numberInputs);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}
