$("document").ready(() => {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    nav: true,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });
});
