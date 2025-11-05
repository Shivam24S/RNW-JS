let numbers = [5, 10, 15, 20, 25, 30, 45, 50];

let result = numbers.map((num) => num * 5);

console.log("result of 5  multiply", result);

let result2 = numbers.map((num) => {
  return num;
});

console.log(result2);

const personDetails = [
  { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
  {
    name: "Emily Davis",
    age: 29,
    city: "Los Angeles",
    profession: "Graphic Designer",
  },
  { name: "Michael Brown", age: 67, city: "Chicago", profession: "Doctor" },
  { name: "Sophia Wilson", age: 22, city: "Houston", profession: "Teacher" },
  {
    name: "David Martinez",
    age: 38,
    city: "San Francisco",
    profession: "Developer",
  },
];

let personNames = personDetails.map((person) => {
  return person.name;
});

console.log("person names", personNames);

const double = numbers.map((numbers) => {
  return numbers * 2;
});

console.log("double", double);

const fruits = ["apple", "banana", "mango", "grapes"];

let fruitsResult = fruits.map((fruits) => {
  return fruits;
});

console.log("fruits", fruits);
