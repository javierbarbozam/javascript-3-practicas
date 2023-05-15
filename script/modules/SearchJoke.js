const searchJoke = async () => {
  const input = document.getElementById('searchJoke');
  const keyWord = input.value
  input.value = ''
  
  const response = await fetch(`https://icanhazdadjoke.com/search?term=${keyWord}`, {
      headers: {
        'Accept': 'application/json'
      }
  });
  const data = await response.json()
  if (!data.search_term) { // in case of clicking btn without any search term
    return
  } else {
    generateJokes(data.results)
  }
}

const generateJokes = (data) => {
  const container = document.getElementById('searchJokeContainer');
  container.innerHTML = '' // this erase previous results

  if (!data.length) {
    container.innerHTML = `<p class="joke-text">No jokes found</p>`;
  } else {
    data.forEach(element =>
      container.insertAdjacentHTML(
        'beforeend',
        `<p class="joke-text">${element.joke}</p>`
      )
    )
  }
}

const jokesFound = () => {
  const searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', searchJoke)
}

export default jokesFound()