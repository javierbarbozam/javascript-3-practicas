class Cart {
  constructor() {
    this.products = [];
  }

  setProduct(product) {
    this.products.push(product);
  }

  // removeProduct(id) {
  //   this.products = this.products.filter((element) => {
  //     element.id !== id;
  //   });
  // }

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

  getId() {
    return this.id
  }
}

export { Cart, CartItem };
