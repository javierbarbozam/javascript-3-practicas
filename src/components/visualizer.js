import { changeColor } from "./colors.js";
import { chosenMerch } from "../config.js";
import { changeProduct } from "./product-list.js";

const currentImage = document.getElementById("current-product-img");

const handleColorChange = (value) => {
  chosenMerch.color = value;
  currentImage.setAttribute(
    "src",
    `../../img/product-${chosenMerch.item}-${chosenMerch.color}.jpg`
  );
  currentImage.setAttribute("alt", `${chosenMerch.color} ${chosenMerch.item}`);
};

const handleProductChange = (product) => {
  chosenMerch.item = product;
  currentImage.setAttribute(
    "src",
    `../../img/product-${chosenMerch.item}-${chosenMerch.color}.jpg`
  );
  currentImage.setAttribute("alt", `${chosenMerch.color} ${chosenMerch.item}`);
};

const changeVisualizer = () => {
  changeColor.subscribe(handleColorChange);
  changeProduct.subscribe(handleProductChange);
};

const initVisualizer = () => {
  currentImage.setAttribute(
    "src",
    `../../img/product-${chosenMerch.item}-${chosenMerch.color}.jpg`
  );
  changeVisualizer();
};

export { initVisualizer };
