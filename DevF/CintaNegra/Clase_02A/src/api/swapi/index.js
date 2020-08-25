const express = require('express');
const swapiReq = express.Router();
const fetch = require('node-fetch') // node no trabaja con feth hay que instalar el paquete $ npm install node-fetch --save 

// funcion ascrionica para obtener el resultado de la busqueda. 

// primero se declara la funcion con el async al principio
// se declara el resultado que tarda, se pone el await y seguido del fetch para mnandar la consulta a la api
// ese variable se iguala a otro awit y se transforma a un json 
// cuando tenga el dato lo regresamos con un return 

// se puede hacer con request, axios o fetch 

async function getData(number){

    let result = await fetch(`https://swapi.dev/api/people/${number}`)
        let data = await result.json()
        return data 
}


// metodo GET
// una ves que invocamos nuestro funcion dentro del get de nuestra consulta
// en el then regresamos el nombre del objecto para hacerlo Asyncronico

swapiReq.get('/:id', function(req, res){
    getData(req.params.id)
        .then(data => res.status(200).json({Personaje: data}))
        .catch(err => res.status(404).json('No hay datos para el registro'))
    

})



module.exports = {
    swapiReq
}