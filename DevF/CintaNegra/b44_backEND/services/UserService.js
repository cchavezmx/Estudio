const { User } = require('../models')

// aqui se ponen las funciones que hace cada parte del crud... 
// TALVEZ ES AQUI donde se ponen las validaciones. 

module.exports = {
    create: (body) => new User(body).save(),
    get: () => User.find(),
    getByID: (id) => User.findById(id),

}