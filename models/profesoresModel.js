const db = require('./../config/db');

// Retorna una lista de todos los profesores
exports.getProfesores = async ()=>{
    const [rows, fields] = await db.execute('SELECT id, nombre, especialidad, email FROM profesores');
    console.log(rows);
    return rows;
};
//Retorna un solo profesor
exports.getProfesorById = async(id) => {
    const [rows, fiels] = await db.execute ('SELECT * FROM profesores WHERE id=?', [id]);
    console.log(rows);
    return rows;
}
//Añade un nuevo profesor a la base de datos
exports.addProfesor = async(profesor)=>{
    const [rows, fields] = await db.execute('INSERT INTO profesores (nombre, especialidad, email) VALUES (?, ?, ?)',[profesor.nombre, profesor.especialidad, profesor.email]);
    return rows;
}
//Actualiza la informacion de un profesor
exports.updateProfesor = async(profesor) =>{
    console.log('Modelo')
    console.log(profesor);

    const [rows, fields] = await db.execute('UPDATE profesores SET nombre = ?, especialidad = ?, email = ? WHERE id = ?',[profesor.nombre, profesor.especialidad, profesor.email, profesor.id,]);
    return rows;
}
//Borrar un solo profesor
exports.deleteProfesor = async(id) => {
    const [rows, fiels] = await db.execute ('DELETE FROM profesores WHERE id=?', [id]);
    console.log(rows);
    return rows;
}