var body = document.querySelector("body");
var menu = document.querySelector(".menu-principal");
var ventana = window.screen.height;
var alturaBarra = menu.clientHeight;
console.log(ventana);
window.onscroll = function () {
  var scroll = window.scrollY;
  console.log(scroll);
  if (scroll > ventana) {
    menu.classList.add("fixed");
    body.style.marginTop = alturaBarra + "px";
  } else {
    menu.classList.remove("fixed");
    body.style.marginTop = "0px";
  }
};

console.log(menu.clientHeight);

console.log(ventana);
