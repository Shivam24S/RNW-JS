$(document).ready(() => {
  // hide
  $("#hide").click(() => {
    $("#img").hide();
  });

  //   show

  $("#show").click(() => {
    $("#img").show();
  });

  //   toggle

  $("#toggle").click(() => {
    $("#img").toggle();
  });

  //   fade in

  $("#fadeIn").click(() => {
    $("#img").fadeIn(2000);
  });

  //   fadeOut

  $("#fadeOut").click(() => {
    $("#img").fadeOut(2000);
  });

  $("#fadeToggle").click(() => {
    $("#img").fadeToggle(2000);
  });

  //   slide up

  $("#slideUp").click(() => {
    $("#img").slideUp(2000);
  });

   $("#slideDown").click(() => {
    $("#img").slideDown(2000);
  });

   $("#slideToggle").click(() => {
    $("#img").slideToggle(2000);
  });

  $("#stop").click(()=>{
    $("#img").stop()
  })


});
