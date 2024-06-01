const { hacerEncuesta, consultarEncuesta } = require("../controllers/encuesta");
const { jsonResponse } = require("../lib/jsonResponse");

const router = require("express").Router();

router.post("/", async (req, res) => {    
    const { id } = req.body;
    const response = await consultarEncuesta(id);

    if (response.estado == true) {        
        res.status(200).json(jsonResponse(200, { Message: "Consultada encuesta", 
        r1: response.r1, 
        r2: response.r2,
        r3:response.r3,
        r4:response.r4,
        r5:response.r5,
        promedio:response.promedio,
     }));
    } else {
        res.status(400).json(jsonResponse(400, { Message: "Error" }));
    }
});

router.post("/", async (req, res) => {    
    
    const response = await consultarEncuestas();

    if (response.estado == true) {        
        res.status(200).json(jsonResponse(200, { Message: "Consultada encuesta", 
        r1: response.r1, 
        r2: response.r2,
        r3:response.r3,
        r4:response.r4,
        r5:response.r5,
        promedio:response.promedio,
     }));
    } else {
        res.status(400).json(jsonResponse(400, { Message: "Error" }));
    }
});

module.exports = router;