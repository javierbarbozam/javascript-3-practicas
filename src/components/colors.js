import Publisher from "../Publisher.js";
import { createColorInput } from "./colorInput.js";

const changeColor = new Publisher();

const handleColorChange = (event) => {
  const color = event.currentTarget.id;
  changeColor.onChange(color);
};

const initColorChange = () => {
  const inputColor = document.querySelectorAll('input[name="product-color"]');
  inputColor.forEach((element) =>
    element.addEventListener("change", handleColorChange)
  );
};

export { changeColor, initColorChange };