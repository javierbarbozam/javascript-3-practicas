class Publisher {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers.filter((element) => element !== fn);
  }

  onChange(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

export { Publisher };
