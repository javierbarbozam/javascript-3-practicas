import Publisher from "./Publisher.js";
import { titleColor } from "../subscriber/Title.js";
import { jokeColor } from "../subscriber/Joke.js";
import { visualizerColor } from "../subscriber/Visualizer.js";
import { priceColor } from "../subscriber/Price.js";

const productColor = new Publisher();

productColor.subscribe(titleColor);
productColor.subscribe(jokeColor);
productColor.subscribe(visualizerColor);
productColor.subscribe(priceColor);

const getColor = () => {
  const inputValues = document.querySelectorAll('input[name="product-color"]');
  inputValues.forEach((item) => {
    item.addEventListener("change", () => {
      item.checked ? productColor.onChange(item.id) : null;
    });
  });
};

export default getColor;
