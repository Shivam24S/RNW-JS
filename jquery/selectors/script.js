// $("selectors").action()



// document.getElementById("")



$("document").ready(() => {
  //   $("*").css({ "background-color": "black", color: "white" });

  $("div>p").css("color", "orange");

  $(".para>p").css("color", "red");

  $("ul>li").css("color", "green");

  $("[href]").css({
    color: "blue",
    "text-decoration": "none",
  });

  $("h1").css("color", "cadetBlue");
});
