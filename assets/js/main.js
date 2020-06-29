var menu = document.querySelector(".menu-principal");
console.log(menu);
window.onscroll = function () {
  if (window.scrollY >= 660) {
    menu.classList.add("fixed");
  } else {
    menu.classList.remove("fixed");
  }
};
