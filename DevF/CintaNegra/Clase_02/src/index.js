const express = require('express')
const { tareasRutas } = require('./api/recursos/tareas/tareas.rutas')


const app = express()

const PORT = 3000

app.use(express.json()) 

app.use('/tareas', tareasRutas) // esto viene de tareas.rutas

module.exports = {
    app,
    PORT
}