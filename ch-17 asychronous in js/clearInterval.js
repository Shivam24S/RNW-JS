const greeting = () => {
  console.log("hello...good morning ");
};

const intervalId = setInterval(greeting, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("timer stopped");
}, 10000);
