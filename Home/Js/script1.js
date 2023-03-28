const formulario = document.querySelector('form');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const texto = document.querySelector('#texto').value;
  const cantidadDeCaracteres = texto.length;
  alert(`La cantidad de caracteres de su texto es: ${cantidadDeCaracteres}`);
});

const inicio = document.getElementById('inicio');
inicio.addEventListener('click', () => {
  window.location.href = 'home.html';
});

const next = document.getElementById('next');
next.addEventListener('click', () => {
  window.location.href = 'Ejemplo-2.html';
});
