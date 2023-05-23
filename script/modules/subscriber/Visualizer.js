import { chosenMerch } from "../MerchInfo.js";

const visualizerMenu = () => {
  const items = document.querySelectorAll('label[class="joke-product-item"]');
  const currentProduct = chosenMerch.item;
  items.forEach((element) => {
    element.dataset.product === currentProduct
      ? (element.style.display = "none")
      : (element.style.display = "inline");
  });
};

const visualizerCurrent = () => {
  const image = document.getElementById("current-product-img");
  const { item, color } = chosenMerch;
  image.setAttribute("src", `../img/product-${item}-${color}.jpg`);
  image.setAttribute("alt", `${color} ${item}`);
};
visualizerCurrent();

// visualizer observer
const visualizerProduct = (data) => {
  chosenMerch.item = data;
  visualizerMenu();
  visualizerCurrent();
};

// visualizer color observer
const visualizerColor = (data) => {
  chosenMerch.color = data;
  visualizerCurrent();
};

export { visualizerMenu, visualizerProduct, visualizerColor };
