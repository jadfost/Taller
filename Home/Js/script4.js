function calcularPromedio() {
  // Obtener valores ingresados por el usuario
  const nombre = document.getElementById("nombre").value;
  const materia = document.getElementById("materia").value;
  const nota1 = Number(document.getElementById("nota1").value);
  const nota2 = Number(document.getElementById("nota2").value);
  const nota3 = Number(document.getElementById("nota3").value);

  const inicio = document.getElementById('inicio');
  inicio.addEventListener('click', () => {
    window.location.href = 'home.html';
  });

  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    window.location.href = 'Ejemplo-5.html';
  });

  // Calcular el promedio de las notas
  const promedio = (nota1 + nota2 + nota3) / 3;

  // Verificar si el promedio es mayor o igual a 3.0
  if (promedio >= 3.0) {
    // Si el promedio es mayor o igual a 3.0, indicar que la persona pasó la materia
    document.getElementById("resultado").innerHTML = `${nombre} pasó la materia de ${materia}.`;
    document.getElementById("resultado").style.color = "green";
  } else {
    // Si el promedio es menor a 3.0, indicar que la persona perdió la materia
    document.getElementById("resultado").innerHTML = `${nombre} perdió la materia de ${materia}.`;
    document.getElementById("resultado").style.color = "red";
  }

}
