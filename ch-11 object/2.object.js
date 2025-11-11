// now using class method

class Clothes {
  constructor(color, quantity, price, total) {
    (this.color = color),
      (this.quantity = quantity),
      (this.price = price),
      (this.total = total);
  }
}

const clothesDetail = new Clothes("black", 2, 3000, 6000);

console.log("clothes detail", clothesDetail);

const shoppingList = {
  name: "grocery",
  total: 5000,
  items: 10,
};

const allItems = { ...clothesDetail, ...shoppingList };

console.log("allItem", allItems);

// now calculating length

const allItemLength = Object.keys(allItems).length;

console.log("length", allItemLength);

// get method

const CarDetail = {
  company: "mercedes",
  year: 2025,
  model: "g wagon",

  get carModel() {
    return this.model;
  },
};

const carModel = CarDetail.carModel;

console.log(carModel);

// set method

const bikeDetail = {
  company: "Kawasaki",
  year: 2025,
  model: "",

  set bikeModel(model) {
    this.model = model;
  },
};

const bikeModel = (bikeDetail.bikeModel = "ninja H2");

console.log("bike detail", bikeDetail);
