const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const User = require('./User');


const Address = db.define('address', {

    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    },
});

User.hasMany(Address) //o usuario tem muitos endereços hasmany mais pertence ao unico usuario
Address.belongsTo(User)    //criar as relações   

module.exports = Address