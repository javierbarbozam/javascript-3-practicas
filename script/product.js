import getColor from "./modules/publisher/ColorPublisher.js";
import getProduct from "./modules/publisher/ProductPublisher.js";
import { showTitle } from "./modules/subscriber/Title.js";
import { showJoke } from "./modules/subscriber/Joke.js";
import { visualizerMenu } from "./modules/subscriber/Visualizer.js";
import showProducts from "./modules/ShowProducts.js";
import generateRandomJoke from "./modules/RandomJoke.js";
import { showPrice } from "./modules/subscriber/Price.js";

await showProducts();
generateRandomJoke();
showJoke();
showTitle();
getColor();
getProduct();
visualizerMenu();
showPrice();
