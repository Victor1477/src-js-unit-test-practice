import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("HttpError", () => {
  it("Should contruct the HttpError classe with the provided params", () => {
    const statusCode = 400;
    const message = "Failed!";
    const data = { message: "Fatal Error" };

    const instance = new HttpError(statusCode, message, data);

    expect(instance).toBeTruthy();
    expect(instance.statusCode).toEqual(statusCode);
    expect(instance.message).toEqual(message);
    expect(instance.data).toEqual(data);
  });
});

describe("ValidationError", () => {
  it("Should contruct the ValidationError classe with the provided param", () => {
    const message = "Validation failed!";

    const instance = new ValidationError(message);

    expect(instance).toBeTruthy();
    expect(instance.message).toEqual(message);
  });
});
