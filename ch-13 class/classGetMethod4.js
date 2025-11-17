class Perfume {
  constructor(fragrance, price, qty, madeBy) {
    this.fragrance = fragrance;
    this.price = price;
    this.qty = qty;
    this.madeBy = madeBy;
  }

  get countryOfOrigin() {
    return this.madeBy;
  }
}

const perfume1 = new Perfume("rose", 500, 1, "india");

console.log(perfume1.countryOfOrigin);
console.log(perfume1);
