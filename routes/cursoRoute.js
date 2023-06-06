const express = require('express');
const router3 = express.Router();
const cursosController = require('./../controllers/cursoController');

//Definimos las rutas y derivamos al controlador correspondiente

router3.get('/', cursosController.getCursos);

router3.get('/:id', cursosController.getCursoById);

router3.post('/', cursosController.addCurso);

router3.put('/:id', cursosController.updateCurso);

router3.put('/:id', cursosController.deleteCurso);

module.exports = router3;