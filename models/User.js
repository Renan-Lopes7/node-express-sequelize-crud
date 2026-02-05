const { DataTypes } = require('sequelize');
const db = require('../db/conn')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false //nao quero que tenha valor nulo entao use allowNull false 
    },
    occupation: {
        type: DataTypes.STRING,
        required: true    //nao aceita valores nulos e campo vazio 
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    },
})

module.exports = User