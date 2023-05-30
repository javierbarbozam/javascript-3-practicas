import { specificJoke } from "./jokes-api.js";
import { chosenMerch } from "../config.js";
import { changeColor } from "./colors.js";
import { changeProduct } from "./product-list.js";

const getJoke = async () => {
  const jokeId = new URLSearchParams(window.location.search).get("id");
  let result = await specificJoke(jokeId);
  return (chosenMerch.jokeData.joke = result);
};

const jokePreview = async () => {
  const jokeDetails = document.getElementById("joke-preview");
  const container = document.getElementById("current-joke");
  container.innerHTML = await getJoke();
  jokeDetails.innerHTML = await getJoke();
};

const handleColorChange = (value) => {
  chosenMerch.color = value;
  chosenMerch.color === "black"
    ? (chosenMerch.jokeData.color = "white")
    : (chosenMerch.jokeData.color = "black");
  const container = document.getElementById("current-joke");
  chosenMerch.jokeData.color === "white"
    ? (container.style.color = "white")
    : (container.style.color = "black");
};

const handleProductChange = (value) => {
	const container = document.getElementById("current-joke");
  container.className = `current-joke current-joke-${value}`;
}

const initJokePreview = () => {
  jokePreview();
  changeColor.subscribe(handleColorChange);
	changeProduct.subscribe(handleProductChange)
};

export { initJokePreview };