const request = require('request'); // para poder usar request



function getPokemones (cantidad) {
    // let URL= 'https://pokeapi.co/api/v2/pokemon'
    let URL= `https://pokeapi.co/api/v2/pokemon?offset=1&limit=${cantidad}`

    return new Promise((resolve, reject) => {
        
        let pokemones = request(URL,(err, resp, body) => {

            let bodyJason = JSON.parse(body).results,
                consulta = bodyJason.slice(0, cantidad);
    
            if(consulta.length > 0 && consulta.length <= 150){
                resolve(consulta);
            }else  {
               console.log('No hay elementos')
            }

    
        });
    })

}


getPokemones(150)
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(console.log(err)));