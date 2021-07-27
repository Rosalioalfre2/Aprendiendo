var nombre = prompt("Ingrese el nombre de la persona");
var apellido = prompt("Ingrese el apellido de la persona");
var edad = parseInt(prompt("Ingrese la edad de la persona"));

function persona(nombre, edad, apellido){
	var texto = "La persona con nombre " + this.nombre + " con apellido " + this.apellido + " tiene la edad de " + edad;
	return texto;
}

var texto = persona(nombre, edad, apellido);

alert(texto);