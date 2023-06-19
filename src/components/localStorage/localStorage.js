class DataStorage {
  constructor(name) {
    this.name = name;
    this.data = JSON.parse(localStorage.getItem(this.name)) || {};
  }
  addProperty(property, value) {
    this.data[property] = value
    this.saveData();
  }
  getProperty(property) {
    return this.data[property]
  }
  saveData() {
    localStorage.setItem(this.name, JSON.stringify(this.data));
  }
}

export { DataStorage };