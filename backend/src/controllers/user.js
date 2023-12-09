const {userModel} = require('../utils/user');

//Método post
function createUser(db, params){
    return userModel(db).createUser(params);
}
module.exports = {
    createUser
}