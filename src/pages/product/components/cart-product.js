import {
  addProduct,
  handleCartDisplay,
  generateCart,
} from "../../../components/cart/cart-features.js";

const initCart = () => {
  addProduct();
  handleCartDisplay();
};

export { initCart };
