const Sequelize = require('sequelize');

const config = {
    username: "root",
    password: "cisco",
    database: "compagniaaerea",
    host: "mysql",
    dialect: "mysql"
}

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});

module.exports = sequelize;