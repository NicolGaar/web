// script.js
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('projectForm');
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });


  function zoomIn(element) {
    element.style.fontSize = "20px"; // Tamaño de fuente aumentado (puedes ajustar este valor)
  }
  
  function zoomOut(element) {
    element.style.fontSize = "16px"; // Tamaño de fuente original
  }

/*API de mapa*/
function inicializarMapa() {
  // Código para inicializar el mapa aquí
  // Por ejemplo:
  var ubicacion = { lat: -33.39789040176534, lng: -70.75083327420944}; // Latitud y longitud de la ubicación deseada
  var mapa = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 16, // Nivel de zoom inicial
    center: ubicacion // Centrar el mapa en la ubicación especificada
  });

  // Puedes agregar marcadores, polígonos, etc., según tus necesidades
  var marcador = new google.maps.Marker({
    position: ubicacion,
    map: mapa,
    title: '¡Estoy aquí!'
  });
}
  


