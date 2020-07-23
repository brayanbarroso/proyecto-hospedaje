document.addEventListener("DOMContentLoaded", (event) => {
  //Mapa
  var mymap = L.map("mapid").setView([9.3746631, -75.7706928], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mymap);

  var marker = L.marker([9.3746631, -75.7706928]).addTo(mymap);

  L.marker([9.3746631, -75.7706928])
    .addTo(mymap)
    .bindPopup("Hospedaje y Restaurante Bar Mar&Mar.")
    .openPopup();
});
