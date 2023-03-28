function checkNum() {
  var num = document.getElementById("numInput").value;
  
  if (num == "" || num < 0 || num % 1 != 0) {
    document.getElementById("result").innerHTML = "Ingrese un numero entero positivo";
  }
  else if (num % 2 == 0) {
    document.getElementById("result").innerHTML = num + " es un numero par";
  }
  else {
    document.getElementById("result").innerHTML = num + " es un numero impar";
  }
}
const inicio = document.getElementById('inicio');
inicio.addEventListener('click', () => {
  window.location.href = 'home.html';
});

const next = document.getElementById('next');
next.addEventListener('click', () => {
  window.location.href = 'Ejemplo-6.html';
});

function goBack() {
  window.history.back();
}
