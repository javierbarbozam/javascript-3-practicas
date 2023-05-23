import {chosenMerch, merch } from "./MerchInfo.js";

const getProducts = async () => {
  let input = "";
  merch.forEach((element) => {
    input += `<label class="joke-product-item" data-product=${element.item}>
      <img src="../../img/product-${element.item}-white.jpg" alt="${chosenMerch.color} ${element.item}">
			<input style="width:100px" type="radio" name="joke-product" value="${element.item}">
		</label>`;
  });
  return input;
};

const showProducts = async () => {
  let container = document.querySelector("#product-form");
  container.insertAdjacentHTML("afterbegin", `${await getProducts()}`);
};

export default showProducts;