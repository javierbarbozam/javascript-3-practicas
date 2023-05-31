class Cart {
  constructor() {
    this.products = [];
  }

  setProduct(product) {
    this.products.push(product);
  }

  removeProduct(id) {
    debugger;
    this.products = this.products.filter((element) => {
      element.id !== Number(id);
    });
  }

  removeAll() {
    this.products = [];
  }
}

class CartItem {
  constructor(id, product, color, price, joke) {
    this.id = id;
    this.product = product;
    this.color = color;
    this.price = price;
    this.joke = joke;
  }
}

export { Cart, CartItem };
