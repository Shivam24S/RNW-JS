let num1 = 10;

let num2 = 20;

console.log("values before swapping", num1, num2);

let temp;

temp = num1;

num1 = num2;

num2 = temp;

console.log("values after swapping", num1, num2);

// using another method without variable

let x = 30;

let y = 40;

console.log("values before swap", x, y);

x = x + y;

y = x - y;

x = x - y;

console.log("values after swap", x, y);
