const express = require('express');
const router = express.Router();


const { UserValidator } = require('../validators')
const { UserController } = require('../controller/');



// Vista de Rutas
router.post('/api/v1/signup/', UserValidator.signup, UserController.signup)

module.exports = router