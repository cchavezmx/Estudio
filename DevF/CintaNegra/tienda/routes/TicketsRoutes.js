// configuracion para el CRUD 
const { Tickets } = require('../models/Tickets')

const express = require('express')
const Products = require('../models/Products')
const appTickets = express.Router()


appTickets.use(express.urlencoded({ extended: true }))
appTickets.use(express.json({ extended: true }))



// Create Tickets: 

appTickets.post('/', (req, res) => {
   const { body } = req
   const newTicket = new Tickets(body)
   newTicket.save()
    .then(mongoRes => res.status(201).json({ messege: mongoRes}))
    .catch(mongoErr => res.status(400).json({ messege: mongoErr}))
})

// Get all Tickets

appTickets.get('/', (_, res) => {
        Tickets.find()    
        .then(mongoRes => res.status(200).json({ messege: mongoRes}))
        .catch(mongoErr => res.status(400).json({ messege: mongoErr}))
})

// Get by ID

appTickets.get('/:id', (req, res) => {
    const { id } = req.params
    Tickets.findById(id)
    .populate( 'products' ) // se agreaga el populate para realacionar tablas, va y busca la tabla 
    .then(mongoRes => res.status(200).json({ messege: mongoRes }))
    .catch(mongoErr => res.status(404).json({ messege: mongoErr }))

})

// Delete Tickets

appTickets.delete('/:id', (req, res) => {
    Tickets.findByIdAndDelete(req.params.id)
        .then(mongoRes => res.status(200).json({messege: `Ticket ${mongoRes} Eliminado`}))
        .catch(mongoErr => res.status(401).json({messege: mongoErr}))
})

// PATCH Ticket

appTickets.patch('/:id/checkout', (req, res) => {

    const { id, body } = req.params
    
    Tickets.findById(id)
        .populate('products')
        .then(ticket => {
        // en una variable solo tomar el valor del precio de los productos
        const prices = ticket.products.map(product => product.price)
        console.log(prices)
            
            res.status(200).json({messege: `Ticket ${ticket} Modificado`})})
        .catch(mongoErr => res.status(401).json({messege: mongoErr}))
    
})
 
// terminar esta parte!!!!!

module.exports = {
    appTickets
}