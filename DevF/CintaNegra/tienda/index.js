require('dotenv').config() // son las variables del enterno
require('./mongoClient/index.js');
const { appProducts } = require('./routes/ProductsRoutes')
const { appTickets } = require('./routes/TicketsRoutes')
const express = require('express')
const path = require('path')

const PORT = process.env.PORT  || 4000
const app = express()

// pintamos un HTML al hacerle un GET a la URL  // todas las webs hacen un GET al entrar en ellas

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})


// Rutas

app.use('/app/products/', appProducts)
app.use('/app/tickets/' , appTickets)

// arranca


app.listen(PORT, () => { console.log(`Listening on PORT ${PORT}`) })