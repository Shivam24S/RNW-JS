// function handleClick() {
//   document.getElementById("img").style.width = "600px";
// }

// $("document").ready(() => {
//   $("#btn").click(() => {
//     $("#img").css({
//       width: "600px",
//       height: "600px",
//     });
//   });
// });

// using different method

// function handleClick() {
//   $("#img").css({
//     width: "600px",
//     height: "600px",
//   });
// }

// $("document").ready(() => {
//   $("#btn").click(handleClick);
// });

// double click
// $("document").ready(() => {
//   $("#btn").dblclick(() => {
//     $("#img").css({
//       width: "600px",
//       height: "600px",
//     });
//   });
// });

// mouse event

// $("document").ready(() => {
//   $("#img").mouseenter(() => {
//     $("#img").css({
//       width: "600px",
//       height: "600px",
//     });
//   });
// });

// on mouse leave

// $("document").ready(() => {
//   $("#img").mouseleave(() => {
//     $("#img").css({
//       width: "300px",
//       height: "300px",
//     });
//   });
// });

// keys event

$("document").ready(() => {
  $("#btn").keyup(() => {
    $("#img").css({
      width: "600px",
      height: "600px",
    });
  });
});

$("document").ready(() => {
  $("#btn").keydown(() => {
    $("#img").css({
      width: "600px",
      height: "600px",
    });
  });
});
