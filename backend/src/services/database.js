const mysql = require('mysql2/promise');
require('dotenv/config');

const mysqlConnection = async () => 
    await mysql.createConnection({
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD,
        database: process.env.BD_DATABASE,
        waitForConnections: true,
    });

module.exports = mysqlConnection