import {
  addProduct,
  removeAllProduct,
  removeOneProduct,
  handleCartDisplay,
  generateCart,
} from "../../../components/cart/cart-features.js";

const initCart = () => {
  addProduct();
  removeAllProduct();
  removeOneProduct();
  handleCartDisplay();
  generateCart();
};

export { initCart };
