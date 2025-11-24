const callbackFunc = (result) => {
  console.log("result", result);
};

const total = (a, b, callbackFunc) => {
  const result = a + b;

  callbackFunc(result);
};

total(5, 10, callbackFunc);
