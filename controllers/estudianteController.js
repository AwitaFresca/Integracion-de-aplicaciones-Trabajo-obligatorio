const { response } = require('express');
const estudianteModel = require('./../models/estudiantesModel');

// los controladores se encargan de la parte logica

exports.getEstudiantes = async (req, res)=>{
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const estudiantes = await estudianteModel.getEstudiantes();

        
        //si todo va bien respondemos con los estudiantes, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success:true,
            data:estudiantes
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

exports.getEstudianteById = async(req, res) =>{
    // Obtengo el id enviado desde la ruta o cliente
    const idEstudiante = req.params.id;
    try {
        // le decimos al models que busque al estudiante con el id ingresado
        const estudiante = await estudianteModel.getEstudianteById(idEstudiante);

        if(!estudiante[0]){ // pregunto si existe el estudiante
            res.status(404).json({
                success:false,
                mgs:'No existe el estudiante con el id: ${idEstudiante}'
            })
        }
        // si todo va bien y existe el estudiante =D
        res.status(200).json({
            success:true,
            estudiante
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

//Funcion para añadir estudiante
exports.addEstudiante = async (req, res)=>{
    const estudiante = req.body;

    try {
        estudiante = await estudianteModel.addEstudiante(estudiante);

        if(user.length<1){
            res.status(407).json({
                success:false,
                mgs:'No se logro insertar el estudiante en la base de datos'
            })
        }

        res.status(200).json({
            success:true,
            mgs:'Estudiante agregado con exito!'
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos',
            error:error
        })
    }
}

exports.updateEstudiante = async (req, res) =>{
    const estudianteData = req.body
    const id = req.params.id

    const estudiante = {
        id,
        ...estudianteData
    }

    console.log(estudiante);

    try {
        const listaActualizada = await estudianteModel.updateEstudiante(estudiante);

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

exports.deleteEstudiante = async(req, res) =>{
    // Obtengo el id enviado desde la ruta o cliente
    const idEstudiante = req.params.id;
    try {
        // le decimos al models que busque al estudiante con el id ingresado
        const estudiante = await estudianteModel.deleteEstudiante(idEstudiante);

        if(!estudiante[0]){ // pregunto si existe el estudiante
            res.status(404).json({
                success:false,
                mgs:'No existe el estudiante con el id: ${idEstudiante}'
            })
        }
        // si todo va bien y existe el estudiante =D
        res.status(200).json({
            success:true,
            mgs:'Estudiante borrado con exito'
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