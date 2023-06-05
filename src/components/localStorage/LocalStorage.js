class SaveDataLocal {
  constructor(dataName) {
    this.dataName = dataName;
    this.products = JSON.parse(localStorage.getItem(this.dataName)) || [];
  }
  setProduct(product) {
    this.products.push(product);
    this.saveData();
  }
	getData () {
		return JSON.parse(localStorage.getItem(this.dataName))
	}
  deleteProduct(id) {
		id = parseInt(id)
		this.products = this.products.filter((element) => element.id !== id);
    this.saveData();
  }
  deleteData() {
    localStorage.clear();
		this.products = []
  }
  saveData() {
    localStorage.setItem(this.dataName, JSON.stringify(this.products));
  }
}

export default SaveDataLocal;