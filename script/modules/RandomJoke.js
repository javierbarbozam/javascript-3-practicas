import {randomJoke} from "./JokesApi.js";

const showJoke = (data) => {
  const container = document.getElementById('randomJoke-container');
  container.insertAdjacentHTML(
    "afterbegin",
    `<a href="./product/product.html?id=${data.id}" class="joke-text">${data.joke}</a>`
  )
};

const generateRandomJoke = () => {
  const btn = document.getElementById('randomJokeBtn');
  btn.addEventListener('click', async () => {
    const joke = await randomJoke();
    showJoke(joke);
  });
};

export default generateRandomJoke;