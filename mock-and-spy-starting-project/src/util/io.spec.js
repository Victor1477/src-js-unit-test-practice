import { describe, it, expect, vi } from "vitest";
import writeData from "./io";
import { promises as fs, writeFile } from "fs";
import path from "path";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: vi.fn((...args) => {
        return args[2];
      }),
    },
  };
});

describe("writeData()", () => {
  it("Should execute the writeFile method", () => {
    const testData = "Just simple data";
    const filename = "testfiledata.txt";
    writeData(testData, filename);
    expect(fs.writeFile).toBeCalledWith(filename, testData);
  });
});
