import { specificJoke } from "../JokesApi.js";
import { chosenMerch } from "../MerchInfo.js";

const getJoke = async () => {
  // get id from url
  const jokeId = new URLSearchParams(window.location.search).get("id");
  let result = await specificJoke(jokeId);
  chosenMerch.jokeData.joke = result;
};
await getJoke();

const showJoke = () => {
  const jokePreview = document.getElementById("joke-preview");
  jokePreview.innerHTML = chosenMerch.jokeData.joke;
  jokeProductPreview();
};

const jokeProductPreview = () => {
  const { joke } = chosenMerch.jokeData;
  const container = document.getElementById("current-product-joke");
  container.innerHTML = `${joke}`;
};

const jokeProduct = (data) => {
  const container = document.getElementById("current-product-joke");
  container.className = `current-joke current-joke-${data}`;
};

const jokeColor = (data) => {
  chosenMerch.jokeData.color = data === "black" ? "white" : "black";
  const container = document.getElementById("current-product-joke");
  chosenMerch.jokeData.color === "white"
  ? container.style.color = "white"
  : container.style.color = "black";
};

export { jokeColor, showJoke, jokeProduct };
