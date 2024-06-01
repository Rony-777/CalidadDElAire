const  router  = require("express").Router();

router.get("/",(req, res)=>{
    res.send ("Singout");
});

module.exports= router;