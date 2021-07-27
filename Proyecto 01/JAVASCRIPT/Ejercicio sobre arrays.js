var cantidad = parseInt(prompt("Ingrese la cantidad de numeros que tendra su array"));
var numeros = [];

for(var i = 0; i < cantidad; i++)
{
	numeros[i] = parseInt(prompt("Ingrese el numero en la posicion [" + i + "]"));
}

function promedio(numeros)
{
	var suma = 0;
	var media = 0;
	var texto;

	for(numero of numeros){
		suma = suma + numero;
	}

	var longitud = numeros.length;
	media = suma/longitud;

	texto = "La sumatoria total es " + suma + ", con un promedio de " + media;

	return texto;
}

alert(promedio(numeros));