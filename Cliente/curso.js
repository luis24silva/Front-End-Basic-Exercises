ajaxGetFromServer("https://jsonplaceholder.typicode.com/users", function(respuesta){
	console.log(respuesta);

	var names = JSON.parse(respuesta);//Convierte JSON a JS
	var sortedNames = [];
	//Recorremos el objeto JSON y lo ordenamos alfabeticamente en base a la propiedad name 
	sortedNames = orderObjectByName(names);

	console.log(sortedNames);

	//Finalmente mostramos en la página los nombres y el zipcode
	sortedNames.forEach( function(elemento) {
		var textoHTML = document.createElement("p");
		textoHTML.innerText = elemento.name + " " + elemento.address.zipcode;
		document.getElementsByClassName("nombres")[0].appendChild(textoHTML);
	});
});


function getObjectNames(objeto){
	var sortedNames = [];
	var index = 0;

	objeto.forEach(function(element){
		sortedNames[index] = element.name;
		index++;
	});

	return sortedNames;
}

//Funcion que ordena el arreglo de objetos en base a su propiedad name
function orderObjectByName(objeto){
	objeto.sort(function(a, b){
		if(a.name < b.name){
			return -1;
		}

		if(a.name > b.name){
			return 1;
		}

		return 0;
	});

	return objeto;
}
