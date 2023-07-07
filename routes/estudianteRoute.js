//Definimos nuestros endpoint

const express = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = express.Router();
const estudiantesController = require('./../controllers/estudianteController');

//Definimos las rutas y derivamos al controlador correspondiente

router.get('/', estudiantesController.getEstudiantes);

router.get('/:id', estudiantesController.getEstudianteById);

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('edad', 'La edad es obligatoria').not().isEmpty().isInt().withMessage('La edad debe ser un numero'),
        check('grado', 'El grado es obligatorio').not().isEmpty().isString().withMessage('El grado debe ser una palabra, por ejemplo: Primer grado'),
        validarCampos
    ]
,estudiantesController.addEstudiante);

router.put('/:id',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('edad', 'La edad es obligatoria').not().isEmpty().isInt().withMessage('La edad debe ser un numero'),
        check('grado', 'El grado es obligatorio').not().isEmpty().isString().withMessage('El grado debe ser una palabra, por ejemplo: Primer grado'),
        validarCampos
    ]
,estudiantesController.updateEstudiante);

router.delete('/:id', estudiantesController.deleteEstudiante);

//Exportamos el router
module.exports = router;