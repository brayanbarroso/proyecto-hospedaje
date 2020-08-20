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
const btnEnviar = document.querySelector("#btnEnviar");
const fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let year = fecha.getFullYear();

CargarEventListenners();

function CargarEventListenners() {
  btnEnviar.addEventListener("click", agregarComment);
  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

// funciones
function agregarComment(e) {
  e.preventDefault();
  console.log(e.target.parentElement.parentElement);
  if (e.target.classList.contains("btnEnviar")) {
    const dato = e.target.parentElement.parentElement;
    leerDatos(dato);
  }
}

function leerDatos(dato) {
  const infoDato = {
    nombre: dato.querySelector("#nombre-input").value,
    comentario: dato.querySelector("#tweet").value,
    fecha: dia + "/" + mes + "/" + year,
  };
  console.log(infoDato);
  insertarDato(infoDato);
}

function insertarDato(dato) {
  const div = document.createElement("div");
  div.innerHTML = `
    <h4>${dato.nombre}</h4>
    <p>${dato.comentario}</p>
    <span>${dato.fecha}</span>
  `;
  tweets.appendChild(div);
  guardarDatosLocalStorage(dato);
}

function guardarDatosLocalStorage(dato) {
  let datos;

  datos = obtenerDatosLocalStorage();
  datos.push(dato);

  localStorage.setItem("tweet", JSON.stringify(datos));
}

function obtenerDatosLocalStorage() {
  let datosLS;
  //Comprobar si hay algo en localstorage
  if (localStorage.getItem("tweet") === null) {
    datosLS = [];
  } else {
    datosLS = JSON.parse(localStorage.getItem("tweet"));
  }
  return datosLS;
}

// imprime los cursos de localstorage en el carrito
function leerLocalStorage() {
  let datosLS;
  datosLS = obtenerDatosLocalStorage();
  //consol e.log(cursosLS);

  datosLS.forEach(function (dato) {
    console.log(dato);
    const div = document.createElement("div");
    div.innerHTML = `
    <h4>${dato.nombre}</h4>
    <p>${dato.comentario}</p>
    <span>${dato.fecha}</span>
  `;
    tweets.appendChild(div);
  });
}
