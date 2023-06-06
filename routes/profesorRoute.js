const express = require('express');
const router2 = express.Router();
const profesoresController = require('./../controllers/profesorController');

//Definimos las rutas y derivamos al controlador correspondiente

router2.get('/', profesoresController.getProfesores);

router2.get('/:id', profesoresController.getProfesorById);

router2.post('/', profesoresController.addProfesor);

router2.put('/:id', profesoresController.updateProfesor);

router2.put('/:id', profesoresController.deleteProfesor);

module.exports = router2;