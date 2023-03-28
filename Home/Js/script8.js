function identifyNumbers() {
  let input = document.getElementById("numbers-input").value;
  let numbers = input.split(",");
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    let number = parseInt(numbers[i]);
    if (number % 2 == 0) {
      result += "<span class='even'>" + number + " (par)</span><br>";
    } else if (isNaN(number)) {
      result += "<span class='even'>" + number + " (No es un numero entero)</span><br>";
    }else {
      result += "<span class='odd'>" + number + " (impar)</span><br>";
    }
  }
  document.getElementById("result").innerHTML = result;
}

const inicio = document.getElementById('inicio');
inicio.addEventListener('click', () => {
  window.location.href = 'home.html';
});

