const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('nodesequelize2', 'root', 'lopeslopes', {
    host: 'localhost',
    dialect: 'mysql'
})

/*try {

    sequelize.authenticate()
    console.log('conectado com sucesso !');

} catch (err) {
    console.log('não foi possivel se conectar', err);

}*/

module.exports = sequelize