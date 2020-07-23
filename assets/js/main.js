//Barra Fija
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

// Menu Movil
let menu_movil = document.querySelector(".menu-movil");

menu_movil.addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("show");

  // document.querySelector("i.cambiar").classList.remove("fa-bars");
  // document.querySelector("i.cambiar").classList.add("fa-times");
});

// Comentarios en LocalStores
const tweets = document.querySelector("#lista-tweets");
var formulario = document.querySelector("#formulario");

eventListeners();

function eventListeners() {
  // Agregar Autor
  formulario.addEventListener("submit", agregarAuthor);
  // Agregar tweets
  formulario.addEventListener("submit", agregarTweet);

  formulario.addEventListener("submit", agregarFecha);

  document.addEventListener("DOMContentLoaded", localStorageListoAuthor);

  document.addEventListener("DOMContentLoaded", localStorageListo);
}

function agregarAuthor(e) {
  e.preventDefault();
  // Leer el valor del input
  const inputNombre = document.querySelector("#nombre-input").value;
  //Crear una etiqueta p
  const p = document.createElement("p");
  p.innerText = inputNombre;
  tweets.appendChild(p);

  agregarAuthorLocalStorage(inputNombre);
}

function agregarTweet(e) {
  e.preventDefault();
  const tweet = document.querySelector("#tweet").value;
  const li = document.createElement("li");
  li.innerText = tweet;
  tweets.appendChild(li);

  agregarTweetLocalStorage(tweet);
}

function agregarFecha(e) {
  e.preventDefault();
  const fecha = new Date();
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1;
  let year = fecha.getFullYear();
  const span = document.createElement("span");
  span.innerText = dia + "/" + mes + "/" + year;
  tweets.appendChild(span);
}

function localStorageListoAuthor() {
  let listaAuthors;
  listaAuthors = obtenerAuthorLocalStorage();
  listaAuthors.forEach(function (author) {
    const p = document.createElement("p");
    p.innerText = author;

    tweets.appendChild(p);
  });
}

function localStorageListo() {
  let listaTweets;
  listaTweets = obtenerTweetsLocalStorage();
  listaTweets.forEach(function (tweet) {
    const li = document.createElement("li");
    li.innerText = tweet;
    tweets.appendChild(li);
  });
}

function agregarAuthorLocalStorage(author) {
  let authors;
  authors = obtenerAuthorLocalStorage();
  authors.push(author);
  localStorage.setItem("author", JSON.stringify(authors));
}

function agregarTweetLocalStorage(tweet) {
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  tweets.push(tweet);
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function obtenerAuthorLocalStorage() {
  let authors;

  if (localStorage.getItem("author") == null) {
    authors = [];
  } else {
    authors = JSON.parse(localStorage.getItem("author"));
  }
  return authors;
}

function obtenerTweetsLocalStorage() {
  let tweets;

  if (localStorage.getItem("tweets") == null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem("tweets"));
  }
  return tweets;
}

// Menu Activo
// let activo = document.querySelector(".menu li");
// console.log(activo);
// activo.on("click", function () {
//   activo.classList.remove("activo");
//   this.classList.add("activo");
// });
