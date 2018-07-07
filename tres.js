/*Enunciado:
Bienvenidos. 
Pedir por prompt el precio y el porcentaje de descuento, mostrar: 
1-El descuento en dinero, 
2-El precio con el descuento , 
3-El IVA 
todos los anteriores e un solo alert 
4-Y solo el precio con descuento más el IVA por id .*/
function mostrar()
{
	var precio = prompt("Ingresar precio: ");
	var porcentaje = prompt("Ingresar porcentaje: ");

	var descuento = parseInt(precio) * parseInt(porcentaje) / 100
	var precioConDescuento = parseInt(precio) - descuento;
	var iva=precio * 21;
	var precioDescuentoConIva= precioConDescuento + precioConDescuento * iva/100;

	alert("Descuento realizado: $"+descuento+"Precio con descuento: $"+precioConDescuento+"IVA: %"+iva);
	
	document.getElementById('elPrecioFinal').value=precioDescuentoConIva;

}
