const db = require('./tabelle/associazioni');

db.sequelize.authenticate().then(() => {
    // funzione di callback da eseguire in caso di successo
    console.log("Connessione con il database stabilita")
}).catch(() => {
    // funzione di callback da eseguire in caso di errore
    console.log("Errore nella connessione con il database")
})