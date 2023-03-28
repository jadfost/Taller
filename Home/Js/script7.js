function verificarDivisibilidad() {
  // Obtenemos los valores ingresados por el usuario
  var num1 = document.getElementById("numero1").value;
  var num2 = document.getElementById("numero2").value;

  // Convertimos los valores a números enteros
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  // Verificamos si son divisibles entre sí
  if (num1 % num2 === 0 || num2 % num1 === 0) {
    document.getElementById("resultado").innerHTML = "El número " +num1+" es divisible entre el numero "+num2;
  } else {
    document.getElementById("resultado").innerHTML = "El número " +num1+ " no es divisible entre el numero "+num2;
  }

  return false;
  }
  
const inicio = document.getElementById('inicio');
inicio.addEventListener('click', () => {
  window.location.href = 'home.html';
});

const next = document.getElementById('next');
next.addEventListener('click', () => {
  window.location.href = 'Ejemplo-8.html';
});