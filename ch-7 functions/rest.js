// function totalItems(a, b, c, d) {
//   console.log("total items", a, b, c, d);
// }

// totalItems("apple", "banana", "rice", "chocolate");

// now using rest operator

function totalItems(...items) {
  console.log("total items", ...items);
}

totalItems("apple", "banana", "rice", "chocolate");
