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

  it("Should throw error if no title is provided", () => {
    const result = () => {
      form.title = null;
      extractPostData(form);
    };
    expect(result).toThrowError(/A title must be provided./);
  });

  it("Should throw error if no content is provided", () => {
    const result = () => {
      form.content = null;
      extractPostData(form);
    };
    expect(result).toThrowError(/Content must not be empty!/);
  });
});
