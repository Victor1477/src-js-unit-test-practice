import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
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

  it("Should contruct the HttpError with undefined params if no param is provided", () => {
    const instance = new HttpError();

    expect(instance).toBeTruthy();
    expect(instance.statusCode).toBeUndefined();
    expect(instance.message).toBeUndefined();
    expect(instance.data).toBeUndefined();
  });
});

describe("class ValidationError", () => {
  it("Should contruct the ValidationError classe with the provided param", () => {
    const message = "Validation failed!";

    const instance = new ValidationError(message);

    expect(instance).toBeTruthy();
    expect(instance.message).toEqual(message);
  });
});
