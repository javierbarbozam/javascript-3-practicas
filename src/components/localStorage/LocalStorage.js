import { chosenMerch } from "../../config.js";

class SaveDataLocal {
	constructor(name, value) {
		this.name = name;
		this.value = value;
	}

	saveData() {
		localStorage.setItem(this.name, JSON.stringify(this.value))
	}

	getData () {
		console.log(localStorage.getItem(this.name))
	}
}

const prueba = new SaveDataLocal("merch", chosenMerch);

export {prueba}


const handleSaveData = (name, value) => {
	localStorage.setItem(name,`${value}`)
}

const handleImportData = (value) => {
	localStorage.getItem(value)
}