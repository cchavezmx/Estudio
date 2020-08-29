const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
// le agrege esta linea por que salia un error 

// en el Schema agregamos un array con la informacion del Products


const tickteSchema = new mongoose.Schema({
    subtotal: {
        type: Number,
        default: 0,
        trim: true,
    },
    taxes: {
        type: Number,
        default: 0,
        trim: true,
    },
    total: {
        type: Number,
        default: 0,
        trim: true,
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

