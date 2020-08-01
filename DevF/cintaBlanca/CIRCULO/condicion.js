
function parimar(){

    let numero1 = prompt('¿Dame un numero para saber si es numero imparo o par?');

            if (Number(numero1) % 2 === 0) {  // recomendacion con 3 iguales
                console.log('Tu numero: ' + numero1 + ' es par');
            } else if (Number(numero1) % 2 === 1){
                console.log('Tu numero: ' + numero1 + ' es impar'); 
                }
                else  
                console.log('Error al ingresar los numeros');
            };

// parimar();


/// Operadores Logicos /// 

function edad(){

let preguntaEdad = prompt('¿Cúal es tu edad?');
var edad = Number(preguntaEdad);

            if (edad >= 18 && edad <= 80){
            console.log('Puedes conducir')
            }
            else if (edad === 17 || edad === 16){
            console.log('Puedes sacar permiso para conducir')
            }
            else if (edad < 16 || edad > 80){
                console.log('No tienes edad para conducir')
            }
            else{
                console.error('Ingresaste mal la edad')
            }
}

// edad(); 

// Reto Final //
//hacer el juego de piedra papel o tirejas xD//
// son dos jugadores y mostrar en la consola

function chinchanpu(){

    let jg1 = prompt('Jugador uno: ¿Cúal es tu nombre?').toUpperCase();
    let jg2 = prompt('Jugador dos: ¿Cúal es tu nombre?').toUpperCase();

            play1 = prompt( jg1 + ': Elije tu opcion: Piedra, Papel o Tijeras').trim().toUpperCase();  // trim elimina espacios en blanco al principio y al final
            play2 = prompt( jg2 + ': Elije tu opcion: Piedra, Papel o Tijeras').trim().toUpperCase(); // toUpperCase cambia el texto a mayusculas

            play1 = play1.replace(/ /g, "");  // elimina espacios en blanco dentro de las palabras Hola Mundo = holamundo
            play2 = play2.replace(/ /g, "");

        //PAPEL 
    if (play1 === 'PAPEL' && play2 === 'PIEDRA'){
        console.log('Papel vence a Piedra, Gana: ' + jg1 );
    }
    else if (play1 === 'PAPEL' && play2 === 'TIJERAS'){
        console.log('Tijeras vence a Papel, Gana: ' + jg2);
    }
    else if (play1 === 'PAPEL' && play2 === 'PAPEL'){
        console.log('los dos eligieron PAPEL, es un empate');
    }  // CAMBIA A PIEDRA
    if (play1 === 'PIEDRA' && play2 === 'PAPEL'){
        console.log('Papel vence a Piedra, Gana: ' + jg2 );
    }
    else if (play1 === 'PIEDRA' && play2 === 'TIJERAS'){
        console.log('Piedra vence a Tijeras, Gana: ' + jg1);
    }
    else if (play1 === 'PIEDRA' && play2 === 'PIEDRA'){
        console.log('los dos eligieron PIEDRA, es un empate');
    } // CAMBIA A TIJERAS
    if (play1 === 'TIJERAS' && play2 === 'PAPEL'){
        console.log('Tijeras vence a Papel, Gana: ' + jg1 );
    }
    else if (play1 === 'TIJERAS' && play2 === 'PIEDRA'){
        console.log('Piedra vence a Tijeras, Gana: ' + jg2);
    }
    else if (play1 === 'TIJERAS' && play2 === 'TIJERAS'){
        console.log('los dos eligieron TIJERAS, es un empate');
    } // FALLAS DE ORTOGRAFIA
    else if (play1 != 'PAPEL' && play1 != 'PIEDRA' && play1 != 'TIJERAS'){
        console.log('Parce que hay un error, ' + jg1 + ' por favor elige: PIEDRA, PAPEL O TIJERAS')
    }
    else if (play2 != 'PAPEL' && play2 != 'PIEDRA' && play2 != 'TIJERAS'){
        console.log('Parce que hay un error, ' + jg2 + ' por favor elige: PIEDRA, PAPEL O TIJERAS')
    }
    
}

chinchanpu();