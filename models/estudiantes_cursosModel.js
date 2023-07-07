const db = require('./../config/db');

// Retorna una lista de todos los cursos de los estudiantes
exports.getCursos = async ()=>{
    const [rows, fields] = await db.execute('SELECT e.nombre AS nombre_estudiante, c.nombre AS nombre_curso FROM estudiantes AS e INNER JOIN estudiantes_cursos AS ec ON e.id = ec.estudiante_id INNER JOIN cursos AS c ON c.id = ec.curso_id');
    console.log(rows);
    return rows;
};
// Retorna una lista de todos los estudiantes de un curso
exports.getEstudiantes = async ()=>{
    const [rows, fields] = await db.execute('SELECT estudiante_id FROM estudiantes_cursos');
    console.log(rows);
    return rows;
};
//Añade un estudiante a un curso
exports.addEstudiante = async(estudiantes_cursos)=>{
    const [rows, fields] = await db.execute('INSERT INTO estudiantes_cursos (estudiante_id, curso_id) VALUES (?, ?)',[estudiantes_cursos.estudiante_id, estudiantes_cursos.curso_id]);
    return rows;
}

//Borrar un estudiante
exports.deleteEstudiante = async(id) => {
    const [rows, fiels] = await db.execute ('DELETE FROM estudiantes_cursos WHERE estudiante_id=?', [id]);
    console.log(rows);
    return rows;
}