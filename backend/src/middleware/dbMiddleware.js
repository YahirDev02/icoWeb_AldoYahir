const dbConnection = require('../services/database');

/* Por medio de una función de 3 parámetros iniciamos nuestra conexción para evitar errores
de la promesa y asegurandonos de que esta conexión exista antes de la carga de solicitudes. */
module.exports = function(req, res, next){
    dbConnection().then((dbConnection) =>{
        req.db=dbConnection;
        next();
    })
    .catch(()=>{
        console.log("Conexión fallida.");
        req.db.end();
    })
}