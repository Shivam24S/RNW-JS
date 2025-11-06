let number = [10, 50, 60, 70, 10, 20];

let sum = 0;

for (let i = 0; i < number.length; i++) {
  sum += number[i];
}

console.log("sum", sum);

// reduce

const total = number.reduce((acc, curr) => {
  acc += curr;

  return acc;
}, 0);

console.log("total", total);

// higher marks

let studentMarks = [50, 60, 70, 80, 90, 55, 95];

let max = 0;

for (let i = 0; i < studentMarks.length; i++) {
  if (studentMarks[i] > max) {
    max = studentMarks[i];
  }
}

console.log("higher marks", max);

// now using reduce method

let higherMarks = studentMarks.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }

  return acc;
});

console.log("higher marks", higherMarks);

const shoppingList = [
  {
    name: "Apples",
    price: 1500,
    quantity: 3,
  },
  {
    name: "Bananas",
    price: 750,
    quantity: 6,
  },
  {
    name: "Tomatoes",
    price: 2200,
    quantity: 4,
  },
  {
    name: "Oranges",
    price: 1800,
    quantity: 5,
  },
  {
    name: "Grapes",
    price: 2500,
    quantity: 2,
  },
  {
    name: "Mangoes",
    price: 3000,
    quantity: 3,
  },
  {
    name: "Pineapple",
    price: 2700,
    quantity: 1,
  },
  {
    name: "Strawberries",
    price: 3200,
    quantity: 2,
  },
];

let shoppingBill = shoppingList.reduce((acc, curr) => {
  acc += curr.price * curr.quantity;

  return acc;
}, 0);

console.log("shopping bill", shoppingBill);
