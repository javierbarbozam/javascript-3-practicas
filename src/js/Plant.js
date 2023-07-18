class Plant {
  setName(name) {
    this.name = name;
    return this;
  }

  lightQuantity(value) {
    this.light = value;
    return this;
  }

  soilType(value) {
    this.soil = value;
    return this;
  }

  withPets() {
    this.isToxic = false;
    return this;
  }

  noPets() {
    this.isToxic = true;
    return this;
  }

  ceramicPot() {
    this.potMaterial = 'ceramic';
    return this;
  }

  clayPot() {
    this.potMaterial = 'clay';
    this.soil = 'drainage';
    return this;
  }

  potStyle(value) {
    this.potDecoration = value;
    return this;
  }

  addExtras(value) {
    this.extras = value;
    return this;
  }
}

export { Plant };
