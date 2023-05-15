const JokeData = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'}
  });
  const data = await response.json()
  showJoke(data.joke)
}

const showJoke = (data) => {
  const text = document.getElementById('randomJoke');
  text.innerHTML = data
}

const generateRandomJoke = () => {
  const btn = document.getElementById('randomJokeBtn');
  btn.addEventListener('click', JokeData)
}

export default generateRandomJoke()