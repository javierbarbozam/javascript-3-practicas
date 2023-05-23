import Publisher from "./Publisher.js";
import { titleProduct } from "../subscriber/Title.js";
import { visualizerProduct } from "../subscriber/Visualizer.js";
import { jokeProduct } from "../subscriber/Joke.js";
import { PriceProduct } from "../subscriber/Price.js";

const selectProduct = new Publisher;

selectProduct.subscribe(titleProduct)
selectProduct.subscribe(visualizerProduct)
selectProduct.subscribe(jokeProduct)
selectProduct.subscribe(PriceProduct)

const getProduct = () => {
  let values = document.querySelectorAll('input[name=joke-product]')
  values.forEach( (item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      selectProduct.onChange(item.value)
    });
  });
}

export default getProduct;