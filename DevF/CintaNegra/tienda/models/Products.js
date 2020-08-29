const mongoose = require('mongoose')


/* Instrucciones: 

Articulo 
    nombre (string)
    precio (number)
    existencias (number)
Ticket 
    subtotal Number
    IVA number
    total number
    articulos articulos
*/


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        default: 25,
        trim: true,
    },

})

const Products = mongoose.model('Products', productSchema);


module.exports = {
    Products
}
