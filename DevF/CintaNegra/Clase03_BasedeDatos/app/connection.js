require('dotenv').config();
const express = require('express')
const monsoose = require('mongoose')
const PORT = process.env.PORT || 3000
const app = express() // con esto se ejecuta la aplicacion de alto nivel 
const { myCRUD } = require('../src/')


// conection 
// Dentro de la conexion agrega process.env.<NOMBRE_VARIABLE>

monsoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database Coneccted'))
    .catch(() => console.log('Error en la conection'))
    

// generar Schema => Definir las reglas para la conexion 

const flightSchema = new monsoose.Schema({

    airlane: {
        type: String,
        required: true, // con esto obligamos al usuario a ingresar este dato
    },
    aircraft_name: {
        type: String,
        required: true,
    },
    aircraft_model: {
        type: Number,
    },
    flight_from: {
        type: String,
        required: true, 
    }


})


// Generar Modelo   Objeto que permite interactuar con la coleccion 

const Fligths  = monsoose.model('Flights', flightSchema);


// MIDDELWARE => SIN ESTO NO PODEMOS ACCDER AL BODY 

app.use(express.urlencoded({extends: true})); // antes de ejecutar las peticione que esperamos datos de tipo formulario
app.use(express.json( {extends: true})); // antes de ejecutar las peticiones avisamos que esperamos datos tipo Json


// CREAMOS ** END-POINTS


app.get('/', (_, res) => {res.status(200).json({ messege: 'Ok'})});

// crea objetos a la base de datos

app.post('/POST', (req, res) => {
// 1) recibir la informacion del cliente
    const { body } = req; 
// 2) Pedirle a la base de datos que cree un nuevo documento apartir del body
    const dataFlight = new Fligths(body);
    dataFlight.save()
        .then((resMongo) => res.status(201).json({ resMongo }))
        .catch((errMongo) => res.status(400).json({ errMongo }))
})


// Read ALL con el metodo find. que es una promsea podemos usar then y catch para recibir la respuesta de todos

app.get('/POST/', (req, res) => {
    Fligths.find()
        .then((resMongo) => res.status(200).json({ resMongo }))
        .catch((errMongo) => res.status(200).json({ errMongo }))
})

// READ ONE 

app.get('/POST/:id', (req, res) => {
    Fligths.findById(req.params.id) // buscamos el registro gracias a params de req
        .then((resMongo) => {res.status(200).json({ resMongo })})
        .catch((errMongo) => {res.status(404).json({ errMongo })})
})

// req.body => Trasforma los dartos de la consulta de paquete para pintarlo en la web... :S 

// Update 

app.patch(('/POST/:id'), (req, res) => {
    Fligths.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((resMongo) => {res.status(200).json({messege: `Objeto ${resMongo} Actualizado`})})
        .catch((errMongo) => {res.status(404).json({messege: errMongo})})
        console.log(req.params.id)
})


// DELETE 

app.delete(('/POST/:id'), (req, res) => {
    Fligths.findByIdAndDelete(req.params.id)
        .then((respMongo) => res.status(204).json({messege: respMongo.id})) //siempre se maneja el 204 para la peticion correcta del borrado 
        .catch((errMogno) => res.status(400).json({ messenge: `El recurso: ${errMogno} no Existe`}))
})

module.exports = {

    app,
    PORT

}