const searchJoke = async () => {
	const input = document.getElementById('searchJoke');
	const keyWord = input.value
	input.value = ''
	
	if (keyWord) {
		const response = await fetch(`https://icanhazdadjoke.com/search?term=${keyWord}`, {
			headers: {
				'Accept': 'application/json'
			}
		});
			const data = await response.json()
			console.log(data)
	}
}

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', searchJoke)

export default searchJoke()