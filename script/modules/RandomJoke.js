import {randomJoke} from "./JokesApi.js";

const showJoke = ({id, joke}) => {
  const container = document.getElementById('randomJoke-container');
  container.innerHTML = ''
  container.insertAdjacentHTML(
    "afterbegin",
    `<a href="./product/product.html?id=${id}" class="joke-text">${joke}</a>`
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