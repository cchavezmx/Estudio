const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT  || 4000
const app = express()

// morgan para log de la consola 
app.use(morgan('combined'))

// Pasamos los midelware
app.use(express.urlencoded({ extended: true }))
app.use(express.json({extended: true}))

// Mensaje en el index 
app.get('/', (_, res) => res.send('Hola a Todos'))

// add Index de la vista de Router
app.use(require('../router/'))


// Exportamos los modulos de la app y el puerto de la aplicación 
module.exports = { app, PORT }