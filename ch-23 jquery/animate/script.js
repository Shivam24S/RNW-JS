$(document).ready(() => {
  $("#animate").click(() => {
    $("#img").animate({
      transition: "smooth",
      opacity: 1,
      height: "600px",
      width: "600px",
    });
  });
});
