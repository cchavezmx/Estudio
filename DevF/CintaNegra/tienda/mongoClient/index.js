const mongoose = require('mongoose') // se encarga de la comunicacion de la base de datos 



// CREAMOS LA CONECCION CON LA BASE DE DATOS AYUDADO DE LAS VARIABLES DEL ENTRONO
// Las segundas variables son para que no salga mensaje de que esta mal 

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(() => console.log('Error al conectarse a la base de datos'))





