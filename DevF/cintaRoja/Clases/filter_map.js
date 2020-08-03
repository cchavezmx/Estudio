



//Multiplicar x 5 cada uno de los elementos del siguiente arreglo -> [10, 4, 3, 2, 6, 8]

let multis = [10,4,3,2,6,8]

let totalMulti = multis.map(item => item * 5)

// console.log(`Resultado de Multiplicar x5 cada uno de los elementos  ===> ${totalMulti}`)



//Multiplicar entre sí los elementos del siguiente arreglo -> [6, 5, 4]

let arregloMulti = [6,5,4]

function multitud (total, value) {
    return total * value
}

let multitotal =  arregloMulti.reduce(multitud)

console.log(`Multiplicado el total de los elementos  =====> ${multitotal}`)
console.log(multitotal)


//-----------------------------------------//
//              METODO REDUCE              //
//-----------------------------------------//

// Sytax => array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

numerosPrueba = [5,10,50]

let pruebaReduce = numerosPrueba.reduce((total, currentValue, currentIndex, arr) => `${currentValue}`)

let xd = arregloMulti.reduce((valor) => valor)


console.log('Prueba rediuce ' + xd)



//Del arreglo siguiente, elegir los elementos que sean mayores que 5 -> [12, 2, 1, 5, 8]


let arraglo2  = [12,2,1,5,8]

let filtro = arraglo2.filter(item => item > 5)

console.log(filtro)



//A partir de arreglo ['Ana', 'Diego', 'Julio'] crear el siguiente -> ['1. Ana ', '2. Diego', '3. Julio']

let nombres = ['Ana', 'Diego', 'Julio']

let nombresNumero = nombres.map((item, index)=> (`${index + 1}.- ${item}`))

console.log(nombresNumero)

//Sumar todos los elementos del siguiente arreglo -> [1,10, 2, 20, 3, 30]
// REDUCE -> Subtract the numbers in the array, starting from the beginning:

let numeros = [1,10,2,20,3,30]

let numeros1 = numeros.reduce(sumaArray)

// CREAMOS UNA FUNCION QUE TOME COMO CALLBACK EL VALOR TOTAL EXTRAIDO
function sumaArray(total, value, index, array) {
    return total + value
}

console.log(numeros1)

//A partir del arreglo filtrar sólo los que sean mayores a 18;
//[{nombre: 'Karla', edad: 20}, 
    //{nombre: 'Sonia', edad: 14}, 
    //{nombre: 'Jesús', edad: 15},
    // {nombre: 'Miguel', edad: 24},
    // {nombre: 'Luis', edad: 12}]



    let listaPersonas = [

    {nombre: 'Karla', edad: 20},
    {nombre: 'Sonia', edad: 14}, 
    {nombre: 'Jesús', edad: 15},
    {nombre: 'Miguel', edad: 24},
    {nombre: 'Luis', edad: 12}

    ]

    let filtroMayorA18 = listaPersonas.filter(item => item.edad < 18)

    console.log(filtroMayorA18)