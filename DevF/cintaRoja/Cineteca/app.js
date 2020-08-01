// vincular con otro archivo de js
const {Cine} = require("./cine");
const {Largometraje} = require("./largometraje");
const {Pelicula} = require("./pelicula");
const {Documental} =  require("./documental");
const largometraje = require("./largometraje");



//. creamos los objetos
let cinepolis = new Cine('Cinepolis Diana', 'Centro CDMX', 12);

let avengers = new Pelicula('Avengers La era de Ultron', 'Los hermanos Russo', 120, 'ficcion', ['Robert Downy Jr', 'Scarlet Johanson'], 9);

let streetFood = new Documental('Street Food', 'Varios', 34, 'Vida Cotidiana', 'Varios');



console.log(cinepolis.nombre)


// USAMOS LA FUNCION DE REPRODUCIR DEL LA CLASE CINE PARA HACER ESTO. this.titulo

cinepolis.reproducir(avengers)

cinepolis.reproducir(streetFood)