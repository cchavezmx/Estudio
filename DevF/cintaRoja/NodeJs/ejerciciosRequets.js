const request = require('request'); // para poder usar request

// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
//                     https://pokeapi.co/


let getPokemon = (id) => {

    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`

    request(URL, (err, resp, body) => {
        if (resp.statusCode === 200) {
            
            let bodyJason = JSON.parse(body); // creamos el objeto
            let typePokemon = bodyJason.types[0]
                    console.log(`Nombre: ${bodyJason.name} - de Tipo:  ${typePokemon.type.name}`)
        }else {
            console.log('No se encontro el Pokemon')
        }
    });

}

getPokemon(10)

// 2.- Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro("i robot");
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot) 


function getLibro (book) {

        let consulta = request(`http://openlibrary.org/search.json?q=${book}`,(err,resp,body) => {
            
            let bodyJason = JSON.parse(body)            
            let autores = bodyJason.docs[0].author_name; //revisar que es un objeto para poder usarlo con un for
            let titulo = bodyJason.docs[0].title; // lo mismo de arriba

            autores.forEach((value, index) => {

                console.log(`${index + 1}.- Libro: ${titulo} Autor: ${value}`)
                
            });

        })

}

getLibro('el capital');

// 3.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//         http://openlibrary.org/search.json?author=asimov





// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse


function getArtista (artista) {

    const url = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

    let consulta = request(url, (err, resp, body) => {

        let bodyJason = JSON.parse(body)
        let infoArtist = bodyJason.artists[0]

        console.log(infoArtist.strArtist)



    })

}


getArtista('metallica')





// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     sus películas.
//                     https://swapi.co/
// 6.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//                     https://api.nasa.gov/
// 7.- Traer los primeros 151 pokemon de la primera generacion y 
//     devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
//     y peso.
//                       https://pokeapi.co/