const db = require('./tabelle/associazioni');
const express = require('express')
const app = express();
app.use(express.json())     // aggiunge un middleware

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

// app.get('/fittizi', async (req, res) => {
//     await db.tabelle.Categoria.create({nome: "Internazionale"})
//     await db.tabelle.Regione.create({nome: "Veneto"})
//     await db.tabelle.Citta.create({nome: "Verona", numeroabitanti: 1000000, fkregione: 1})
//     await db.tabelle.Aeroporto.create({codice: 1, nome: "Catullo", fkcategoria: 1, fkcitta: 1});
//     res.json({message: 'business'});
// })

app.post('/categoria', async (req, res) => {
    try {
        await db.tabelle.Categoria.create({ nome: req.body.nome })
        res.status(200).json({message: "Categoria creata"})
    }
    catch (err) {
        res.status(500).json({message: "Errore nella creazione", error: err})
    }
})

app.post('/regione', async (req, res) => {
    try {
        await db.tabelle.Regione.create({ nome: req.body.nome })
        res.status(200).json({message: "Regione creata"})   
    }
    catch (err) {
        res.status(500).json({message: "Errore nella creazione", error: err})
    }
})

app.post('/citta', async (req, res) => {
    try {
        await db.tabelle.Citta.create({ 
            nome: req.body.nome, 
            numeroabitanti: req.body.numeroabitanti, 
            fkregione: req.body.fkregione 
        })
        res.status(200).json({message: "Città creata"})   
    }
    catch (err) {
        res.status(500).json({message: "Errore nella creazione", error: err})
    }
})

app.post('/aeroporto', async (req, res) => {
    try {
        await db.tabelle.Aeroporto.create({ 
            codice: req.body.codice,
            nome: req.body.nome, 
            fkcategoria: req.body.fkcategoria, 
            fkcitta: req.body.fkcitta 
        })
        res.status(200).json({message: "Aeroporto creato"})   
    }
    catch (err) {
        res.status(500).json({message: "Errore nella creazione", error: err})
    }
})

app.post('/volo', async (req, res) => {
    try {
        await db.tabelle.Volo.create({ 
            orariopartenza: req.body.orariopartenza,
            durataminuti: req.body.durataminuti, 
            fkaeroportopartenza: req.body.fkaeroportopartenza, 
            fkaeroportoarrivo: req.body.fkaeroportoarrivo 
        })
        res.status(200).json({message: "Volo creato"})   
    }
    catch (err) {
        res.status(500).json({message: "Errore nella creazione", error: err})
    }
})

app.get('/aeroporti', async (req, res) => {
    res.json(await db.tabelle.Aeroporto.findAll());
})

app.listen(3000, () => {
    console.log('Applicazione in ascolto sulla porta 3000')
})