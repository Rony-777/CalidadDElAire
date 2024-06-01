const { hacerEncuesta, consultarEncuesta } = require("../controllers/encuesta");
const { jsonResponse } = require("../lib/jsonResponse");

const router = require("express").Router();


router.post("/", async (req, res) => {
    const { nombre, correo, r1, r2, r3, r4, r5 } = req.body;
    const response = await hacerEncuesta(nombre, correo, r1, r2, r3, r4, r5);
    if (response.estado == true) {
        console.log(response.message);
        res.status(200).json(jsonResponse(200, { Message: "Encuesta guardada", id: response.id }));
    } else {
        res.status(400).json(jsonResponse(400, { Message: "Error" }));
    }
});

module.exports = router;