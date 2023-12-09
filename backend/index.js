require("dotenv");
const express = require("express");
const app = express();
const cors = require('cors');
const dbMiddleware = require("./src/middleware/dbMiddleware");
const router = require("./src/routers")


//COnfigurando el puerto.
app.set('port', process.env.PORT || 9000);

app.use(dbMiddleware);
app.use(express.json())
app.use(express.urlencoded({extended:true}))
router(app);

//Corriendo el servidor en el puerto escuchado.
app.listen(app.get("port"), ()=>{
    console.log("servidor en puerto: ", app.get("port"));
  });