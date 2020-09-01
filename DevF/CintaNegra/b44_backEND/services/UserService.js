const { User } = require('../models')

// aqui se ponen las funciones que hace cada parte del crud... 
// TALVEZ ES AQUI donde se ponen las validaciones. 

module.exports = {
    // creamos los usuarios a la base de datos 
    create: (body) => new User(body).save(),

    // Buscamos todos los usuarios en la base de datos
    get: () => User.find(),

    // buscamos por id
    getByID: (id) => User.findById(id),

    // patch: (id, body) => User.findByIdAndUpdate(id, body, { new: true }), 
    patch: (user, body) => {
        Object.assign(user, body);
        return user.save(); // con el metdo save, hacemos el haseo de la contraseña 
    },
    // el metodo exacto para solo borrar un elemento segun id
    delete: (id) =>  User.findByIdAndDelete(id), 

    // buscamos si el email ya se encuentra en la base de datos con findOne traemos el resultado
    findByEmail: (email) => User.findOne({ email }),

    // Logica de signup

    signup: (body) => new User(body).save(),
 }