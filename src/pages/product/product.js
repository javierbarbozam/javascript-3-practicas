import { initColorChange } from "../../components/colors.js";
import { initDetails } from "../../components/details.js";
import { initJokePreview } from "../../components/joke-preview.js";
import { initProductList } from "../../components/product-list.js";
import generateRandomJoke from "../../components/random-joke.js";
import { initVisualizer } from "../../components/visualizer.js";
import { initCart } from "./components/cart-product.js";

initVisualizer();
initColorChange();
initProductList();
initDetails();
initJokePreview();
generateRandomJoke(); // not done yet
initCart();

import { prueba } from "../../components/localStorage/LocalStorage.js";
import { chosenMerch } from "../../config.js";

prueba.saveData()
prueba.getData()