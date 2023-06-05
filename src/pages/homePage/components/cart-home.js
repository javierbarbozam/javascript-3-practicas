import {
  generateCart,
  handleCartDisplay,
} from "../../../components/cart/cart-features.js";

const initCart = () => {
  handleCartDisplay();
  generateCart();
};

export {initCart}