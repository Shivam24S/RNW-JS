function factorial(num) {
  if (num < 0) {
    return "factorial value can't be negative value";
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const result = factorial(1);

console.log(result);
