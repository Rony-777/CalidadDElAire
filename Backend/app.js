const express = require('express');
const cors = require('cors');
const app= express();
require('dotenv').config();
const conexion = require('./db/postgres')

const port = process.env.port || 4000;


app.use(cors());
app.use(express.json());



app.use("/api/login", require("./routes/login"));
app.use("/api/singup", require("./routes/singup"));
app.use("/api/singout", require("./routes/singout"));
app.use("/api/refresh-token", require("./routes/refreshToken"));

app.get("/", (req, res)=>{
    res.send("Hello");
});

app.listen(port, ()=>{
    console.log("Servidor en  http://localhost:"+port);
})