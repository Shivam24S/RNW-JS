let basicSalary = 30000;

let HRA = 15;

let DA = 1;

let PF = 12;

let totalPay;

totalPay =
  basicSalary +
  (basicSalary * HRA) / 100 +
  (basicSalary * DA) / 100 +
  (basicSalary * 12) / 100;

console.log(totalPay);
