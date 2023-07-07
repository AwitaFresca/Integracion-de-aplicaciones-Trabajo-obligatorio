const Server = require('./models/server') //requerimos el Servicio

//Creamos el servicio
const server = new Server();

//Corremos el servicio y escuchamos en el puerto 3000
server.listen();