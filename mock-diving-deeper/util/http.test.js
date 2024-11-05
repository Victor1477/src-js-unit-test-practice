import { expect, it, vi } from "vitest";
import { sendDataRequest } from "./http";
import { HttpError } from "./errors";

const requestData = { key: "content" };
const responseData = { key2: "content2" };

const fetchMock = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string.");
    }
    resolve({
      ok: true,
      json: () => {
        return new Promise((resolve, reject) => {
          resolve(responseData);
        });
      },
    });
  });
});

vi.stubGlobal("fetch", fetchMock);

it("Should return the correct available response data", async () => {
  const response = await sendDataRequest(requestData);
  return expect(response).toBe(responseData);
});

it("Should throw error if the request fails", () => {
  fetchMock.mockImplementationOnce((url, options) => {
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
  });
  return expect(sendDataRequest(requestData)).rejects.toBeInstanceOf(HttpError);
});

it("Should convert the body to a string before sending request", async () => {
  let errorMessage;

  try {
    await sendDataRequest(requestData);
  } catch (e) {
    errorMessage = e;
  }

  expect(errorMessage).not.toBe("Not a string.");
});
