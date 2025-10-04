let unit = 300;

let totalBill;

if (unit <= 100) {
  totalBill = unit * 10;
} else if (unit <= 200) {
  totalBill = 100 * 10 + (unit - 100) * 15;
} else if (unit > 200) {
  totalBill = 100 * 10 + 100 * 15 + (unit - 200) * 20;
} else {
  console.log("please enter valid value");
}

console.log(totalBill);
