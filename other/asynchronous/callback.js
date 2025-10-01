function result(total) {
  setTimeout(() => {
    console.log(total);
  }, 2000);
}

function calculate(x, y, callbackFunc) {
  const total = x + y;

  callbackFunc(total);
}

calculate(5, 10, result);
