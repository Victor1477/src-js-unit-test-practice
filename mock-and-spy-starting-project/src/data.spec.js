import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("Should log the data to the console", () => {
    const logger = vi.fn();
    generateReportData(logger);

    expect(logger).toBeCalledWith("Some dummy data for this demo app");
  });
});
