const { response } = require('express');
const cursoModel = require('./../models/cursosModel');

// los controladores se encargan de la parte logica

exports.getCursos = async (req, res)=>{
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const cursos = await cursoModel.getCursos();

        
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

exports.getCursoById = async(req, res) =>{
    // Obtengo el id enviado desde la ruta o cliente
    const idCurso = req.params.id;
    try {
        // le decimos al models que busque al curso con el id ingresado
        const curso = await cursoModel.getCursoById(idCurso);

        if(!curso[0]){ // pregunto si existe el curso
            res.status(404).json({
                success:false,
                mgs:'No existe el curso con el id: ${idCurso}'
            })
        }
        // si todo va bien y existe el curso =D
        res.status(200).json({
            success:true,
            curso
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
exports.addCurso = async (req, res)=>{
    const curso = req.body;

    try {
        curso = await cursoModel.addCurso(curso);

        if(user.length<1){
            res.status(407).json({
                success:false,
                mgs:'No se logro insertar el curso en la base de datos'
            })
        }

        res.status(200).json({
            success:true,
            mgs:'Curso agregado con exito!'
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'Hubo un error al obtener los datos',
            error:error
        })
    }
}
//Actualizar un curso
exports.updateCurso = async (req, res) =>{
    const cursoData = req.body
    const id = req.params.id

    const curso = {
        id,
        ...cursoData
    }

    console.log(curso);

    try {
        const listaActualizada = await cursoModel.updateCurso(curso);

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
//Borrar un curso
exports.deleteCurso = async(req, res) =>{
    // Obtengo el id enviado desde la ruta o cliente
    const idCurso = req.params.id;
    try {
        // le decimos al models que busque al curso con el id ingresado
        const curso = await cursoModel.deleteCurso(idCurso);

        if(!curso[0]){ // pregunto si existe el curso
            res.status(404).json({
                success:false,
                mgs:'No existe el curso con el id: ${idCurso}'
            })
        }
        // si todo va bien y existe el curso =D
        res.status(200).json({
            success:true,
            mgs:'Curso borrado con exito'
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