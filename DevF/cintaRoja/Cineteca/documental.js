const {Largometraje} = require("./largometraje");
// con esta linea tramos la clase del archivo de largometraje. 


class Documental extends Largometraje{
    constructor(titulo, director, duracion, genero, vozoff){
        super(titulo, director, duracion, genero)
        this.vozoff = vozoff;
    }
}

module.exports = {
    Documental
}