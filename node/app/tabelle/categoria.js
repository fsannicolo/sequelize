const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Categoria extends Model {}

Categoria.init({
    id: {
        type: DataTypes.TINYINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(20)
    },
},{
    sequelize, 
    modelName: 'Categorie',
    tableName: 'Categorie',
    timestamps: false
})

module.exports = Categoria;