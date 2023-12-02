const mysql = require('mysql');
require('dotenv');

const mysqlConexion = () => 
    mysql.createConnection({
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD,
        database: process.env.BD_DATABASE
    });

mysqlConexion.connect(error => {
    if(error) throw error;
    console.log("Conexión éxitosa a la base de datos.");
})

module.exports = mysqlConexion;