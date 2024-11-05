import { expect, it, vi } from "vitest";
import { sendDataRequest } from "./http";
import { HttpError } from "./errors";

const responseData = "It Works!";

it("Should return the correct available response data", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn((url, options) => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          json: () => {
            return new Promise((resolve, reject) => {
              resolve(responseData);
            });
          },
        });
      });
    })
  );
  const response = await sendDataRequest("Dummy data");
  return expect(response).toBe(responseData);
});

it("Should throw error if the request fails", () => {
  vi.stubGlobal(
    "fetch",
    vi.fn((url, options) => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: false,
          json: () => {
            return new Promise((resolve, reject) => {
              resolve();
            });
          },
        });
      });
    })
  );
  return expect(sendDataRequest("Dummy data")).rejects.toThrow(HttpError);
});

it("Should convert the body to a string before sending request", async () => {
  const requestData = { key: "content" };
  vi.stubGlobal(
    "fetch",
    vi.fn((url, options) => {
      return new Promise((resolve, reject) => {
        if (typeof options.body !== "string") {
          return reject("Not a string.");
        }
        resolve({
          ok: true,
          json: () => {
            return new Promise((resolve, reject) => {
              resolve();
            });
          },
        });
      });
    })
  );

  let errorMessage;

  try {
    await sendDataRequest(requestData);
  } catch (e) {
    errorMessage = e;
  }

  expect(errorMessage).not.toBe("Not a string.");
});
