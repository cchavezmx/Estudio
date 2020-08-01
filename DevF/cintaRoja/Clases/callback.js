
// 3.- Crear una función de orden superior que reciba como 
// argumentos dos números y un callback. Según el callback
// que se pase a la función, se devuelve la suma de los
// dos números, la resta de los dos números o la
// multiplicación de los dos números.

let funcionSuper = (num1, num2 , callback) => (callback(num1, num2))
console.log( funcionSuper (4, 3, (num1, num2 ) => num1 + num2) );


// 4.- Escribe una función de orden superior que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELARTO


let UperCase = (string, callback) => (callback(string));
console.log( UperCase ('carlos', (string) => string.toUpperCase()))


// 5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
//     EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades{}
//     mayores a dos horas (hacer la comparación en horas) 
//     mediante un callback.

// const mayor = (array) => {

//     for (let i = 0; i < array.length; i++){
//         if(array[i] > 120){
//         console.log(array[i])
//         }
//     }
    
    
// }


let Tiempos = (array, callback) => {
    callback(array)
    
};

Tiempos([200, 45, 130, 40, 120], (array) => array.forEach(item => {
    return item > 120
        ? console.log(item)
        : 'Esta vacio'  
}));



//
//
//Callbacks Y setTimeout
//
//
//



let getUsers = (callback, exito) => {
    users = [
        {usario: 'Carlos', nacionalidad: 'Meixcana'},
        {usario: 'Saul', nacionalidad: 'Meixcana'},
        {usario: 'Abril', nacionalidad: 'Meixcana'},
        {usario: 'Dalia', nacionalidad: 'Meixcana'},

    ];
    setTimeout(() =>{
        if(exito) {
            callback(users, 'code 200')
        }else{
            callback('ERROR', 'code 400')
        }
    }, 5000)

};


// getUsers( (respuesta, status) => console.log(respuesta , status), true)



/////
//  array.forEach
//  array.map (crea arreglos)
//


// let array = [4, 3, 2, 1, 2]
// let arrgloConcatenado = array.map((valor, index, array) => {return valor + '-' + index});
// let arrgloConcatenado2 = array.map((valor, index, array) => valor + '-' + index);
// console.log(arrgloConcatenado2)


/// palindromo 
let array1 = 'anita lava la tina';

let palindromo = (string) => {
    
    // let palindrom = array.reverse()
    let sopa = string.split()
    return console.log(sopa);

}





console.log(palindromo(array1));



