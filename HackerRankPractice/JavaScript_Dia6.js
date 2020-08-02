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
 
console.log(prueba)