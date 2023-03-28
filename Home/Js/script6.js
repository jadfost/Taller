function buscarTexto() {
  // Obtenemos el texto y la búsqueda
  var texto = document.getElementById("texto").value;
  var busqueda = document.getElementById("busqueda").value;

  // Creamos una expresión regular con la búsqueda y la opción "i" para ignorar mayúsculas y minúsculas
  var expresion = new RegExp(busqueda, "gi");

  // Reemplazamos el texto que coincide con la búsqueda por el mismo texto, pero dentro de una etiqueta span con la clase "highlight"
  var resultado = texto.replace(expresion, "<span class='highlight'>$&</span>");

  // Mostramos el resultado en el elemento con id "resultados"
  document.getElementById("resultados").innerHTML = resultado;
}

const inicio = document.getElementById('inicio');
inicio.addEventListener('click', () => {
  window.location.href = 'home.html';
});

const next = document.getElementById('next');
next.addEventListener('click', () => {
  window.location.href = 'Ejemplo-7.html';
});