const Aeroporto = require('./aeroporto')
const Volo = require('./volo')
const sequelize = require('../config')

Aeroporto.hasMany(Volo, {foreignKey: 'fkaeroportopartenza'});
Aeroporto.hasMany(Volo, {foreignKey: 'fkaeroportoarrivo'});
Volo.belongsTo(Aeroporto, {foreignKey: 'fkaeroportopartenza'});
Volo.belongsTo(Aeroporto, {foreignKey: 'fkaeroportoarrivo'});

const db = {
    sequelize,
    tables: [
        Volo, 
        Aeroporto
    ]
}

module.exports = db;