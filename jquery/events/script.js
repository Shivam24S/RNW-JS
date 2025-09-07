// i will attached this function onclick

// function handleClick() {
//   // using vanilla js
//   //   document.getElementById("img").style.width = "600px";

//   // now using jquery

//   $("#img").css("width", "600px");
// }

// click event
// $("#btn").click(function () {
//   $("#img").css("width", "600px");
// });

// when html load first then this will load
// $(document).ready(
//   $("#btn").click(function () {
//     $("#img").css("width", "600px");
//   })
// );

// double click event

// function handleDoubleClick() {
//   $("#img").css("width", "600px");
// }

// $("#btn").dblclick(handleDoubleClick);

// or you can use like this

$("#btn").dblclick(function handleDoubleClick() {
  $("#img").css("width", "600px");
});

// using mouseEnter and mouseLeave event (hover effect)

$("#img").mouseenter(function () {
  $("#img").css("width", "600px");
});

$("#img").mouseleave(function () {
  $("#img").css("width", "300px");
});
