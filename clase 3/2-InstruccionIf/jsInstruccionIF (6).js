function mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById('edad').value;
	/*
	if(edad>=18){
		alert("La persona es mayor de edad")
	}
	if(edad >= 13 && edad <= 17){
		alert("La persona es adolescente")
	}

	if(edad<13){
		alert("La persona es niño");
	}
	*/
	if(edad < 13)
	{
		alert("La persona es niño.");
	}
	else
	{
		if(edad > 17)
		{
			alert("La persona es mayor de edad.");
		}
		else
		{
			alert("La persona es adolescente.");
		}
	}

}//FIN DE LA FUNCIÓN