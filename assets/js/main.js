$(function () {
  let windowHeight = $(window).height();
  let barraAltura = $(".barra").innerHeight();

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > windowHeight) {
      $(".barra").addClass("fixed");
      $("body").css({ "margin-top": barraAltura + "px" });
    } else {
      $(".barra").removeClass("fixed");
      $("body").css({ "margin-top": "0px" });
    }
  });

  // Menu Movil
  $(".menu-movil").on("click", function () {
    $(".navegacion-principal").slideToggle();
  });
});
