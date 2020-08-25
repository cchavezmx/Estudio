const express = require('express')


const userReq = express.Router()



// METODO GET


userReq.get('/:user', function(req, res) {

    const { user } = req.params
    res.status(200).json({ user })
})

module.exports = {
    userReq
}