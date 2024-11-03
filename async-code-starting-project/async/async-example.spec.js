import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("Should generate a token value string", (done) => {
  const userEmail = "teste@test.com";
  generateToken(userEmail, (error, token) => {
    try {
      expect(token).toBeDefined();
      done();
    } catch (err) {
      done(err);
    }
  });
});

it("Should generate a token value string", () => {
  const userEmail = "teste@test.com";
  expect(generateTokenPromise(userEmail)).resolves.toBeTypeOf("string");
});

it("Should generate a token value string", async () => {
  const userEmail = "teste@test.com";

  const token = await generateTokenPromise(userEmail);

  expect(token).toBeTypeOf("string");
});
