// function checkAtmPin(pin) {
//   let userPin = 1234;

//   //   without try-catch block

//   //   if (userPin === pin) {
//   //     console.log("success now you can access our services");
//   //   } else {
//   //     throw new Error("invalid pin");
//   //   }

//   // with try catch block

//   try {
//     if (userPin === pin) {
//       console.log("success now you can access our services");
//     } else {
//       throw new Error("invalid pin");
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// checkAtmPin(456);

// another example with finally block will execute regardless of result of try-cath

let raceResult = () => {
  let car1Performance = false;

  try {
    if (car1Performance === true) {
      console.log("you have win the race");
    } else {
      throw new Error("you loose the race");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("one winner will be announce");
  }
};

raceResult();
