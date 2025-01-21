import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("aeroporti", "root", "cisco", {
    host: "mysql",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    // funzione di callback da eseguire in caso di successo
    console.log("Connessione con il database stabilita")
}).catch(() => {
    // funzione di callback da eseguire in caso di errore
    console.log("Errore nella connessione con il database")
})