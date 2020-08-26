// configuracion para el CRUD 
const { Products } = require('../models/Products')
const express = require('express')
const appProducts = express.Router()

appProducts.use(express.urlencoded({ extended: true }))
appProducts.use(express.json({ extended: true }))



// Create Products: 

appProducts.post('/', (req, res) => {
   const { body } = req
   const newProduct = new Products(body)
   newProduct.save()
    .then(mongoRes => res.status(201).json({ messege: mongoRes}))
    .catch(mongoErr => res.status(400).json({ messege: mongoErr}))
})

// Get all Products

appProducts.get('/', (_, res) => {
        Products.find()    
        .then(mongoRes => res.status(200).json({ messege: mongoRes}))
        .catch(mongoErr => res.status(400).json({ messege: mongoErr}))
})

// Get by ID

appProducts.get('/:id', (req, res) => {
    console.log(req)
    Products.findById(req.params.id)
    .then(mongoRes => res.status(200).json({ messege: mongoRes }))
    .catch(mongoErr => res.status(404).json({ messege: mongoErr }))

})

// Delete Products

appProducts.delete('/:id', (req, res) => {
    Products.findByIdAndDelete(req.params.id)
        .then(mongoRes => res.status(200).json({messege: `Producto ${mongoRes} Eliminado`}))
        .catch(mongoErr => res.status(401).json({messege: mongoErr}))
})

// PATCH Product

appProducts.patch('/:id', (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(mongoRes => res.status(200).json({messege: `Producto ${mongoRes} Modificado`}))
        .catch(mongoErr => res.status(401).json({messege: mongoErr}))
    
})


module.exports = {
    appProducts
}