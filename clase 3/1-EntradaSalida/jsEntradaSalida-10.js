/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeID;
	importeID=parseInt(document.getElementById('importe').value);
	document.getElementById('resultado').value=importeID*0.75;
}
