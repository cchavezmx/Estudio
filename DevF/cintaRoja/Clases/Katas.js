
/// palindromo  /// falta limpiar cuando tenga acentos y signos de puntuacion 
/// funcion palindromo KATA 5  DEVF.com


let array1 = 'Amad a la dama';

function palindromo (string) {
    
    let stringUpper = string.toUpperCase() // lo pasasmos a mayusculas
    let array1 = stringUpper.split('') // creamos un arreglo de el string

    let nuevoArray = [] // declaramos un array vacio
    let valor = '' // declaramos el valor

    for(let i = 0; i < array1.length; i++ ){ // creamos un for para ir itereando en cada uno de los elementos
        if(array1[i] !== ' '){ // si encuentra un valor que no sea un espacio vacio, lo en pujamos al arreglo vacio
            valor = array1[i]
            nuevoArray.push(valor) // aqui empujamos el valor dentro de un arreglo
        }
    }

    let a = nuevoArray.join('')  // tomamos el nuevo arreglo y lo convertimos en un string
    let b = nuevoArray.reverse().join('')  // de damos reverse al array y lo convertimos en un string

    if(a === b){ 
       return true  // comparamos mediante un if, si los dos strings son iguales
    }else return false


};

// console.log(palindromo('Sopa de murcielago'))



function challenge(string) {

    let arreglo = string.split(' ');
     

    console.log(string.split('\n').slice(1))
    console.log(arreglo.slice(0,1))
    console.log(arreglo.slice(1))

}

challenge('perro loco')


