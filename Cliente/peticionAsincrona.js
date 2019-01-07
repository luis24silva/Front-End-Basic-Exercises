

var req = new XMLHttpRequest();

req.open("GET", "http://localhost:3000/imagenes", true);

req.addEventListener("load", function(){
	if(req.status >= 200 && req.status < 400){
		console.log(req.responseText);
	}
	else
	{
		console.log(req.status +" "+ req.responseText);
	}
	
});

req.addEventListener("error", function(){
	console.error("Error de red")
});

req.send();