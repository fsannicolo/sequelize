const db = require('./tabelle/associazioni');
const express = require('express')

const app = express();

db.sequelize.authenticate().then(() => {
    // funzione di callback da eseguire in caso di successo
    console.log("Connessione con il database stabilita")
}).catch(() => {
    // funzione di callback da eseguire in caso di errore
    console.log("Errore nella connessione con il database")
})

db.sequelize.sync().then(()=>{
    console.log('Tabelle sincronizzate con successo')
}).catch((err) => {
    console.log('Errore nella sincronizzazione delle tabelle', err)
})

app.get('/fittizi', async (req, res) => {
    await db.tabelle.Categoria.create({nome: "Internazionale"})
    await db.tabelle.Regione.create({nome: "Veneto"})
    await db.tabelle.Citta.create({nome: "Verona", numeroabitanti: 1000000, fkregione: 1})
    await db.tabelle.Aeroporto.create({codice: 1, nome: "Catullo", fkcategoria: 1, fkcitta: 1});
    res.json({message: 'business'});
})

app.get('/aeroporti', async (req, res) => {
    res.json(await db.tabelle.Aeroporto.findAll());
})

app.listen(3000, () => {
    console.log('Applicazione in ascolto sulla porta 3000')
})