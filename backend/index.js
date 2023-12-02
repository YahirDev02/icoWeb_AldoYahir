require("dotenv");
const express = require("express");
const app = express();

//COnfigurando el puerto.
app.set('port', process.env.PORT || 9000);

//Corriendo el servidor en el puerto escuchado.
app.listen(app.get("port"), ()=>{
    console.log("servidor en puerto: ", app.get("port"));
  });