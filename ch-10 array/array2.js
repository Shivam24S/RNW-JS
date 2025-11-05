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

// reverse method

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("reverse number", number.reverse());

// indexOf

let vegetables = ["potato", "tomato", "ginger", "chilli", "cucumber"];

console.log("index of result", vegetables.indexOf("ginger"));

// if not available
console.log("index of result", vegetables.indexOf("brinjal"));

// includes  methods

console.log(
  "includes method if element available",
  vegetables.includes("tomato")
);

// if element is not available

console.log(vegetables.includes("Cabbage"));

//

let alphabet = ["a", "d", "b", "e", "c", "s", "z"];

console.log("sorting alphabet", alphabet.sort());

// sorting number

number = [7, 8, 1, 5, 9, 6, 3, 4, 5, 6, 2];

console.log("sorting number", number.sort());

console.log(
  "sorting number in descending order",
  number.sort((a, b) => b - a)
);

//

const persons = [
  { name: "utsav", age: 19 },
  { name: "dharmik", age: 19 },
  { name: "vaishali", age: 18 },
  {
    name: "brij",
    age: 19,
  },
  {
    name: "partik",
    age: 19,
  },
];

const checkAge = persons.find((person) => person.age > 18);

console.log("result", checkAge);

const checkAgeResult = persons.findIndex((person) => person.age > 18);

console.log("findIndexOf result", checkAgeResult);

// every

number = [10, 20, 30, 40, 50, 60];

console.log(
  number.every((num) => {
    return num > 5;
  })
);

console.log(
  number.every((num) => {
    return num > 30;
  })
);
