

//arreglos
// Crea una coleecion de datos y se determina de la siguiente forma 
// [{},{},{},{}]


// undefined = valor no definido
// null = nada 
// NaN = no es un numero 

var colores = ["azul", "morado", "verde", "rosa"]
var consolas = ["ps5", "xbox", "switch", "gameboy", 4]

// para acceder a los datos usamos index. la numeracion va desde el 0

console.log(colores[2]);
console.log(typeof(consolas[4]));
console.log(consolas[2]);


//agrendo elementos a un arreglo, el nuevo elemento se suma al final del arreglo


colores.push("blanco"); 
console.log(colores);

//elimiar el ultimo elemento

colores.pop(); // por defaul te elimina el ultimo elemento


// elimiar un elemento deseado Sintaxis; [2 elimina ese elemento del arreglo, 1 te borra el numero de elementos apartir del fijado

colores = console.log(colores);


consolas.splice(0,2);

console.log(consolas)

// splice (desde que numero del arreglo comienza, que que numero del arreglo seguiria. )


var colores = ["azul", "morado", "verde", "rosa"]
           //   0          1        2       3     
colores.splice(1,1); //aqui quito el morado 
colores.push("Negro"); // empujo el negro
console.log(colores); // me muestra el nuevo arreglo


/// calculadora 

// CON Number convertimos una string en numero 

var miNumero1 = prompt('¿Cual es el primer nuemero que quieres sumar');
var miNumero2 = prompt('¿Cual es el segundo Numero que quieres sumar?');

var sumaS = Number(miNumero1) + Number(miNumero2);

console.log('La suma de tus dos numeros es: ' + sumaS)