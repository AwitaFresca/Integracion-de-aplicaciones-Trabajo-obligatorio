const { response } = require('express');
const estudiante_cursoModel = require('./../models/estudiantes_cursosModel');

// los controladores se encargan de la parte logica

exports.getCursos = async (req, res)=>{
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const cursos = await estudiante_cursoModel.getCursos();

        
        //si todo va bien respondemos con los cursos, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success:true,
            data:cursos
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

exports.getEstudiantes = async (req, res)=>{
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const estudiantes = await estudiante_cursoModel.getEstudiantes();

        
        //si todo va bien respondemos con los cursos, del lado del cliente
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

//Funcion para añadir un estudiante a un curso
exports.addEstudiante = async (req, res)=>{
    const estudiante_curso = req.body;

    try {
        estudiante_curso = await estudiante_cursoModel.addEstudiante(estudiante_curso);

        if(user.length<1){
            res.status(407).json({
                success:false,
                mgs:'No se logro insertar al estudiante en el curso'
            })
        }

        res.status(200).json({
            success:true,
            mgs:'estudiante agregado con exito!'
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos',
            error:error
        })
    }
}

//Borrar un estudiante de un curso
exports.deleteEstudiante = async(req, res) =>{
    // Obtengo el id enviado desde la ruta o cliente
    const idEstudiante_curso = req.params.id;
    try {
        // le decimos al models que busque al estudiante con el id ingresado
        const estudiante_curso = await estudiante_cursoModel.deleteEstudiante(idEstudiante_curso);

        if(!estudiante_curso[0]){ // pregunto si existe el estudiante
            res.status(404).json({
                success:false,
                mgs:'No existe el estudiante con el id: ${idEstudiante_curso}'
            })
        }
        // si todo va bien y existe el curso =D
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