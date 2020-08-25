let { graphql, buildSchema } = require('graphql')

// Contructor schema, using GraphQL schema lenguage

let schema = buildSchema(`
    type Query {
        hello: String,
        user: String,
        edad: Int
    }
`);

// the root provides a resolver fuction for each API endpoint

let root = {
    hello: () => {
        return 'Hello world!';
    },
    user: () => {
        return 'Carlos Alfonso Chavez Rosario'
    },
    edad: () =>{
        return 35
    }
};

// run the GraphQL query '{ hello }' and print out the response

graphql(schema, '{ hello, user, edad }', root)
    .then((response) => {console.log(response)})
