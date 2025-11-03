let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.splice(4, 0, 10, 11);

console.log("splice", number);

// join example a

let fruits = ["apple", "banana", "cherry", "mango"];

console.log(fruits.join(" "));

// flat

number = [1, 2, 3, [4, 5, 6], 7, 8, [9, [10]]];

console.log(number.flat());

console.log(number.flat(2));

number = [1, 2, [3, 4, [5, 6, [7, 8, 9, [10, 11]]]]];

console.log(number.flat(Infinity));

// slice

// end exclusive

fruits = [
  "apple",
  "banana",
  "cherry",
  "mango",
  "guava",
  "watermelon",
  "pineapple",
];

console.log(fruits.slice(2, 6));

let ageValues = [1, 10, 12, 15, 18, 2];

let ageResult = ageValues.some((age) => {
  return age > 18;
});

console.log("age result", ageResult);

ageValues = [1, 10, 12, 15, 18, 20];

ageResult = ageValues.some((age) => {
  return age > 18;
});

console.log("age result", ageResult);
