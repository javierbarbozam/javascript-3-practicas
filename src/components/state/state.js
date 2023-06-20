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
    const validation = state[category].indexOf(event);
    if (validation === -1) {
      state[category].push(event);
      this.saveState();
    } else {
      return;
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
