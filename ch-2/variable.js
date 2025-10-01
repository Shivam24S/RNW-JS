// var

function greeting() {
  var message = "good morning";

  console.log(message);
}

// console.log(message);

greeting();

var number;

number = 20;

console.log(number);

// let

function func1() {
  let variable1 = "variable 1";

  if (true) {
    let variable2 = "variable 2";

    console.log(variable2);
  }

  //   console.log(variable2);
}

func1();

let message;

message = "good morning";

message = "good afternoon";

console.log(message);

var random1 = "random";

var random1 = 10;

console.log(random1);

// let random2 = "random2"

// let random2

// const

function constFunction() {
  const data = 123;
  const data2 = 123;

  if (true) {
    const data2 = 345;

    console.log(data2);
  }

  console.log(data2);
}

constFunction();

const constVar = 123;

// constVar = 345;

// console.log(constVar);

const person = {
  name: "xyz",
};

person.name = "abc";

console.log(person.name);

const person = {
  name: "abcd",
};

console.log(person);
