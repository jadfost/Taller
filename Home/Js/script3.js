const formulario = document.querySelector('form');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector('#nombre').value;
  const edad = document.querySelector('#edad').value;
  if (edad >= 18) {
    alert(`¡${nombre} es mayor de edad!`);
  } else {
    alert(`Lo siento, ${nombre} aún no es mayor de edad.`);
  }
});

const inicio = document.getElementById('inicio');
inicio.addEventListener('click', () => {
  window.location.href = 'home.html';
});

const next = document.getElementById('next');
next.addEventListener('click', () => {
  window.location.href = 'Ejemplo-4.html';
});