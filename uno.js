/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que pida la base y la altura de un triángulo equilátero, informar la superficie y el perímetro en una sola ventana alert.*/
function mostrar()
{
	var base = prompt("Ingrese base: ");
	var altura = prompt("ingrese altura:	");

	var perimetro;
	perimetro= parseInt(base) * 3;
	superficie	= parseInt(base) * parseInt(altura) / 2;

	alert("Superficie: " + superficie + ", Perimetro: " + perimetro);

}
