const CryptoJS = require("crypto-js");
require('dotenv/config');

class User{
    db;
    constructor(dbMiddleware) {
        this.db=dbMiddleware;
    }

    //Método post
    async createUser(params) {
        const { user, password } = params
        // Encrypt
        const passwordCrypto = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
        const [rows] = await this.db.query(`INSERT INTO user (user, password) VALUES ('${user}', '${passwordCrypto}');`);
        return rows;
    }

    async yamilet(){}
}

function userModel(db){
    const user = new User(db);
    return user;
}

module.exports = {userModel}