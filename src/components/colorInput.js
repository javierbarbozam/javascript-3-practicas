import { merch, chosenMerch } from "../config.js";
import { initColorChange } from "./colors.js";

const getColor = (object, property) => {
  return object.hasOwnProperty(property) ? Object.keys(object[property]) : null;
};

const createColorInput = () => {
  const colors = getColor(merch, chosenMerch.item);
  const container = document.getElementById("color-form");
  let input = "<span>Choose a color:</span>";
  colors.forEach((element) => (
		input += `
		<label>${element}<input class="product-color" type="radio" name="product-color" id="${element}"></label>
		`)
  );
  container.innerHTML = input;

  initColorChange()
};

export { createColorInput };
