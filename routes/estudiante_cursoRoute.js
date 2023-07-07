const express = require('express');
const router4 = express.Router();
const estudiantes_cursosController = require('../controllers/estudiante_cursoController');

//Definimos las rutas y derivamos al controlador correspondiente

router4.get('/estudiantes/:id/cursos', estudiantes_cursosController.getCursos);

router4.get('/cursos/:id/estudiantes', estudiantes_cursosController.getEstudiantes);

router4.post('/cursos/:id/estudiantes', estudiantes_cursosController.addEstudiante);

router4.delete('/cursos/:id/estudiantes/:estudiante_id', estudiantes_cursosController.deleteEstudiante);

module.exports = router4;