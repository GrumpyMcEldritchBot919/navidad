
var regalos = [];


function agregar() {
  var regalo = document.getElementById("regalo").value;

  if (regalo == "") {
    alert("Escribe un regalo primero");
  } else {
    regalos.push(regalo);
    document.getElementById("regalo").value = "";
    mostrarLista();
  }
}


function borrar(posicion) {
  regalos.splice(posicion, 1);
  mostrarLista();
}

function vaciar() {
  regalos = [];
  mostrarLista();
}

function mostrarLista() {
  var lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (var i = 0; i < regalos.length; i++) {
    var li = document.createElement("li");
    li.textContent = regalos[i] + " ";

    var boton = document.createElement("button");
    boton.textContent = "✕";
    boton.setAttribute("onclick", "borrar(" + i + ")");

    li.appendChild(boton);
    lista.appendChild(li);
  }

  mostrarContador();
}


function mostrarContador() {
  var cantidad = regalos.length;
  var texto = "";

  if (cantidad == 0) {
    texto = "Tu lista esta vacia";
  } else if (cantidad == 1) {
    texto = "Llevas 1 regalo";
  } else if (cantidad < 5) {
    texto = "Llevas " + cantidad + " regalos";
  } else {
    texto = "Llevas " + cantidad + " regalos... ¡como que quieres mucho, eh!";
  }

  document.getElementById("contador").innerHTML = texto;
}

mostrarContador();
