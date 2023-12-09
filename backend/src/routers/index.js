const userNetwork = require('../network/user');

/* Exportamos la función de nuestro servidor haciendo uso de nuestro endpoint
hacia el tipo de archivo a usar. */
module.exports = function(app){
    app.use(userNetwork);
}