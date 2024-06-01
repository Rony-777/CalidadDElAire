const  router  = require("express").Router();

router.get("/",(req, res)=>{
    res.send ("Refresh token");
});

module.exports= router;