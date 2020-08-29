const mongosse = require('mongoose')
const timestamp = require('mongoose-timestamp')
const { Schema } = mongosse // con destructuracion 

// LOS SCHEMAS SIEMPRE CON MAYUSCULAS 

const userSchema = new Schema({

    fristName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
});

// 1) se instala npm install mongoose-timestamp
// 2) se agrega el plugin a Schema creado 
// timestamp nos crea UpadteAt y CreateAT que es la hora y dia en que se crea el el post 
userSchema.plugin(timestamp)

// de declara en una variable el Schema 
const User = mongosse.model('User', userSchema, 'Users');


module.exports = {
    User 
}