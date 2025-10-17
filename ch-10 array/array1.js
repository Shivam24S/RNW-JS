let number = [1, 2, 3, 4, 5, 6, 7, 8];

let alphabet = new Array("a", "b", "c", "d");

console.log(typeof number);

console.log(typeof alphabet);

// will add element from end

number.push(9);

console.log(number);

// will add element from start

number.unshift(0);

console.log(number);

// pop will remove an element from end

number.pop();

console.log(number);

// shift will remove an element from start

number.shift();

console.log(number);

// splice method will remove and replace an original array

// not removing any element
number.splice(4, 0, 11, 12);

// removing 2 elements
number.splice(4, 2, 11, 12);

console.log(number);

number.forEach((num) => {
  console.log(num * 2);
});

const total = number.concat(alphabet);

console.log(total);
