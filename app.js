// Obtener la ubicación del usuario
function obtenerLocalizacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(muestraMap);
  } else {
    alert("no soporta la geolocalizacion este navegador");
  }
 
}

// Mostrar la información del tiempo y el mapa
function muestraMap(posicion) {
  mostrarClima(posicion.coords.latitude, posicion.coords.longitude);
  showMap(posicion.coords.latitude, posicion.coords.longitude);
}

// Obtener la información del tiempo
function mostrarClima(latitud, longitud) {
  const apiKey = '54900ecd09f00aff63b00384e64d32b8';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherIcon = document.querySelector('.tiempo-icono');
      const weatherDescription = document.querySelector('.tiempo-descripcion');
      const weatherTemperature = document.querySelector('.tiempo-temperatura');

      // Mostrar la información del tiempo
      weatherIcon.innerHTML = `<i class="fas fa-sun"></i>`;
      weatherDescription.innerHTML = data.weather[0].description;
      weatherTemperature.innerHTML = `${data.main.temp} &#8451;`;
    })
    .catch(error => console.error(error));
}

// Mostrar el mapa
function showMap(latitude, longitude) {
  const map = L.map('map').setView([latitude, longitude], 13);

  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
  L.tileLayer(tileUrl, { attribution }).addTo(map);

  const marker = L.marker([latitude, longitude]).addTo(map);
  marker.bindPopup('tu estas aqui');
}

// Obtener la ubicación del usuario cuando se cargue la página
window.addEventListener('load', obtenerLocalizacion);