function counter() {
  let count = 1;
  return function counterIncrease() {
    return count++;
  };
}

const total = counter();

console.log(total());
console.log(total());
console.log(total());
console.log(total());
