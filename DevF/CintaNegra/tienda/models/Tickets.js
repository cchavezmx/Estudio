const mongoose = require('mongoose')


// en el Schema agregamos un array con la informacion del Products


const tickteSchema = new mongoose.Schema({
    subtotal: {
        type: Number,
        default: 0,
    },
    taxes: {
        type: Number,
        default: 0,
    },
    total: {
        type: Number,
        default: 0,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        require: true,
    }],
})

const Tickets = mongoose.model('Tickets', tickteSchema);

module.exports = {
    Tickets
}

