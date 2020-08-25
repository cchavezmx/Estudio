const express = require('express')
const myCRUD = express()


// METODOS 


// CREATE

myCRUD.post('/animales', (req, res) => {
    console.log(req)
    console.log(res)

    const animal = { id: 'A1', nombre: 'Perrito', edad: 4}

    res.status(201).json({ animal })


})


module.exports = {
    myCRUD
}