function greeting() {
  console.log("this will print immediately");

  setTimeout(() => {
    console.log("hello good morning");
  }, 5000);
}

greeting();

const checkTIme = () => {
  console.log("checking time....");

  setTimeout(() => {
    const time = new Date().toLocaleString();

    console.log("current time", time);
  }, 6000);
};

checkTIme();
