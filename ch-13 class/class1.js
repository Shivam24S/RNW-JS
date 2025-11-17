class ProductList {
  constructor(item, price, qty) {
    this.item = item;
    this.price = price;
    this.qty = qty;
  }
}

const prod1 = new ProductList("fruits", 500, 10);

prod1.weight = "1kg";

console.log(prod1);
