// con un String llamado S de N de largo index de 0 to N - 1 imprimir
// Separar el string en espacios, por cada nuevo string imprimir index pares y index nones



// console.log(s[0])


//Funciones flecha, se declaram con const, se crea el nombre de la consto, se pone el igual, se pone los datos que puede aceptar la funcion, y se usa la flecha seguido
// las flechas

// const toarray = (string) =>{
    
//     let array = []

//     for(let i = 0; i < string.length; i++){
//         array.push(s[i])
        
//     };
//     return array
// };

// let sArray = toarray(s)

// console.log(sArray)

// let oddEven = (array) =>{
    
//     this.array = array
//     odd ="";
//     even ="";

//       for(let j = 0; j < array.length; j++){
//         if( j % 2 === 0){
//             odd = odd + array(j);
//         }else{
//             even = even + array(j);
//         }
//     }
//     console.log(odd + ' ' + even)

// }

// oddEven(sArray)

   // let odd = modelo.filter((value, index) => {index % 2 === 0) 
    // let even = modelo.filter((value, index) => index % 2 !== 0)

let test = '2  hacker ranck'



function dia6(input) {

    array = test.substring(0,test.length).valueOf

    let odd = array.filter((value, index) => index % 2 === 0).join('')

    let even = array.filter((value, index) => index % 2 !== 0).join('')

    

    console.log(`${odd} ${even}`)

    console.log(array)
   

    
}

 dia6(test)

let word = test.substring(0,test.length)
console.log(word)
