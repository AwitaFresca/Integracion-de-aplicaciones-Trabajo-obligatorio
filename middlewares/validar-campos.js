const {response} = require ('express')
const {validationResult} = require('express-validator')
const validarCampos = (req, res = response, next) => {
    const errores = validationResult(req);
    //Preguntamos si no hay errores
    if(!errores.isEmpty()){
        //Si hay errores entonces devolvemos un mensaje de error y no dejamos que llegue a "next"
        return res.status(400).json({
            ok:false,
            errors: errores.mapped()
        });
    }
    //Si no hay errores los datos retoman su curso
    next();
}
module.exports = {
    validarCampos
}