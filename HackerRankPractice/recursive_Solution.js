//--------------------------------------------------//
//   Recursive Solutions   vs Interative Solution  //
//--------------------------//+ Es de importancia el que cada resultado sea a travez de un return 

function factorialSum(num) {
    
    if(num <= 0) {
    return 0 
    } else {
    return num + factorialSum(num  - 1)
    }}

   console.log('Recursive Sum ' + factorialSum(20))
    
// 5-1 = 4     3-1 = 2
// 4-1 = 3     2-1 = 1 
// 3-1 = 2     1-1 = 0 
// 2-1 = 1
// 1-1 = 0


function InterativSum (num) {
   
    let init = 0
    let acc = []

        for(init; init <= num-1; init++){
              acc.push(init + 1)
         }
         // la funcion reduce necesita un arreglo. 
         return acc.reduce((acc, value) => acc * value)  
 
}

console.log('Interativ Sum ' + InterativSum(5))



// Solución iterativa vs. Solución recursiva Para cada solución recursiva, existe una solución iterativa igual. En ese sentido, la recursividad actúa como un mecanismo de bucle en sí mismo y aprovecha la pila de llamadas para completar su tarea. Una solución iterativa al mismo problema se basa en construcciones de bucle iterativas. Por ejemplo, si en un desafío de codificación o una pregunta de entrevista se nos pide encontrar la solución recursiva, una técnica para hacerlo sería escribir primero la solución iterativa y luego usarla para trazar la recursiva. Examinemos el siguiente problema y escribamos una solución iterativa seguida de una solución recursiva. Al pasar por el proceso, podemos examinar cómo funciona todo esto.
//

function interativeSolution (valorIncio, valorFinal){

    arr =  [];

    // un for clasico

    for(let i = valorIncio; i <= valorFinal; i++){
        
        arr.push(i)

    }

    return arr

} 

console.log(`Solucion Iterable = ${interativeSolution(1,6)}`)

// El siguiente paso es construir esta funcion a una funcion recursiva

function recursiveSolution (valorIncial, valorFinal){

    if(valorIncial >= valorFinal){
        return [valorIncial]
    }else {

        const arr = recursiveSolution(valorIncial, valorFinal - 1)
        arr.push(valorFinal)
        return arr
        
    }

}

console.log(`Solucion Recursiva  =  ${recursiveSolution(1,6)}`)


// (2,6) => (2, 5) => (2,4) => (2,3) => (2,2)
//   6         5        4        3        2  

//Las funciones anidades guardan sus valore y una vez que el caso base terminal ejecuta estos valores. 

// Aunque restamos uno de cada endVal y estamos comenzando en nuestro argumento endVal de 6, insertando cada nuevo endVal en la matriz, recibimos un orden incremental que comienza en 2 nuestro startVal. Esto puede haber parecido contradictorio, pero con suerte, teniendo en cuenta cómo funciona ahora la pila de llamadas, ahora tiene más sentido. La pila de llamadas termina los números y almacena las funciones anidadas y luego las devuelve una vez que se cumple el caso base. Por lo tanto, recibimos una matriz incremental y no decrementada





 
