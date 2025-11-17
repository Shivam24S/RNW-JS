class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  calculateYear(age) {
    return this.year - age;
  }
}

const car1 = new Car("porsche", 911, 2025);

console.log(
  "i have" +
    " " +
    car1.brand +
    " " +
    car1.model +
    " " +
    "car" +
    " " +
    "which is" +
    " " +
    car1.calculateYear(2023) +
    " " +
    "years old"
);
