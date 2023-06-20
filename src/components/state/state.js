let state = {
  favorite: [],
  interested: [],
  going: [],
};

const userState = {
  getState() {
    return { ...state };
  },

  addEvent(category, event) {
    const validation = state[category].find(element => element.id === event.id);
    if (validation) {
      return
    } else {
      state[category].push(event);
      this.saveState();
    }
  },

  getLocalState() {
    const localState = JSON.parse(localStorage.getItem("state"));
    if (localState) {
      state.favorite = localState.favorite || []
      state.interested = localState.interested || []
      state.going = localState.going || []
    }
  },

  removeGoingEvent(event) {
    state.going = state.going.filter(
      (element) => element.id !== event.id
    );
    this.saveState();
  },

  removeInterestedEvent(event) {
    state.interested = state.interested.filter(
      (element) => element.id !== event.id
    );
    this.saveState();
  },

  removeEvent(category, event) {
    this.getLocalState();
    state[category] = state[category].filter(
      (element) => element.id !== event.id
    );
    this.saveState();
  },

  saveState() {
    localStorage.setItem("state", JSON.stringify(state));
  },

  setState(newState) {
    return { ...state, ...newState };
  },
};

userState.getLocalState()

const stateImmutable = Object.freeze(userState);
export { stateImmutable };
