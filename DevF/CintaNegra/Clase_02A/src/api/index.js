const express = require('express')
const { Router } = require('express')

const apiReq = express.Router()


// metodo get

apiReq.get('/', (req, res) => {
    res.status(200).json({response: "Hola Mundo Zurdo"})
})

module.exports = {
    apiReq
}

