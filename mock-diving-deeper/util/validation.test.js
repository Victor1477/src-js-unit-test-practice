import { describe, it, expect } from "vitest";
import { validateNotEmpty } from "./validation";
import { ValidationError } from "./errors";

describe("Validation - validateNotEmpty()", () => {
  it("Should throw error with the provided message if no text is provided", () => {
    const result = () => {
      validateNotEmpty(null, "Failed");
    };
    expect(result).toThrowError(ValidationError);
    expect(result).toThrowError("Failed");
  });

  it("Should throw error with the provided message if a empty text is provided", () => {
    const result = () => {
      validateNotEmpty("", "Failed");
    };
    expect(result).toThrowError(ValidationError);
    expect(result).toThrowError("Failed");
  });

  it("Should not throw erro if a valid text is provided", () => {
    const result = () => {
      validateNotEmpty("text", "Failed");
    };
    expect(result).not.toThrowError(ValidationError);
    expect(result).not.toThrowError("Failed");
  });
});
