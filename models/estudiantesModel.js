const db = require('./../config/db');

// Retorna una lista de todos los estudiantes
exports.getEstudiantes = async ()=>{
    const [rows, fields] = await db.execute('SELECT id, nombre, edad, grado FROM estudiantes');
    console.log(rows);
    return rows;
};
//Retorna un solo estudiante
exports.getEstudianteById = async(id) => {
    const [rows, fiels] = await db.execute ('SELECT * FROM estudiantes WHERE id=?', [id]);
    console.log(rows);
    return rows;
}
//Añade un nuevo estudiante a la base de datos
exports.addEstudiante = async(estudiante)=>{
    const [rows, fields] = await db.execute('INSERT INTO estudiantes (nombre, edad, grado) VALUES (?, ?, ?)',[estudiante.nombre, estudiante.edad, estudiante.grado]);
    return rows;
}
//Actualiza la informacion de un estudiante
exports.updateEstudiante = async(estudiante) =>{
    console.log('Modelo')
    console.log(estudiante);

    const [rows, fields] = await db.execute('UPDATE estudiantes SET nombre = ?, edad = ?, grado = ? WHERE id = ?',[estudiante.nombre, estudiante.edad, estudiante.grado, estudiante.id,]);
    return rows;
}
//Borrar un solo estudiante
exports.deleteEstudiante = async(id) => {
    const [rows, fiels] = await db.execute ('DELETE FROM estudiantes WHERE id=?', [id]);
    console.log(rows);
    return rows;
}