const {crearUsuario} = require("../controllers/user");
const { jsonResponse } = require("../lib/jsonResponse");

const router = require("express").Router();

router.post("/", async (req, res) => {
    const { nombre, userName, password, email } = req.body;    
    if (!nombre || !userName || !password) {
        return res.status(400).json(jsonResponse(400, { error: "Algun espacio esta vacio" }));
    }
    const response= await crearUsuario(nombre, userName, password, email);
    if (!response.id) {
        return res.status(401).json(jsonResponse(401,  {error: response.error} ));    
    }

    res.status(200).json(jsonResponse(200,  {message: response.message, id: response.id} ));
});


module.exports = router;