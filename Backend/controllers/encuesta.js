const db = require("../db/postgres");

async function hacerEncuesta(nombre, correo, r1, r2, r3, r4, r5) {
    try {
        const promedio=(r1+r2+r3+r4+r5)/5;
        const response = await db.query('INSERT INTO encuesta (nombre, correo, p1, p2, p3, p4, p5, promedio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id', [nombre, correo, r1, r2, r3, r4, r5, promedio]);        
        return {
            message: 'Encuesta guardada', 
            estado: true,
            id:response.rows[0].id,
        };        
    } catch (error) {
        console.error('Error al guardar la encuesta: ', error);
        throw error;
    }
}

async function consultarEncuesta(id) {
    try {        
        const response = await db.query('SELECT avg(p1) as p1, avg(p2) as p2, avg(p3) as p3, avg(4) as p4, avg(p5) as p5, avg(promedio) as promedio FROM encuesta  ');            
        return {
            message: 'Consulta guardada', 
            estado: true,
            r1:response.rows[0].p1,
            r2:response.rows[0].p2,
            r3:response.rows[0].p3,
            r4:response.rows[0].p4,
            r5:response.rows[0].p5,
            promedio:response.rows[0].promedio,
        };        
    } catch (error) {
        console.error('Error al consultar la encuesta: ', error);
        throw error;
    }
}

async function consultarEncuestas() {
    try {        
        const response = await db.query('SELECT * FROM encuesta WHERE id=$1', [id]);            
        return {
            message: 'Consulta guardada', 
            estado: true,
            r1:response.rows[0].p1,
            r2:response.rows[0].p2,
            r3:response.rows[0].p3,
            r4:response.rows[0].p4,
            r5:response.rows[0].p5,
            promedio:response.rows[0].promedio,
        };        
    } catch (error) {
        console.error('Error al consultar la encuesta: ', error);
        throw error;
    }
}

module.exports = { hacerEncuesta, consultarEncuesta, consultarEncuestas };
