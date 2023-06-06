const express = require('express');
const router = express.Router();
const estudiantesController = require('./../controllers/estudianteController');

//Definimos las rutas y derivamos al controlador correspondiente

router.get('/', estudiantesController.getEstudiantes);

router.get('/:id', estudiantesController.getEstudianteById);

router.post('/', estudiantesController.addEstudiante);

router.put('/:id', estudiantesController.updateEstudiante);

router.put('/:id', estudiantesController.deleteEstudiante);

module.exports = router;