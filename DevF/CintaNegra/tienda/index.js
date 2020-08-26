require('dotenv').config() // son las variables del enterno
require('./mongoClient/index.js');
const { appProducts } = require('./routes/ProductsRoutes')
const { appTickets } = require('./routes/TicketsRoutes')
const express = require('express')

const PORT = process.env.PORT  || 4000
const app = express()


// Rutas

app.use('/app/products/', appProducts)
app.use('/app/tickets/' , appTickets)

// arranca


app.listen(PORT, () => { console.log(`Listening on PORT ${PORT}`) })