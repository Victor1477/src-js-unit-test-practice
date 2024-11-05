import fs from "fs";
import path from "path";
import { expect, it, vi } from "vitest";
import { showError } from "./dom";
import { Window } from "happy-dom";

const htmlPath = path.join(process.cwd(), "index.html");
const indexHtml = fs.readFileSync(htmlPath).toString();

const window = new Window();
const document = window.document;
document.write(indexHtml);
vi.stubGlobal("document", document);

it("Should show error message", () => {
  const message = "It failed";
  showError(message);
});
