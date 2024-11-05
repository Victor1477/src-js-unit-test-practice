import fs from "fs";
import path from "path";
import { beforeEach, expect, it, vi } from "vitest";
import { showError } from "./dom";
import { Window } from "happy-dom";

const htmlPath = path.join(process.cwd(), "index.html");
const indexHtml = fs.readFileSync(htmlPath).toString();

const window = new Window();
const document = window.document;
document.write(indexHtml);
vi.stubGlobal("document", document);

beforeEach(() => {
  document.body.innerHTML = "";
  document.write(indexHtml);
});

it("Should add an error paragraph to the id='errors' element", () => {
  const message = "test";
  showError(message);
  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstChild;
  expect(errorParagraph).not.toBeNull();
});

it("Should not contain an error paragraph initially", () => {
  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstChild;
  expect(errorParagraph).toBeNull();
});

it("Should display the provided error on the paragraph", () => {
  const message = "test";
  showError(message);
  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstChild;
  expect(errorParagraph.textContent).toBe(message);
});
