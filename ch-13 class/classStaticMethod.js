class Bank {
  constructor(acc, name, ifsc) {
    this.acc = acc;
    this.name = name;
    this.ifsc = ifsc;
  }

  static getBankName(name) {
    return name;
  }
}

const bank1 = new Bank(123, "xyz", "ab12");

// console.log(bank1);

console.log(Bank.getBankName("ABC"));
