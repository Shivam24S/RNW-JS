class Atm {
  #pin;
  #balance;

  constructor(pin, balance, acc) {
    this.#pin = pin;
    this.#balance = balance;
    this.acc = acc;
  }
}

const cx1 = new Atm(1234, 5000, 789);

console.log("customer", cx1);

console.log(cx1.pin);
