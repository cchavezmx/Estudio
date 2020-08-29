const express = require('express')
const PORT = process.env.PORT  || 4000
const app = express()

// CRUD USER
const { User } = require('../models')

// Pasamos los midelware
app.use(express.urlencoded({ extended: true }))
app.use(express.json({extended: true}))

// Mensaje en el index 
app.get('/', (_, res) => res.send('Hola a Todos'))

// Modelo ES6 async - await

app.post('/api/v1/user', async (req, res) => {
    try {
        const user = await new User(req.body).save();  // creamos el usuario 
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

// Exportamos los modulos de la app y el puerto de la aplicación 
module.exports = { app, PORT }