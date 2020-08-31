const express = require('express');
const router = express.Router();

const { UserValidator } = require('../validators')
const { UserController } = require('../controller/')

// Vista de Rutas
router.get('/api/v1/user/', UserController.get)
router.post('/api/v1/user/', UserValidator.create, UserController.create)
router.get('/api/v1/user/:id', UserController.getByID)
router.patch('/api/v1/user/:id', UserController.patch)
router.delete('/api/v1/user/:id', UserController.delete)


// Solo se exporta el router por que no es un objeto
module.exports = router
