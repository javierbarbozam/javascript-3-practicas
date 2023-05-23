import { merch, chosenMerch } from "../MerchInfo.js";

const showPrice = () => {
  let currentProduct = merch.find(
    (element) => element.item === chosenMerch.item
  );
  const container = document.getElementById("product-price");
  chosenMerch.color === "white"
    ? (container.innerHTML = `${currentProduct.price.white}`)
    : (container.innerHTML = `${currentProduct.price.black}`);
};

const PriceProduct = (data) => {
  chosenMerch.item = data;
  showPrice();
};

const priceColor = (data) => {
  chosenMerch.color = data;
  showPrice();
};

export { showPrice, PriceProduct, priceColor };
