const { response } = require('express');
const profesorModel = require('./../models/profesoresModel');

// los controladores se encargan de la parte logica

exports.getProfesores = async (req, res)=>{
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const profesores = await profesorModel.getProfesores();

        
        //si todo va bien respondemos con los profesores, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success:true,
            data:profesores
        })

    } catch (error) {
        //si las instrucciones dentro del bloque try fallan, 
        //capturamos el error, lo mostramos en consola
        //y devolvemos la info del error al cliente
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos'
        })
    }
    

}

exports.getProfesorById = async(req, res) =>{
    // Obtengo el id enviado desde la ruta o cliente
    const idProfesor = req.params.id;
    try {
        // le decimos al models que busque al profesor con el id ingresado
        const profesor = await profesorModel.getProfesorById(idProfesor);

        if(!profesor[0]){ // pregunto si existe el profesor
            res.status(404).json({
                success:false,
                mgs:'No existe el profesor con el id: ${idProfesor}'
            })
        }
        // si todo va bien y existe el profesor =D
        res.status(200).json({
            success:true,
            profesor
        })
    } catch (error) {
        //si las instrucciones dentro del bloque try fallan, 
        //capturamos el error, lo mostramos en consola
        //y devolvemos la info del error al cliente
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}

//Funcion para añadir un profesor
exports.addProfesor = async (req, res)=>{
    const profesor = req.body;

    try {
        profesor = await profesorModel.addProfesor(profesor);

        if(user.length<1){
            res.status(407).json({
                success:false,
                mgs:'No se logro insertar el profesor en la base de datos'
            })
        }

        res.status(200).json({
            success:true,
            mgs:'Profesor agregado con exito!'
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos',
            error:error
        })
    }
}

exports.updateProfesor = async (req, res) =>{
    const profesorData = req.body
    const id = req.params.id

    const profesor = {
        id,
        ...profesorData
    }

    console.log(profesor);

    try {
        const listaActualizada = await profesorModel.updateProfesor(profesor);

        if(listaActualizada<1){
            res.status(404).json({
                success:false,
                msg:'Error: Datos no actualizados!'
            })

        }

        res.status(200).json({
            success:true,
            msg:'datos actualizados',
            listaActualizada
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos',
            error:error
        })
    }
}

exports.deleteProfesor = async(req, res) =>{
    // Obtengo el id enviado desde la ruta o cliente
    const idProfesor = req.params.id;
    try {
        // le decimos al models que busque al profesor con el id ingresado
        const profesor = await profesorModel.deleteProfesor(idProfesor);

        if(!profesor[0]){ // pregunto si existe el profesor
            res.status(404).json({
                success:false,
                mgs:'No existe el profesor con el id: ${idProfesor}'
            })
        }
        // si todo va bien y existe el profesor =D
        res.status(200).json({
            success:true,
            mgs:'Profesor borrado con exito'
        })
    } catch (error) {
        //si las instrucciones dentro del bloque try fallan, 
        //capturamos el error, lo mostramos en consola
        //y devolvemos la info del error al cliente
        console.error(error);
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}