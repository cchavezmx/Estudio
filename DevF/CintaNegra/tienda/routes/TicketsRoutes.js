// configuracion para el CRUD 
const { Tickets } = require('../models/Tickets')
const express = require('express')
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
        .populate('products')  // se agrega el populate para realacionar tablas y ver los valores relacionados en la base de datos 
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

    const { id } = req.params
    
    Tickets.findById(id)
        .populate('products') // este es el nombre de la base de datos dentro de la instancia TIENDA! dentro de mongo Atlas

        .then((ticket) =>{
        // 1> Obtenemos el array del costo de todos los productos y lo sumamos
           const subtotal = ticket.products.map(product => product.price).reduce((a, b) => a + b)
        // 2> Calcular en IVA
            const taxes = subtotal * 0.16
        // 3> PrecioFinal
            const total = subtotal  + taxes
        // 4> Mandamos los datos al ticket
            return Tickets.findByIdAndUpdate(id, { subtotal, taxes, total }, { new: true })
            // al Ser una funcion que requiere tiempo lo retornamos para poder usar el resultado con otro then
            // El findByIdAndUpdate requiere = el id a buscar, un objeto con las variables que deseamos cambiar, y el valor de new: true           
        })
        .then(respTickets => res.status(200).json(respTickets))
        .catch(mongoErr => res.status(401).json({messege: mongoErr}))
    
})
 
// terminar esta parte!!!!!

module.exports = {
    appTickets
}