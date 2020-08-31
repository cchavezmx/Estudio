const { User } = require('../models')

// aqui se ponen las funciones que hace cada parte del crud... 
// TALVEZ ES AQUI donde se ponen las validaciones. 

module.exports = {
    create: (body) => new User(body).save(),
    get: () => User.find(),
    getByID: (id) => User.findById(id),
    patch: (id, body) => User.findByIdAndUpdate(id, body, { new: true }),
    delete: (id) =>  User.findByIdAndDelete(id), // el metodo exacto para solo borrar un elemento segun id
}