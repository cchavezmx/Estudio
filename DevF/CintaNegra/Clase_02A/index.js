//CONFIGURACION

const express = require('express');
const app = express()
const PORT = 4000

//ENDPOINT 
// PETICION DE TIPO GET 

app.get('/', (req, res) => {
    res.send('Hola Mundo');

})

// EJECUCION DE LA FUNCION 

app.listen(PORT, () => console.log(`https://localhost:${PORT}`))
