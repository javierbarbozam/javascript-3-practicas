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
    state[category].push(event);
    this.saveState();
  },

  removeEvent(category, event) {
    this.getLocalState();
    state[category] = state[category].filter(
      (element) => element.id !== event.id
    );
    this.saveState();
  },

  getEvent(category, eventId) {
    const event = state[category].find((element) => element.id === eventId);
    return event;
  },

  getLocalState() {
    const localState = JSON.parse(localStorage.getItem("state"));
    if (localState) {
      state.favorite = localState.favorite || [];
      state.interested = localState.interested || [];
      state.going = localState.going || [];
      this.saveState();
    }
  },

  saveState() {
    localStorage.setItem("state", JSON.stringify(state));
  },

  setState(newState) {
    return { ...state, ...newState };
  },
};

userState.getLocalState();

const stateImmutable = Object.freeze(userState);
export { stateImmutable };
