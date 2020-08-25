const express = require('express')
const PORT = 4000
const app = express()
const { suma } = require('../api/suma/suma') //las rutas necesitan un objeto. 
const { apiReq } = require('../api')
const { userReq } = require('../api/usuario/')
const { swapiReq } = require('../api/swapi/')
 
app.use(express.json())


app.use('/suma', suma)
app.use('/api', apiReq)
app.use('/user', userReq)
app.use('/swapi/api/', swapiReq)

module.exports = {
    app,
    PORT
}


