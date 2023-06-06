const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const router = require('./../routes/estudianteRoute')
const router2 = require('./../routes/profesorRoute')
const router3 = require('./../routes/cursoRoute')
const router4 = require('./../routes/estudiante_cursoRoute')


class Server {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
        
    }

    routes(){
        this.app.use('/api/estudiantes',router);
        this.app.use('/api/profesores',router2);
        this.app.use('/api/cursos',router3);
        this.app.use('/api/estudiantes_cursos',router4);
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }

    listen(){
        this.app.listen(3000, ()=>{
            console.log("Servidor corriendo en el puerto 3000");
        })
    }

}

module.exports = Server;