import {
  generateCart,
  handleCartDisplay,
  removeAllProduct,
  removeOneProduct,
} from "../../../components/cart/cart-features.js";

const initCart = () => {
	removeAllProduct();
  handleCartDisplay();
  removeOneProduct();
  generateCart();
};

export {initCart}