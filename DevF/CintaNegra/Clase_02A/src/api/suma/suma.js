// Importamos express
const express = require('express')


// Creamos una constate que aplicara el modulo express.Router 

const suma = express.Router()

// Creamos la el metodo GET 
// convertimos los 
suma.get('/', (req, res) => {

    const { num1, num2 } = req.query // destructuracion     
    let suma = parseInt(num1) + parseInt(num2)
    res.status(200).json({ suma })
})

module.exports = {
    suma
}


//----------Forma de peticion-----------//
// localhost:4000/suma?num1=10&num2=70 //
//-------------------------------------//