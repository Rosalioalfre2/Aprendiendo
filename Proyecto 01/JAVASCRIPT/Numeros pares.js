//Ingrese un numero, y sacara los pares hasta llegar a su maximo

var numero = parseInt(prompt("Ingrese un numero"));
var texto = null;

for (var i = 2; i <= numero; i+= 2){
	if (texto == null) {
		texto = i.toString() + ", ";
	}
	else {
		texto += i.toString() + ", ";
	}
}

alert("Los numeros pares dentro de " + numero + " son " + texto);