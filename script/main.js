import RandomJoke from "./modules/RandomJoke.js";

const generateRandomJoke = () => {
	const btn = document.getElementById('randomJokeBtn');
	btn.addEventListener('click', RandomJoke)
}

generateRandomJoke()
