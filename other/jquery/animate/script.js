$("document").ready(() => {
  $("#animate").click(() => {
    $("#img").animate({
      left: 500,
      opacity: 1,
      height: 600,
      width: 600,
    });
  });
});
