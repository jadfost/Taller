const formulario = document.querySelector('form');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const valor = document.querySelector('#valor').value;
  if (isNaN(valor)) {
    alert('El valor ingresado es un texto.');
  } else {
    alert('El valor ingresado es un número.');
  }
});

const inicio = document.getElementById('inicio');
inicio.addEventListener('click', () => {
  window.location.href = 'home.html';
});

const next = document.getElementById('next');
next.addEventListener('click', () => {
  window.location.href = 'Ejemplo-3.html';
});
