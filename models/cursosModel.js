const db = require('./../config/db');

// Retorna una lista de todos los cursos
exports.getCursos = async ()=>{
    const [rows, fields] = await db.execute('SELECT id, nombre, descripcion FROM cursos');
    console.log(rows);
    return rows;
};
//Retorna un solo curso
exports.getCursoById = async(id) => {
    const [rows, fiels] = await db.execute ('SELECT * FROM cursos WHERE id=?', [id]);
    console.log(rows);
    return rows;
}
//Añade un nuevo curso a la base de datos
exports.addCurso = async(curso)=>{
    const [rows, fields] = await db.execute('INSERT INTO cursos (nombre, descripcion) VALUES (?, ?)',[curso.nombre, curso.descripcion]);
    return rows;
}
//Actualiza la informacion de un curso
exports.updateCurso = async(curso) =>{
    console.log('Modelo')
    console.log(curso);

    const [rows, fields] = await db.execute('UPDATE cursos SET nombre = ?, descripcion = ? WHERE id = ?',[curso.nombre, curso.descripcion, curso.id,]);
    return rows;
}
//Borrar un solo curso
exports.deleteCurso = async(id) => {
    const [rows, fiels] = await db.execute ('DELETE FROM cursos WHERE id=?', [id]);
    console.log(rows);
    return rows;
}