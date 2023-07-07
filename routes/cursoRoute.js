const express = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router3 = express.Router();
const cursosController = require('./../controllers/cursoController');

//Definimos las rutas y derivamos al controlador correspondiente

router3.get('/', cursosController.getCursos);

router3.get('/:id', cursosController.getCursoById);

router3.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
        validarCampos
    ]
,cursosController.addCurso);

router3.put('/:id', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
        validarCampos
    ]
,cursosController.updateCurso);

router3.delete('/:id', cursosController.deleteCurso);

module.exports = router3;