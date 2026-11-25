
function cuentaRegresiva() {
  var hoy = new Date();
  var navidad = new Date(hoy.getFullYear(), 11, 25);  

  if (hoy > navidad) {
    navidad = new Date(hoy.getFullYear() + 1, 11, 25);
  }

  var dias = Math.ceil((navidad - hoy) / (1000 * 60 * 60 * 24));
  var texto = "";

  if (hoy.getMonth() == 11 && hoy.getDate() == 25) {
    texto = "¡Hoy es Navidad! Feliz Navidad";
  } else if (dias == 1) {
    texto = "¡Falta solo 1 dia para Navidad!";
  } else {
    texto = "Faltan " + dias + " dias para Navidad";
  }

  document.getElementById("cuenta").innerHTML = texto;
}


function saludo() {
  var hora = new Date().getHours();
  var texto = "";

  if (hora < 12) {
    texto = "Buenos dias";
  } else if (hora < 19) {
    texto = "Buenas tardes";
  } else {
    texto = "Buenas noches";
  }

  document.getElementById("saludo").innerHTML = texto + ", ¡bienvenido!";
}

var frases = [
  "La Navidad no es un tiempo ni una estacion, es un estado de animo.",
  "Compartir es el mejor regalo de Navidad.",
  "Que cada luz del arbol ilumine tu hogar.",
  "La Navidad empieza en el corazon.",
  "Una cena en familia vale mas que mil regalos.",
  "Que no falten la paz, la alegria y el chocolate caliente."
];

function nuevaFrase() {
  var numero = Math.floor(Math.random() * frases.length);
  document.getElementById("frase").innerHTML = frases[numero];
}

// Se ejecuta al abrir la pagina
cuentaRegresiva();
saludo();
nuevaFrase();
