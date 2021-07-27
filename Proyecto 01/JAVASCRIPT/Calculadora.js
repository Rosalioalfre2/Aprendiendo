// Calculadora en javascript

var simbolo = prompt("Introduce la operacion a realizar");
var numero1 = parseInt(prompt("Introduce el primer numero"));
var numero2 = parseInt(prompt("Introduce el segundo numero"));

var resultado = null;
var texto = null;

switch (simbolo) {
	case "+":
		resultado = numero1 + numero2;
		break;
	case "-":
		resultado = numero1 - numero2;
		break;
	case "*":
		resultado = numero1 * numero2;
		break;
	case "/":
		resultado = numero1 / numero2;
		break;
}

texto = "Su resultado es " + resultado;

console.log(texto);
alert(texto);