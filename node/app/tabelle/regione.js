const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Regione extends Model {}

Regione.init({
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50)
    },
},{
    sequelize, 
    modelName: 'Regioni',
    tableName: 'Regioni',
    timestamps: false
})

module.exports = Regione;