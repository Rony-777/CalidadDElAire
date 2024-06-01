const db = require("../db/postgres");
const bcrypt = require('bcrypt');
const enviarEmail = require("./email");


async function userNameAutenticado(email) {
    try {
        const response = await db.query('SELECT * FROM usuario WHERE email = $1', [email]);
        return response.rows.length > 0;
    } catch (error) {
        console.error('Error al autenticar el nombre de usuario', error);
        throw error;
    }
}

async function crearUsuario( password, email) {
    try {
        const autenticado = await userNameAutenticado(email);
        if (!autenticado) { 
            console.log('hfghgf');
            const hashedPassword = await bcrypt.hash(password, 10);
            const response = await db.query('INSERT INTO usuario ( password, email) VALUES ($1, $2 ) RETURNING id', [ hashedPassword, email]);
            enviarEmail( password, email);
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


async function loginUsuario(email, password) {
    try {
        const response = await db.query('SELECT * FROM usuario WHERE email = $1', [email]);
        if (response.rows.length > 0) {
            const hashedPassword = response.rows[0].password;
            if (await bcrypt.compare(password, hashedPassword)) {
                return {
                    message: 'Credenciales validas',
                    id: response.rows[0].id,
                    email: response.rows[0].email,
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
