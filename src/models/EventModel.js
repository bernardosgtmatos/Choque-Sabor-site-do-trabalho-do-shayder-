const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database.js');
const bcrypt = require('bcryptjs');

const order = sequelize.define('order', { //tabela pedido
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero_pedido :{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique : true
    },
    endereço :{

    }
});