import { Cart, CartItem } from "./Cart.js";
import { chosenMerch } from "../../config.js";

// idProduct created in order to delete an specific item
// Every time AddProduct is clicked, the id count increases for next item

const cart = new Cart();
let idProduct = 0;

const addProduct = () => {
  const addBtn = document.getElementById("add-product");
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const product = new CartItem(
      idProduct,
      chosenMerch.item,
      chosenMerch.color,
      chosenMerch.price,
      chosenMerch.jokeData.joke
    );
    idProduct++;
    cart.setProduct(product);
    generateCart();

    // open cart
    const cartContainer = document.getElementById("cart-wrapper");
    cartContainer.classList.contains("cart-open")
      ? null
      : cartContainer.classList.toggle('cart-open');
  });
};

const removeAllProduct = () => {
  const removeAllBtn = document.getElementById("remove-all-cart");
  removeAllBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cart.removeAll();
    generateCart();
  });
};

const removeOneProduct = () => {
  const removeBtn = document.querySelectorAll(
    'button[data-id="remove-product"]'
  );
  removeBtn.forEach((element) =>
    element.addEventListener("click", (event) => {
      cart.products = cart.products.filter(
        (item) => item.id !== parseInt(event.currentTarget.value)
      );
      generateCart();
    })
  );
};

const handleCartDisplay = () => {
  const cartBtn = document.getElementById("cart-panel-btn");
  const cartContainer = document.getElementById("cart-wrapper");
  cartBtn.addEventListener("click", () => {
    cartContainer.classList.toggle("cart-open");
  });
};

const generateCart = () => {
  const container = document.getElementById("cart-item-wrapper");
  container.innerHTML = "";
  let productContainer = "";
  cart.products.forEach(
    (element) =>
      (productContainer += `<div class="cart-item">
        <span class="cart-item__title">${element.color} ${element.product} with joke</span>
        <span class="cart-item__price">${element.price}</span>
        <span class="cart-item__joke">Joke: ${element.joke}</span>
        <button value="${element.id}" class="cart-item__btn" data-id="remove-product">Remove</button>
    </div>`)
  );
  container.insertAdjacentHTML("afterbegin", productContainer);
  removeOneProduct();
};

export { 
  addProduct, 
  removeAllProduct, 
  removeOneProduct,
  handleCartDisplay,
  generateCart 
};
