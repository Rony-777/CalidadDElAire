const { loginUsuario } = require("../controllers/user");
const { jsonResponse } = require("../lib/jsonResponse");

const router = require("express").Router();

router.post("/", async (req, res) => {
    const { userName, password } = req.body;
    if (!userName || !password) {
        return res.status(400).json(jsonResponse(400, { error: "Algun espacio esta vacio" }));
    }
    const response = await loginUsuario(userName, password);
    const accesToken = "acces_token";
    const refreshToken = "refresh_token";
    const message = response.message;
    const auth = response.auth;
    const user = {
        id: response.id,
        nombre: response.nombre,
        userName: userName,
    }

    if (!auth) {
        
        return res.status(401).json(jsonResponse(401, { user, message }));
    }
    res.status(200).json(jsonResponse(200, { user, refreshToken, accesToken, message }));
});




module.exports = router;