import { it, describe, expect, beforeEach } from "vitest";
import { extractPostData } from "./posts";

describe("extractPostData()", () => {
  let testTitle = "Simple title";
  let testContent = "Simple content";
  let form;
  beforeEach(() => {
    form = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });

  it("Should extract data from form", () => {
    const result = extractPostData(form);
    expect(result.title).toBe(testTitle);
    expect(result.content).toBe(testContent);
  });
});
