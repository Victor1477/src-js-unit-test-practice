import { generateResultText, outputResult } from "./src/output.js";
import { readForm } from "./src/parser.js";
import { calculateResult } from "./src/util/validation.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = readForm(form);

  let result = calculateResult(numberInputs);
  let resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
