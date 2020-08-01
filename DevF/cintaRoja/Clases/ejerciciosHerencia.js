
// 1. Hacer superclase Maestro y subclases Maestro de Física y
//    Maestro de Música y a cada uno asignarle su materia y
//    calcular su promedio de grupo a partir de calificaciones
//    (puedes usar arreglos). El maestro de física tiene un
//    atributo "antiguedad" que guarda un valor numerico,
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.
// ------------------------------------------------------------

// se creaa la clase y el constructor tendra los elementos llamados parametros, del objeto. 
class Maestro{
    constructor(materia, nombre, ratings){
        this.materia = materia;
        this.nombre = nombre;
        this.ratings = ratings;
        this.promedio = this.promedio();

    };
// se pueden añadir las funciones que queramos y las podemos agreagar como si fuera un parametro
// si hacemos eso, no podemos llamar la funcion, si no que pertenece de alguna forma a los parametros
//del objeto
    promedio(){

        let suma = 0; 
        let calificaciones = 0; 

        for (let i = 0; i < this.ratings.length; i++){
            suma += this.ratings[i];
        }
        console.log(this.ratings)
        calificaciones = suma/this.ratings.length;
        return calificaciones;
    };

    }

// CLASE HIJA
// creamos la plantilla de las misma forma, pero le agregamos la palabra reservada extends
// agregamos en el constructor todos los elementos que tendra la clase 
// y con super agregamos los elmentos de la clase padre. 
// en los this. solo agregamos los elementos nuevos. 

class MaestroFisica extends Maestro{
    constructor (materia, nombre, ratings, intanio){
        super(materia, nombre, ratings);
        this.intanio = intanio;
        this.antiguedad = this.antiguedad();
    };
// las clases hijas pueden tener sus propias funciones, y heredan las del padre. 

    antiguedad(){

       let anioActal = new Date();
       let aniguedad = anioActal.getFullYear() - this.intanio
       return aniguedad + ' Años'
    }
}


// let maestro1 = new Maestro('español', 'Juan', 2008, [9,5,8,7,6]);
// console.log(maestro1)

// // console.log(maestro1.promedio());
// let maestro2 = new MaestroFisica('Fisica', 'Carlos', [7,9,8,10,5,3], 2008)
// console.log(maestro2)
// maestro1.antiguedad;


//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.


class MaestroMusica extends Maestro{
    constructor (materia, nombre, ratings, intanio, edad){
        super(materia, nombre, ratings);
            this. intanio = intanio;
            this.edad = edad;
            this.aniguedad = this.antiguedad();
            
        }
        antiguedad(){

            let anioActal = new Date();
            let aniguedad = anioActal.getFullYear() - this.intanio
            return aniguedad + ' Años'
         }
    }


// let masitroMusica = new MaestroMusica('Musica', 'Carlos', [10,10,5,7,9], 1995, 35)
// console.log(masitroMusica);

// console.log(masitroMusica.aniguedad)
// ------------------------------------------------------------
// 2.- Crea una superclase llamada Electrodoméstico con las
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y pesoMax (peso máximo)
//     b. El constructor solo debe pedir precio, color
//        y pesoMax.
//     c. consumoEnergetico debe iniciar con valor de 100
// ------------------------------------------------------------

class Electrodomestico{
    constructor(precio, color, consumoElectrico, pesoMax){
            this.color = color;
            this.consumoElectrico = 100;
            this.pesoMax = pesoMax;
            this.precio = precio;
    }
}  


// let horno = new Electrodomestico(1000, 'rojo', undefined, 20)
// console.log(horno)





// ------------------------------------------------------------
// 3.- Crea una subclase de Electrodomestico llamada Lavadora
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.
// ------------------------------------------------------------


class Lavadora extends Electrodomestico{
    constructor(precio, color, consumoElectrico, pesoMax, carga){
        super(precio, color, consumoElectrico, pesoMax, carga)
            this.carga = carga;
            this.precio = this.preciofinal();
            
    };

    preciofinal(){
        let ultimoprecio = this.consumoElectrico * this.carga
        return ultimoprecio
    }


} 


let lavadoraMabe = new Lavadora(1, 'amarillo', 75, 100, 35)
console.log(lavadoraMabe)



// ------------------------------------------------------------
// 4.- Crear una clase Bebida que herede a dos clases Cerveza
//     y Refresco. Ambas clases deben tener la propiedad
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo
//     porcentajeAlcohol. Crear los getters y setters
//     correspondientes.
// ------------------------------------------------------------


class Bebida{
    constructor(cantidad){
       this.cantidad = cantidad
    }// Muesta el valor de las variables
    getCantidad (){
        console.log(this.cantidad);
    } //permite el cambio de las variables por parte del usuario 
    setCantidad (nuevaCantidad){
        this.cantidad = nuevaCantidad
    }

}

class Refresco extends Bebida{
    constructor(cantidad, azucar){
        super(cantidad)
        this.azucar = azucar
    }
    getAzucar(){
        return this.azucar
    }
    setAzucar(newAzucar){
        return this.azucar = newAzucar
    }
}

class Cerveza extends Bebida{
    constructor(cantidad, alcohol){
        super(cantidad)
        this.alcohol = alcohol
    }
    getAlcohol(){
        return this.alcohol
    }
    setAlcohol(newPorcent){
        return this.alcohol = newPorcent
    }
}


// let cocacola = new Refresco(120, 35);
// console.log(cocacola);


let victoria = new Cerveza(1000, 112);
victoria.setAlcohol(1500)
console.log(victoria);





