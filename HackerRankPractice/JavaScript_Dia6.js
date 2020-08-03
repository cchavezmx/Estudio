// con un String llamado S de N de largo index de 0 to N - 1 imprimir
// Separar el string en espacios, por cada nuevo string imprimir index pares y index nones
// SIN CONTAR EL NUMERO DE INCIO DEL STRING


let input = '2  hacker ranck'

function buldierWord(string) {   // CREAMOS UNA FUNCION QUE VA A TOMAR CADA UNO DE LOS ELEMENTOS DEL ARREGLO, EL CUAL LO SEPARA POR ELEMENTOS PARA PODER SABER SI SON PARES O NONES

    let array =string.split('')   // SEPARA EL ITEM
    
    let odd = array.filter((value, index) => index % 2 === 0).join('') // SELECIONA LOS PARES
    let even = array.filter((value, index) => index % 2 !== 0).join('') // SELECIONA LOS IMPARES
    return console.log((`${odd} ${even}`)) // CONCATENA Y RETORNA 
    
}
let prueba = input.split(' ').slice(1)   //TOMAMOS EL STRING Y LO TRANSFORMAMOS EN UN ARREGLO, COMENZAMOS DESDE EL INDEX 1 DEL STRING PARA SALTAR EL NUMERO DE LA CABEZERA DEL STRING
//EN EL SITIO USA \n para separar los espacios. 
let word = prueba.forEach((value) => {buldierWord(value)}) // CREAMOS LA VARIABLE QUE CONTENDRA EL RESULTADO DESEADO, CON UN FOREACH DE CADA UNO DE LOS ELEMENTOS LE APLICAREMOS LA FUNCION QUE SEPARARA LAS LETRAS
 
// console.log(prueba)



let paises = ["México", "Panamá", "Guatemala", "El Salvador"]

function numeros(string){return Number(string.length)}  // crea los numeros 

function longestCountry(array){

    let test2 = new Array(1).fill(array.map(value => numeros(value))) // se crea un arreglo con esos numeros
    let compara = test2[0].sort((a,b) => b - a) // acomodamos del mayor al menor
    let final = array.filter(value => value.length === compara[0]) // obtenemos el nombre. 

    return final.join('') // pasamos el arreglo a un string 

}

console.log(longestCountry(paises))
