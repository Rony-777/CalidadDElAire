const db = require("../db/postgres");
const bcrypt = require('bcrypt');
const enviarEmail = require("./email");


async function userNameAutenticado(userName) {
    try {
        const response = await db.query('SELECT * FROM usuario WHERE username = $1', [userName]);
        return response.rows.length > 0;
    } catch (error) {
        console.error('Error al autenticar el nombre de usuario', error);
        throw error;
    }
}

async function crearUsuario(nombre, userName, password, email) {
    try {
        const autenticado = await userNameAutenticado(userName);
        if (!autenticado) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const response = await db.query('INSERT INTO usuario (nombre, username, password, email) VALUES ($1, $2, $3, $4) RETURNING id', [nombre, userName, hashedPassword, email]);
            enviarEmail(nombre, userName, password, email);
            return {
                message: 'Usuario creado',
                id: response.rows[0].id,
            };
        }
        return {
            error: 'El nombre de usuario ya está en uso',
        };
    } catch (error) {
        console.error('Error al crear el usuario', error);
        throw error;
    }
}


async function loginUsuario(userName, password) {
    try {
        const response = await db.query('SELECT * FROM usuario WHERE username = $1', [userName]);
        if (response.rows.length > 0) {
            const hashedPassword = response.rows[0].password;
            if (await bcrypt.compare(password, hashedPassword)) {
                return {
                    message: 'Credenciales validas',
                    id: response.rows[0].id,
                    nombre: response.rows[0].nombre,
                    auth: true,
                };
            }
        }

        return {
            message: 'Las credencaies no coinciden',
            auth: false,
        };

    } catch (error) {
        console.error('Error al autenticar el nombre de usuario', error);
        throw error;
    }
}

module.exports = { crearUsuario, loginUsuario };
