const request = require('request');


request('https://rickandmortyapi.com/api/character/1/',(err, resp, body) => {
    // console.log(err);
   let bodyJson = JSON.parse(body) // parse ayuda a crear un objeto apartir de un string
   console.log(bodyJson.name)
})


function getPersonaje (id) {
request(`https://rickandmortyapi.com/api/character/${id}/`,(err, resp, body) => {
    // console.log(err);
     console.log(resp.statusCode)
   if(resp.statusCode === 200){
        let bodyJson = JSON.parse(body)
        console.log(bodyJson.name)
   } else {
        console.log('No fue encontrado');
   }
    
   
})
}

getPersonaje(1000000001010);
