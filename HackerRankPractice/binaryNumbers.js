//---------------------------//
//        BINARY NUMBER      //
//---------------------------//

//
// 402/5000
// Dado que la computadora solo puede almacenar 0 y 1, no puede almacenar positivo y negativo, por lo que el bit más alto de los 8 bits binarios se usa para representar el signo, 0 es positivo, 1 es negativo y los últimos siete bits se usan para representar el valor absoluto del valor verdadero. El método se denomina notación de código original, denominado código original. Los códigos originales de 1 y -1 anteriores son los siguientes:

// &	AND	Sets each bit to 1 if both bits are 1
// |	OR	Sets each bit to 1 if one of two bits is 1
// ^	XOR	Sets each bit to 1 if only one of two bits is 1
// ~	NOT	Inverts all the bits
// <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
// >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>	Zero fill right shift


let toNumber = 7


function bas10tobas2 (number) {

    
    if(number <= 1 ){
        return [Math.floor(number, -1)]
    } else {

       const reminder = bas10tobas2(number / 2)
       reminder.push(Math.floor((number % 2),-1))
       return reminder

    }
    

}

let numeroBinario = bas10tobas2(toNumber)

console.log(`El numero ${toNumber} en Binario es ${numeroBinario.join('')}`)
    