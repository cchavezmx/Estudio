
// Operadores de asignacion 

var nombre = 'Carlos';  // un = asginacion

var edad = 36;

edad = edad + 1;

edad -= 1
edad *= 2
edad /= 2

console.log(edad);


// Operadores de compracion 
// regresan un FALSE O TRUE


var numero = 5
console.log(numero);


numero == '5'  // tipo evita comparar datos con la doble igualdad siempre con triple

numero === '5' // con el triple igual compara el tipo de dato. 

5 !== '5' // con el signo de adminracion y la doble igualdad  compara no solo el contenido si no tambien el tipo de dato. 

// Operadores Unarios

typeof // regresa el tipo de dato
!true // negar un true aqui entra el type coertion


// operadores arimeticos, añadimos las operaciones matematicas normales, pero las excluyo de todo escrito

// como saber si un numero es par, el operador de numero nos regresa el residuo de una division
// al integrar la doble igualdad le decimos si el resultado es 0 nos devuelva si es verdadero o falso. 


10 % 2 == '0'
// true

10 % 2 === '0'
// false

// con triple igualdad nos conoce el tipo de dato, que la doble iguldad no hace, esto por el type coercion 
// con decremento (--)  e incremento (++) el orde de estos operadores es imporatante, si se situan del lado izquierdo ++ 1 lo incrementa a la primera vez que se ejecuta 
// y cuando se colocan a las izquierda 1 ++ se ejecutan a la segunda vez que se llama a esa variable 

numer1 = 20
20
++ numer1
21
numer1 = 20
20
numer1 ++ 
20
numer1  // aqui se llama por segunda ocacion.  util para los ciclos. 
21

//operadores ternarios : requiere de tres valores


let age = prompt('¿Que edad tienes?');  // input abre una caja de texto para que el usuario le asigne el valor a la variable

let isAdult = age >= 18
                ? 'Eres mayor de edad'  // si la expresion es verdadera
                : 'Aun eres un niño'    // si la expresion es falsa 

//alert(isAdult)

console.log(isAdult)

// operadores de corto cicuito. ||  Pipe evalua que si hay datos antes que el y nos regresa el segundo dato que hay 
// && doble apersen al reves, se queda con el valor falso

// var c = 15
// var d 
// let z = d && c
// z
// undefined
// let z = d || c
// z
// 15

 // toFixed redondea o convierte un numero a decimales. 
number = (90000202080)
90000202080
number.toFixed(2)
"90000202080.00"

// parseInt() recibe estring y 10
// parseFloat() si quieres convertir una cadena de texto a decimales

// Math

Math.floor(2.9) // redondea un valor siempre hasta abajo 
2

Math.ceil(2.1) // redondea un valor siembre hasta arriba
3

Math.round(2.5) // redondea segun su valor como en la escuela
3

Math.random() * 10 // crea un numero random con el 10 indica hsta que numero debe de llegar en este caso es menor a 10

// podemos combinar estas funciones. 


Math.ceil(Math.random() * 200 )
40
50
70
170

// con la funcion anterior estariamos creando una funcion que nos entrege un numero random sin decimales. 


/* 'Carlos ' . length // devuelve el numero de letras que tiene un texto 
5


' Carlos '.trim // elimina los espacio en blanco
'Carlos'

'Carlos' . toUpperCase // en mayusculas
'Carlos' . toLowerCase // en minisculas
 */

let answer = prompt('Cúal es la capital de la republica Mexicana?').trim().toUpperCase()

let message = answer === 'CIUDAD DE MEXICO'
                    ? '¡Correcto!'
                    : '¡Lo siento! esa no es la respuesta, vulve a intentar'

alert(message)


// Con replace remplazamos un texto dentro de una cadena de caracteres

'Hola Mundo' . replace ('Mundo', 'Carlos')
'Hola Carlos'


'Carlos'.split('r')  // sepera apartir de una letra
(2) ["Ca", "los"]

'Hola Carlos' . split(' ')   // separa un texto vacio
(2) ["Hola", "Carlos"] 
'Hola Carlos' . split(' ')[0]  // sepera y extraer la pimera parte de la cadena de texto
"Hola"
'Hola Carlos' . split(' ')[1]  // separa y extraer la segunda parte de la cadena de texto
"Carlos"


/// condicionales. 


let nombre1 = 'Carlos'
alert(nombre1)

if(4 === 4)console.log('Hola') // if en una sola linea

// if en un bloque defindiendo el bloque por el {}

if (8 === 8){
    console.log('Hola')
    console.log('Hola x2')
}


//Condiciones de bloque con Else. 

{
  let nombre2 = 'Gerardo' 

    if (nombre2 === 'Carlos')
        console.log('Mi nombre es ' + nombre2)
    else{
        console.log('¿Sabes donde esta Carlos?')
    }
}

console.log(nombre1)

// condicione con else if, el programa para cuando encuentra
// la condicion verdadera. 


{
  let numer1 = 500

  if(numer1 === 100){
    console.log('El numero es igual a 100')
  } 
  else if(numer1 < 200){
    console.log('El numero es menor a 200')
  }
  else if(numer1 > 90){
    console.log('el numero entonces es 100')
  }

}



// dos variales se deben de cumplir para cambiar de estado.

{

    let numero1 = 101
  
      if(numero1 > 100 && numero1 < 110){
        console.log('Las dos condiciones se complen')
      }
      else console.log('Tu numero es 100')
  
  
  }
  
  // condionales con o, si una se comple o la otra
  
  {
  
    let numero1 = 101
  
      if(numero1 > 100 || numero1 < 100){
        console.log('Alguna de las dos condiciones se cumple')
      }
      else console.log('Tu numero es 100')
  
  
  }


  // condiciones anidadadas, se imprimen todas las condiones verdaderas. no solo una como en el caso anterior. 

  
  if (2 > 3)
    console.log('Soy la primera condicion')
    if(10 > 100)
      console.log('Soy la segunda condicion')
    
  else (3 > 2)
    console.log('Yo soy un cacahuate')
  

// puedo crear mis propias funciones

{
  function suma(){
    
  let number1 = prompt('Dame un numero');
  let number2 = prompt('Dame otro numero para sumar');
  
  suma = Number(number1) + Number(number2)

  console.log('La suma de tus numeros es: ' + suma)
  
}
 suma();

}


// OBJETOS //

let persona = {

  nombre: 'Carlos',
  dirrecion: 'CDMX',
  telefono: '5524097656',
  edad: '36',
  musica: {
      metal: ['Pantera', 'Metallica'],
      pop: ['k-pop', 'Julieta Venegas'],
      trap: ['Banda MS', "Banda Limón"],
      hiphop: ['Nas', 'Charles Ans', 'Aleman'],
  },
  
  Peliculas: {
    terror: {
        thriller : 'Terror',
        toy :  ['Chuky'],
        },

    accion: {
      dispados: ['Duro de matar', 'MI', 'Los indestructibles'],
      carreras: ['Rapido y Furioso', 'Rapido y Fogoso'],
      },
    }

   }

console.log(persona.nombre)
console.log(persona.Peliculas.accion.carreras[1])
persona.Peliculas.accion.carreras.push('Jhon Wike')
console.log(persona.Peliculas.accion.carreras)
persona.Peliculas.terror.toy.push('Los otros')
console.log(persona.Peliculas.terror.toy)