function getServicewPromise(url) {
	return new Promise ( function(resolve, reject) {
		console.log('Pending...');
		var req = new XMLHttpRequest();
		req.open("GET", url, true);
		req.send();

		req.onreadystatechange = function (){
			if (req.readyState == XMLHttpRequest.DONE) {
				if(req.status == 200) {
					resolve(req.responseText);
				} else {
					reject(req.status);
				}
			};
		}
		
	})
}



function getServiceAPI(url, callback){
	var req = new XMLHttpRequest();
	req.open("GET", url, true);

	req.addEventListener("load", function(){
		if(req.status >=200 && req.status < 400)
		{
		callback(req.responseText);//Funcion setDataInDOM que entró como ¡¡argumento!!
	}
	else
	{
		console.log(req.status + " " +req.responseText);
		alert("Benutzer existiert nicht!");
	}

});

	req.addEventListener("error", function(){
		console.error("Error en server");
	});

	req.send(null);
}

//Recordar que los puntos en el JSON indican propiedades del objeto.
function setDataInDOM(objectJSON){
	var objectJS = JSON.parse(objectJSON);
	var nombre = document.createElement("p");
	nombre.innerText = objectJS.name;
	document.getElementsByClassName("nombreUsuario")[0].appendChild(nombre);
	document.getElementsByClassName("fotografia")[0].innerHTML = '<img src = "'+objectJS.avatar_url+'">';
	document.getElementsByClassName("blogField")[0].innerHTML = '<a href = "'+objectJS.blog+'">'+objectJS.blog+'</a>';
}