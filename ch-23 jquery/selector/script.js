// document.getElementById

// $("selector").action()

$(document).ready(() => {
  $("p").css("color", "red");

  $("div>p").css("color", "green");

  $(".para-3").css("color", "blue");

  $("#para-4").css("color", "pink");

  $("[href]").css({
    color: "green",
    textDecoration: "none",
  });

  $("ul>li").css("color", "brown");
});
