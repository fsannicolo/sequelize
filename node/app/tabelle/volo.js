const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Volo extends Model {}

Volo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    orariopartenza: {
        type: DataTypes.TIME
    },
    durataminuti: {
        type: DataTypes.SMALLINT
    },
    fkaeroportopartenza: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    fkaeroportoarrivo: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
},{
    sequelize, 
    modelName: 'Voli',
    tableName: 'Voli',
    timestamps: false
})

module.exports = Volo;