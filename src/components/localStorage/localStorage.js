class DataStorage {
  constructor(name) {
    this.name = name;
    this.data = JSON.parse(localStorage.getItem(this.name)) || {};
  }
  addData(property, value) {
    this.data[property] = value
    this.saveData();
  }
  getData(property) {
    return this.data[property]
    // return JSON.parse(localStorage.getItem(this.name));
  }
  deleteProduct(value) {
    value = parseInt(value);
    this.data = this.data.filter((element) => element.id !== id);
    this.saveData();
  }
  deleteData() {
    localStorage.removeItem(this.name);
    this.data = [];
  }
  saveData() {
    localStorage.setItem(this.name, JSON.stringify(this.data));
  }
}

export { DataStorage };