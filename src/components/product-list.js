import Publisher from "../Publisher.js";
import { chosenMerch, merch } from "../config.js";

const changeProduct = new Publisher();

const initProductList = () => {
  const products = Object.keys(merch);
  let list = "";
  products.forEach((element) => {
    list += `<label class="joke-product-item" data-product=${element}>
      <img src="../../img/product-${element}-white.jpg" alt="${chosenMerch.color} ${element}">
			<input style="width:100px" type="radio" name="joke-product" value="${element}">
		</label>`;
  });

  let container = document.getElementById("product-form");
  container.insertAdjacentHTML("afterbegin", `${list}`);
  handleProductChange();
  hideProduct();
};

const handleProductChange = () => {
  const products = document.querySelectorAll("input[name=joke-product]");
  products.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      changeProduct.onChange(element.value);
      hideProduct();
    });
  });
};

const hideProduct = () => {
  const items = document.querySelectorAll('label[class="joke-product-item"]');
  const currentProduct = chosenMerch.item;
  items.forEach((element) => {
    element.dataset.product === currentProduct
      ? (element.style.display = "none")
      : (element.style.display = "inline");
  });
};

export { changeProduct, initProductList };
