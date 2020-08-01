
// estructura de funcion, los fijate!!!

function suma(x, y){
    lasuma = x + y
    console.log(lasuma)
}

//suma(20, 15)

const otrasuma = (x, y) => {
    return x + y 
}

// console.log(otrasuma(10, otrasuma(15, 10)))
// -> 35

// No imaginemos que el valor delas varibales se almacenan en cajas, si no que los sostenemos en muchos tentanculos
// y que podemos acceder a los objetos mietras aun las tengamos en estos tentaculos (referencia)
// Recuerda que cada objeto en los tentaculos puede cambiar de valor, asi de esta forma si queremos recordar algun valor
// extendemos ese tentaculo y volvemos a recoradar el valor. 

// Para recordar el dinero que nos debe Luis podemos hacer lo siguiente: 


// let deudaLuis = 140;
// deudaLuis = deudaLuis - 40;
// console.log(deudaLuis);
// -> 100

// si alguno de los tentaculos no tiene un valor almacenado y queremos atraer a nosotros su valor, este simplemente regresara el valor de UNDEFINED (indefinido)
// un solo let, puede contener mas de dos declaraciones de variable


// let one = 1, two = 2;
// console.log(one + two);
// -> 3

//unicamente seperamos los valores con comas. 
// podemos declara nuestras variables con var, let o const, 
// let despues de js 2015
// var antes de js 2015
// const declara una cosntante que no cambiara su valor mientras el programa viva. 

//Las variables las podemos nombrar como queramos, pero siguiendo las siguientes reglas: 

// 1. - no podemos empezar con numeros
// 3. - podemos usar solamente el signo de dolaras ($) o guion bajo (_), pero no los demas caracteres especiales
// 4.- acontiniacion se listan las palabras que estan reservadas para el sistema y de los cuales no podemos hacer uso. 


// break case catch class const continue debugger default
// delete do else enum export extends false finally for
// function if implements import interface in instanceof let
// new package private protected public return static super
// switch this throw true try typeof var void while with yield

//Valores

// Math.max toma cualquier cantidad de argumentos numéricos y devuelve el mayor.

//console.log(Math.max(1002,4));
// -> 4

// cuando una funcion modifica el valor de una variable, este resultado puede ser usada para hacer una funcion mas compleja


//console.log(Math.max(2, 100) + 100);
// -> 200


//====FLUJO DE PROGRAMA=====//
//La ejecucion del programa es de arriba hacia abajo y de esta forma cotrolamos el flujo del programa. 

// let theNumber = Number(prompt('Escoge un numero'));  // con Number cambiamos el contenido de promot en un numero y no una cadena de texto. 
// console.log('El cuadrado de tu numero es: ' + theNumber * theNumber);


//===EJECUCION CONDICIONAL====//

// No todos los programas tienen una estructura de linea RTCIceTransport, un programa puede crear en el camino otros caminos para llegar a la Meta

// Este es el caso de la funcion if

function ciclos1(){

let theNumber = Number(prompt('Dame un numero'));
if (!Number.isNaN(theNumber)){    // con !Number.isNaN verificamos que el valor si sea un numero Operador Boolean (verdadero o falso)
     console.log('El cuadrado de tu numero es: ' + theNumber * theNumber); // si se cumple el if ejectuamos el programa
}
else 
    console.warn('Tu valor no se puede multiplicar'); // no cumplorse se ejecuta esto

    // usamos una variante para llegar a la ejucion de nuestro programa. 
    // aqui otro ejemplo
}

// ciclos1()


function ciclos2(){

let theNumber = (Number(prompt('Dame un numero')));

if (theNumber < 10){
    console.log('Small');
}else if (theNumber < 100){
    console.log('Medium');
}else {
    console.log('Tu numero es muy grande.')
}

}

// ciclos2()


// While an loops
// 1.- declaramos el valor incial de la variable
// 2.- dentro de la expresion de la variable encontramos una estructura parecida a lo que hace if
//     hasta que el contenido de la expresion se cumpla la variable numero se seguira ejecutando


function numberWhile(){

    let theNumber = 0;
    while (theNumber <= 12){
        console.log(theNumber);
        theNumber = theNumber + 1;
    }
}

// numberWhile()

function whilepart2(){

    let result = 1, counter = 0;

    while (counter < 10) {
        result = result * 2;
        counter = counter + 1; //En este ejemplo el contador tambien comienza con 0 y suma 1 en cada ciclo hasta que se cumpla la expresion dentro de while 
    }
    console.log(result);
}

// whilepart2()

//Sigue el turno de do, do: es una estructura de control similar a while, la diferencia esta en que do, ejecuta un loop que terminara hasta que 
// su sentencia sea ejecutada

function doejemplo1(){
    let tunombre;

    do{
        tunombre =  prompt('¿Cómo te llamas?')
     } while (!tunombre) // el operador ! covierte el valor en boolean y espera a que se cumpla el contenido de while
     console.log(tunombre)
}

// de no encerrar este tipo de funcion en un ciclo do, al no ingresarse un nombre, la operacion se hara ciclica, hasta terminar con los recursos del equipo 


//====IDENTAR CODIGO====//

// La identancion del codigo es importante, apesar de que el explorador puede interpretar todo nuestro codigo sin espacion y sangraias, 
// para el humano es muy dificil de comprender, por eso por regla o nomar debes de identar tu codigo, tambien el comentarlo es necesario
// mas cuando se esta aprendeiendo, cuando uno es principiante, es aconsejable comentar todo, pero para un trabajo, es mejor no comnetar las 
// partes que son muy obvias para un programador experimentado. 



//======== CICLO FOR =======//

function ejemplofor(){

    let numero1 = 0

    if (!numero1){
    for(numero1 = 0; numero1 <= 20; numero1 = numero1 +1){
    console.log(numero1);}
    }else
    console.log(numero1 + 'Perrito');
}

// ejemplofor()

// El ciclo for se ejecuta hasta que se cumpla con la sentencia. 
// se comienza dando el valor incial a la variable, despues se pone cual es el valor que la variable debe llegar, y de que forma se debe llegar a la meta
// en el caso del ejemplo a la variable le sumamos 1 en cada ciclo


// Rompiendo un ciclo FOR



// arrow Fuction

const acuadrado = (x) => {
    return x * x 
}

console.log(acuadrado(4))


const  atriangulo = (x, y) => {
    x =  Number(prompt("¿Cual es la medida de la base del triangulo?"));
    y = Number(prompt("¿Cual es la medida de la altura de triangulo"));

    areat = (x*y) / 2 

    console.log("El area del Triangulo es: " + areat)
}

atriangulo()


const  arectangulo = (x, y) => {
    x =  Number(prompt("¿Cual es el ancho del rectangulo?"));
    y = Number(prompt("¿Cual es la altura del rectangulo"));

    arecta = x * y 

    console.log("El area del Cuadrado es: " + arecta)
}

arectangulo()