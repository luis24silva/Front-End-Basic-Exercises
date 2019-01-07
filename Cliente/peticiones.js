//Creación de la petición HTTP
var req = new XMLHttpRequest();

//Petición HTTP GET síncrona hacia el archivo fotos.json del servidor
req.open("GET", "http://localhost:3000/imagenes", false);
//Envio de la petición
req.send(null);
//Impresión por la consola de la respuesta recibida desde el servidor
console.log(req.responseText);

