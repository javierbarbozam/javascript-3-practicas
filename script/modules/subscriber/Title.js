import { chosenMerch } from "../MerchInfo.js";

const titleColor = (data) => {
  chosenMerch.color = data;
  showTitle();
};

const titleProduct = (data) => {
  chosenMerch.item = data;
  showTitle();
};

const showTitle = () => {
  const pageTitle = document.getElementById("product-title");
  pageTitle.innerHTML = `<h1>${chosenMerch.color} ${chosenMerch.item} with joke</h1>`;
};

export { titleColor, titleProduct, showTitle };
