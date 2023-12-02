const mysqlConexion = require("../services/database");

const createUser = async (req, res) => {
    try {
        const db = mysqlConexion();
        const {user, password} = req.body;
        db.connect(error =>{
            if(error) throw error;
        })
        db.query(`INSERT INTO user(user, password) VALUES ('${user}', ${password});`);
    } catch (error) {
        
    }
}
//git init
//git add .
//git commit -m "Creando mi función user"
//git push -u origin "nombre de la rama"