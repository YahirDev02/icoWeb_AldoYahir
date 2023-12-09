/* Agregamos la librerias de express para ocupar el recurso de "Router" y enlazarlo con controllers. */
const express = require("express");
const router = express.Router();
const userController = require('../controllers/user')

//Método post
function createUserNetwork(req, res){
    const db = req.db;
    const { user, password } = req.body;
    userController.createUser(db, req.body ).then((rows)=>{
        res.send(rows);
    })
    .catch((error)=>{
        console.log(error);
        res.send({status: 500, info: "Error en el servidor"});
    })
}

//Direcciones de las peticiones
router.post("/createUser", createUserNetwork )

module.exports = router;