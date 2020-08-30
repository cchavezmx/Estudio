// Volvemos a requerir express y le asignamos router como metodo .. : S
const express = require('express')
const router = express.Router();

// aqui se colocan las vistas por separado de cada CRUD 
// ahora con la expresion antes definida, usamos nuestro paquete de UserRouter
router.use(require('./UserRouter'))

module.exports = router;