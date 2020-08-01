
// Crear una clase Cine que tenga 3 atributos y el método reproducir como mínimo.
// El método reproducir puede diferenciar entre un objeto tipo Película o un objeto tipo Documental.
// Crear una clase Largometraje (elige atributos y métodos que sean apropiados)
// Crea las subclases Pelicula y Documental que extiendan de Largometraje.
// Añade los atributos y métodos adicionales que sean necesarios.
// *Cada clase debe estar en un archivo por separado.
// *Investiga como exportar clases de un archivo para importarlas en otro y poder usarlas.
// Crea instancias de Película, Documental y Cine como mínimo. (editado) 



class Cine{
    constructor(nombre, ubicacion, salas){
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.noSalas = salas;
        
    };
    reproducir(Largometraje){
        console.log('Playing ' + Largometraje.titulo);

    };
    getNombre(){
        return this.nombre 
    }
}


// IMPORTAR MODULOS SELECCIONADOS 

module.exports = {
    Cine
}