const atmResponse = new Promise((resolve, reject) => {
  console.log("check balance....");

  setTimeout(() => {
    let balance = 0;

    console.log("balance", balance);

    if (balance <= 0) {
      reject("insufficient balance");
    } else {
      resolve("you can make payment");
    }
  }, 3000);
});

atmResponse
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
