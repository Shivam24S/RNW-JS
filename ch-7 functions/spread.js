const number1 = [1, 2, 3, 4, 5];

const number2 = [...number1, 6, 7, 8, 9];

console.log(number2);

//

let person = {
  name: "xyz",
  age: 22,
  city: "bvn",
};

// let person2 = { ...person };

// console.log(person2);

let person2 = {
  name: "abcd",
  age: 23,
};

const totalPerson = { ...person, ...person2 };

console.log(totalPerson);
