//Crea las subclases Pelicula y Documental que extiendan de Largometraje.
// Añade los atributos y métodos adicionales que sean necesarios.

const {Largometraje} = require("./largometraje");

class Pelicula extends Largometraje{
    constructor(titulo, director, duracion, genero, actores, raiting){
        super(titulo, director, duracion, genero)
            this.actores = actores;
            this.raiting = raiting;
    };
};

module.exports = {
    Pelicula
}