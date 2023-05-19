import { searchJoke } from "./JokesApi.js";

const inputValue = async () => {
  const input = document.getElementById("searchJoke").value;
  const result = await searchJoke(input)
  !input ? null : generateJokes(result) // if there is no word, it prevents calling all jokes from API
  document.getElementById("searchJoke").value = ""; // erase word from input
};

const generateJokes = (data) => {
  const container = document.getElementById("searchJokeContainer");
  container.innerHTML = ""; // this erase previous results
  !data.length ? (container.innerHTML = `<p class="joke-text">No jokes found</p>`) 
  :data.forEach((element) =>
    container.insertAdjacentHTML(
      "beforeend",
      `<a class="joke-text" href="./product/product.html?id=${element.id}">${element.joke}</a>`
  )
  );
};

const SearchJokeBtn = () => {
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", inputValue);
};

export default SearchJokeBtn;