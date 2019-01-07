function ajaxGet(url, callback){
	var req = new XMLHttpRequest();

	req.open("GET", url, true);//TRUE para hacer la funcion asíncrona

	req.addEventListener("load", function(){
		if(req.status >=200 && req.status <400)
		{
			callback(req.responseText);
		}
		else
		{
			console.error(req.status +" "+req.responseText);
		}
	});

	req.addEventListener("error", function(){
		console.error("Error de red");
	});
	req.send(null);
}

function ajaxGetFromServer(url, callback){
	var req = new XMLHttpRequest();

	req.open("GET", url, true);

	req.addEventListener("load", function(){
		if(req.status >=200 && req.status < 400){
			callback(req.responseText);
		}
		else
		{
			console.log(req.status+" "+req.responseText);
		}
	});

	req.addEventListener("error", function(){
		console.error("Error server");
	});

	req.send(null);
}