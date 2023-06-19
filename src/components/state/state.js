const state = {
	favorite: [],
	interested: [],
	going: []
}

const userState = {
	getState() {
		return {...state}
	},
	setState(newState) {
		return {...state, ...newState}
	},
	addEvent(category, event) {
		state[category].push(event)
	},
	removeEvent(category, event) {
		state[category] = state[category].filter(element => element.id !== event.id)
	}
}