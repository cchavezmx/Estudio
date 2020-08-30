const express = require('express');
const router = express.Router();

const { UserController } = require('../controller/')

// Vista de Rutas
router.get('/api/v1/user/', UserController.get)
router.post('/api/v1/user/', UserController.create)
router.get('/api/v1/user/:id', UserController.getByID)


// Solo se exporta el router por que no es un objeto
module.exports = router
