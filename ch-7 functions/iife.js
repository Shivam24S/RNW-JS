(function () {
  console.log("this is iife");
})();

// iife with argument and parameter

(function (a, b) {
  console.log(a + b);
})(10, 20);
