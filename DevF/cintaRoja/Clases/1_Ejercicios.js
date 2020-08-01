// / 1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia
// https://en.wikipedia.org/wiki/List_of_fictional_penguins
//     Crea un objeto llamado myPenguin con propiedades que representen
//     la información listada en cada columna en esa página de wikipedia
//     (por ejemplo: character, origin...)


let myPenguin = {

    character : 'Whiteblack',
    origin : 'Whiteblack the Penguin Sees the World',
    author : 'H. A. Rey and Margret Rey',
    notes : "Children's book about a travelling penguin"

}


// 2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
//     de bienvenida. La salida debe ser algo como:
//     "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"

//  concatenear con comillas españolas 

console.log(`Hola, soy un pingüino y mi nombre es:  ${myPenguin.character}`)

// 3.- Escribe otra línea de código que añada una nueva propiedad a tu
//     pingüino llamada puedeVolar y asignalo a falso.
//     Nota: No modifiques el código original donde definiste a tu pingüino



myPenguin.puedeVolar = false;
console.log(myPenguin)


// 4.- Añade un método a tu pingüino llamado 'graznar' que muestre en
//     consola: "kaww kaww!!"
//     Nota: Sí, así suenan los pingüinos
//     Nota de la Nota: No modifiques el código previo. Hazlo en una
//     nueva línea de código.


// declarar metodo con flechita

myPenguin.graznar = () =>{
    console.log("kaww kaww!!");
}

// declarar metodo con function 




myPenguin.graznar();




// -----------------------------------------------------------------------
// 5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
//     consola el mismo mensaje que escribimos para la bienvenida.
//     Esta vez, emplea la palabra reservada "this" para resolverlo.
// -----------------------------------------------------------------------

myPenguin.saludar = function (){
    console.log('Hola, soy un pingüino y mi nombre es: ', this.character)
        
}

myPenguin.saludar();


// -----------------------------------------------------------------------
// 6.- Sin modificar el código previo, cambia el nombre del pingüino a
//     "Señor Pingu" y llama al método "saludar" para verificar que
//     se ha aplicado el cambio correctamente.
// -----------------------------------------------------------------------



myPenguin.character = "Señor Pingu" 

console.log(myPenguin.character)



// -----------------------------------------------------------------------
// 7.- Escribe otro método llamado 'volar'. Con este método imprime en
//     consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true'
//     en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
//     "No puedo volar :("
// -----------------------------------------------------------------------


myPenguin.volar = true;


myPenguin.sivolar = () =>{

    if (this.puedeVolar){
        return console.log('Puedo Volar')
    }else if (!this.puedeVolar){
        return console.log('No puedo Volar')
    }

}

myPenguin.sivolar();




// -----------------------------------------------------------------------
// 8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a
//     llamar el método 'volar' para verificar que el cambio se efectuó
//     correctamente.
// -----------------------------------------------------------------------


myPenguin.puedeVolar = true;
myPenguin.sivolar();



// -------------------------------------------------------------
// 9.- Crea un objeto que contenga información de una receta
//     para preparar Mole. Debe contener las propiedades de
//     título (string), porciones (numero) e ingredientes (un
//     arreglo de strings). Muestra la información de la receta
//     para que luzca así:
   
//     Mole
//     Porciones: 2
//     Ingredientes:
//     canela
//     comino
//     cocoa
// -------------------------------------------------------------


let mole = {

    titulo : 'Mole',
    porciones : 2,
    
    ingredientes : ['canela', 'comino', 'cocoa']

}



    console.log(mole.titulo)
    console.log('Porciones: ' + mole.porciones)
    
    for(let i = 0; i < mole.ingredientes.length; i++){
        console.log(mole.ingredientes[i]);
    }



// -------------------------------------------------------------
// 10.- Crea un arreglo de objetos, donde cada objeto describa
//     un libro y tenga las propiedades para titulo(string),
//     autor(string) y leido(booleano para indicar si se ha
//     leido o no). Itera sobre el arreglo de libros, y por
//     cada libro imprime el titulo y autor, junto con su
//     status de lectura (si ya ha sido leído, o no).
// ----

    let libreria = [

{
            autor : 'JASON',
            libro : 'LOW MOON',
            leido : true
},
{
            autor : 'JASON FABIEN VEHLMANN',
            libro : 'LA ISLA DE LOS CIEN MIL MUERTOS',
            leido : true
},

{
            autor : 'JASON',
            libro : 'ESPERA...',
            leido : true
},
{
            autor : 'JUAN GOMEZ-JURADO',
            libro : 'REY BLANCO',
            leido : false
}

    ];


for (let i = 0; i < libreria.length; i++){
    if(libreria[i].leido) {
        console.log(`Ya has leido ${libreria[i].libro} de ${libreria[i].autor}`)
    }else {
        console.log(`No has leido ${libreria[i].libro} de ${libreria[i].autor}`)
    }
}



// IDEAL MENTE EL NOMBRE DE LA CASE VA EN SINGULAR Y PRIMERA LETRA EN MAYUSCULA

let autoRojo = {
    color : 'rojo',
    velocidad : '100',
    ruedas : 4,
    motor : 'V6',
    arranca(){
        console.log('Rurururururun');
    },
    frena(){
        console.log('iiiiiiiiiiiiiiii')
    }
}

// CREACION DE UNA CLASE (QUE ES COMO UNA PLANTILLA)

class Coche {
    // constructor es necesario
    // Sirve para crear o inicializar las propiedad de la plantilla
    constructor(color, velocidad, ruedas, motor){
        this.color = color;
        this.velocidad = velocidad;
        this.ruedas = ruedas;
        this.motor = motor;
    };
    arranca(){
        console.log(`El motor ${this.motor} esta encendido`);
    };
    pintar(color){
        this.color = color
    };
    llantaRepuesto(ruedas){
        // el += suma las llantas que tenia con las que se van a agreagar. 
        this.ruedas += ruedas;
    };

}

// INSTANACIAR UNA CLASE: CREAR UN OBJETO CON UNA CLASE 


let coche2 = new Coche('Morado', 300, 16, 'grande');


// console.log(coche1, coche2);
// console.log(coche2.arranca())
// console.log(coche1.arranca())
let coche1 = new Coche('Amarillo', 200, 4, 'v8');
coche1.pintar('Amarillo Pollito')
console.log(coche1.color)
coche1.llantaRepuesto(5)
console.log(coche1.ruedas)