// document.getElementById("btn").addEventListener("click", () => {
//   document.getElementById("img").style.width = "600px";
// });

// $(document).ready(() => {
//   $("#btn").click(() => {
//     $("#img").css({ height: "600px", width: "600px" });
//   });
// });

// $(document).ready(() => {
//   $("#btn").dblclick(() => {
//     $("#img").css({ height: "600px", width: "600px" });
//   });
// });

// $(document).ready(() => {
//   $("#img").mouseenter(() => {
//     $("#img").css({ height: "600px", width: "600px" });
//   });
// });

// $(document).ready(() => {
//   $("#img").mouseleave(() => {
//     $("#img").css({ height: "300px", width: "300px" });
//   });
// });

$(document).ready(() => {
  $(document).keyup(() => {
    console.log("key up rendered");
  });
});

$(document).ready(() => {
  $(document).keydown(() => {
    console.log("key down rendered");
  });
});
