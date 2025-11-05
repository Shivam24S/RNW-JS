let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let evenNumber = number.filter((num) => num % 2 === 0);

console.log("even numbers", evenNumber);

const personDetails = [
  { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
  {
    name: "Emily Davis",
    age: 45,
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

let personAge = personDetails.filter((person) => person.age > 30);

console.log("person age > 30", personAge);

let personNames = personAge.map((person) => person.name);

console.log("person names", personNames);
