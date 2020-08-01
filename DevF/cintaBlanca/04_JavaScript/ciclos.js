

// CICLO FOR 

//  for (inicio; final; secuencia){

//  }



    // console.log('primer Ciclo')
    // for(var i = 500; i >= 0; i-=10){  // i+=2 / de dos en dos    i++ / de uno en uno
        
    //     console.log(i)
    // }

    // console.log('segundo ciclo')
    // for(var a = 0; a <= 1000; a+=300){      // <= aumenta 
    //     console.log(a)
    // }


    // console.log('tercer ciclo')
    // for(var b = 0; b >=-500; b-=5){         // >= disminuye
    //     console.log(b)
    // }


    // ciclo for del 1 al 100 de 1 en 1
// si el numero es divisble entre 3 ----> Fizz
// si el numero es divisible entre 5 ----> Buzz
//Si en numero es divisib le entre 3 y 5 ----> FizzBuzz


for(var i = 0; i <= 100; i++ ){
    if( i % 3 === 0 && i % 5 === 0){
        console.log(i + ' FizzBuzz')
    }
    else if( i % 5 === 0){
        console.log(i + ' Buzz')
    }
    else if( i % 3 ===0){
        console.log(i + ' Fizz')
    }
    else
        console.log(i)
}