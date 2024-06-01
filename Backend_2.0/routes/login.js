const { loginUsuario } = require("../controllers/user");
const { jsonResponse } = require("../lib/jsonResponse");

const router = require("express").Router();

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json(jsonResponse(400, { error: "Algun espacio esta vacio" }));
    }
    const response = await loginUsuario(email, password);
    console.log(response.auth);
    const auth=response.auth;
    if (!auth) {

        return res.status(401).json(jsonResponse(401, {  message:"error" }));
    }
    res.status(200).json(jsonResponse(200, {auth:auth}));
});




module.exports = router;