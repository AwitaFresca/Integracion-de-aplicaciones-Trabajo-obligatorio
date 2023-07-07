const express = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router2 = express.Router();
const profesoresController = require('./../controllers/profesorController');

//Definimos las rutas y derivamos al controlador correspondiente

router2.get('/', profesoresController.getProfesores);

router2.get('/:id', profesoresController.getProfesorById);

router2.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('especialidad', 'La especialidad es obligatoria').not().isEmpty(),
        check('email', 'El email es obligatorio').not().isEmpty().isEmail().withMessage('Introduzca un email valido por favor'),
        validarCampos
    ]
,profesoresController.addProfesor);

router2.put('/:id', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('especialidad', 'La especialidad es obligatoria').not().isEmpty(),
        check('email', 'El email es obligatorio').not().isEmpty().isEmail().withMessage('Introduzca un email valido por favor'),
        validarCampos
    ]
,profesoresController.updateProfesor);

router2.delete('/:id', profesoresController.deleteProfesor);

module.exports = router2;