let body = document.querySelector("body");
let menu = document.querySelector(".menu-principal");
//let ventana = window.screen.height;
let alturaBarra = menu.clientHeight;
window.onscroll = function () {
  let alturaCabecera = document.querySelector("header").clientHeight;
  console.log(alturaCabecera);
  let scroll = window.scrollY;
  // console.log(scroll);
  if (scroll > alturaCabecera) {
    menu.classList.add("fixed");
    body.style.marginTop = alturaBarra + "px";
  } else {
    menu.classList.remove("fixed");
    body.style.marginTop = "0px";
  }
};

let menu_movil = document.querySelector(".menu-movil");

menu_movil.addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("show");
});
