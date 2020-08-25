// modulo instalado graphql, express, express-graphql

const { buildSchema } = require('graphql');
const express = require('express')
const { graphqlHTTP } = require('express-graphql')




// creamos el schema de la base datos 

const schema = buildSchema(`

    type Query {
        saludo: String
        nombre: String
        edad: Int
    }

`)

// Resolvemos las estradas e la base datos del root por cada endpoint
// Necesitas el retrun 

let root = { 
    saludo: () => {
      return 'Hola Mundo'
    },
    nombre: () => {
        return 'Carlos Chavez'
    },
    edad: () => {
        return 35
    }
}
// cremos la conexion 

let app = express();


// graphqlHTTP es una funcion que permite acceder a los datos generados por las funciones 

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,

}))

app.listen(4000);
console.log('Corriendo GraphQL desde el puerto 4000 en localhost')
