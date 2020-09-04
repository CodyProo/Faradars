$(document).ready(function () {
  $(window).scroll(function (event) {
    const y = $(window).scrollTop();
    if (y >= 850) $("header").addClass("navbar-fixed");
    else $("header").removeClass("navbar-fixed");
  });
});
