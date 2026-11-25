var total = 0;
function comprar(plato, precio) {
  total = total + precio;
  document.getElementById("carrito").innerHTML += "<li>" + plato + " - Bs " + precio + "</li>";
  document.getElementById("total").innerHTML = total;
}

// Deja el carrito en cero
function vaciarCarrito() {
  total = 0;
  document.getElementById("carrito").innerHTML = "";
  document.getElementById("total").innerHTML = 0;
}
