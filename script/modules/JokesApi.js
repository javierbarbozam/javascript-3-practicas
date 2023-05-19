const randomJoke = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  const data = await response.json();
  return data;
};

const searchJoke = async (keyWord) => {
  const response = await fetch(`https://icanhazdadjoke.com/search?term=${keyWord}`, {
      headers: {
        'Accept': 'application/json'
      }
  });
  const data = await response.json()
  return data.results
}

export {randomJoke, searchJoke};