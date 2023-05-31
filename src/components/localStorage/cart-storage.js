import { chosenMerch } from "../../config.js";

const merchLocalStorage = () => {
	localStorage.setItem('cartMerch', chosenMerch)
}