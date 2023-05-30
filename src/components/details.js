import { chosenMerch, merch } from "../config.js";
import { changeColor } from "./colors.js";
import { changeProduct } from "./product-list.js";

const title = document.getElementById("product-title");
const price = document.getElementById("product-price");

const handleColorChange = (value) => {
  chosenMerch.color = value;
  title.innerHTML = `${chosenMerch.color} ${chosenMerch.item}`;
  price.innerHTML = `${merch[chosenMerch.item][chosenMerch.color]}`;
};

const handleProductChange = (value) => {
  chosenMerch.item = value;
  title.innerHTML = `${chosenMerch.color} ${chosenMerch.item}`;
  price.innerHTML = `${merch[chosenMerch.item][chosenMerch.color]}`;
};

const initDetails = () => {
  handleColorChange(chosenMerch.color);
  changeColor.subscribe(handleColorChange);
  changeProduct.subscribe(handleProductChange);
};

export { initDetails };
