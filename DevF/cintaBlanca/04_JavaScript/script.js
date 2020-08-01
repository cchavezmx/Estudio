// alert("Hola mundo") solo para probar que funciona nuestro script

var numero = 10; // tipo de dato numero
var string =  'Soy un cacahuate'; // tipo de dato: cadena de texto
var array = [12, 25, "carlos", "Abril"]; // tipo de dato: arreglo

// tipo de dato: objeto o diccionarion 
var object = {                                
    nombre: "carlos",
    edad: "35",
    profesion: "Sysadmin",
}


var boolean = true; // hacer la validacion de True y False


// uso de variables 

console.log(numero)
console.log(object)
console.log(object.profesion)
numero = 10;
console.log(numero);

// string

quiensoy = "Hola, mi nombre es " + object.nombre + ' tengo la edad de ' + object.edad + '  y  mi profesion es ' + object.profesion

console.log(quiensoy);


// operaciones aritmeticas con todos los operadores aritmeticos conocidos
// pero uno de los importantes es modulo que lo usamos con el signo % el modulo es el residuo de una division 


numero1 = 1202;
numero2 = 220;

suma = numero1+numero2
console.log(suma);

//modulo te regresa el valor del residuo 

modulos = 2%750
console.log(modulos)

//reto!!!!!
/// imprimir en cosola atravez de variables, nombre, edad, mumero telefonico 


var cv = {
    nombre: "Carlos Chavez Rosario",
    edad: "30 años",
    telefono: "5524097656",
}

console.log("Mi nombre es: " + cv.nombre);
console.log("Tengo la edad de: " + cv.edad);
console.log("Mi numero telefonico es: " + cv.telefono);
quiensoy = "Hola, mi nombre es " + cv.nombre + ' ,tengo la edad de ' + cv.edad + '  y  mi numero telefonico es: ' + cv.telefono;
console.log(quiensoy);

// operacion con tipo de datos 

var err1 = "4";
var err2 = "15";

var suma = err1 + err2;

console.log(typeof(err1));


// con Number cambiamos el tipo el string de antes y lo cambia a numero para poder hacer operaciones. 

suma = Number(err1) + Number(err2);

console.log(suma);



// preguntas al usuario

var UserName = prompt("¿Como te llamas?");

var Animo   = prompt("¿Como estas?");

var pizza = prompt("¿La pizza con o sin piña?");

console.log(UserName)
console.log(Animo)
console.log(pizza)







