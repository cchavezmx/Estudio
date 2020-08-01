
// function pair(a){
//     if(a % 2 == 0 || (a >= 5 && a < 21)){
//     return 'Not Wired'
// }else
//      return 'Wired'
// }


// console.log(pair(24));



// // Escribe tu código aquí
// function evaluateLetter(letra){
//     let  vocales = ['a', 'e', 'i', 'o', 'u']
//     let  vocal = vocales.some(item => item === letra)
//         ? 'Vocal'
//         : 'Consonante'

//         return vocal;
//     }



// console.log(evaluateLetter('z'))




// Objective DAY 3
// In this challenge, we're getting started with conditional statements. Check out the Tutorial tab for learning materials and an instructional video!

// Task
// Given an integer, , perform the following conditional actions:

// If N is odd, print Weird
// If N is even and in the inclusive range of 2 to 5, print Not Weird
// If N is even and in the inclusive range of 6 to 20 , print Weird
// If N is even and greater than 20 , print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.

// let n = 18

// if (n % 2 === 0 && n > 2 && n <= 5){
//      console.log('Not Weird')
// }else if (n > 20 && n % 2 === 0){
//     console.log('Not Weird')
// }else if(n % 2 === 0 && n > 5 && n <= 20){
//     console.log('Weird')
// }else if (n % 2 !== 0){
//     console.log('Weird')
// }


// // DAY 4

// function Person(initialAge){
//     // Add some more code to run some checks on initialAge
//     let age = this.initialAge = initialAge

//    if (age < 0){
//        console.log('Age is not valid, setting age to 0.')
//        age = this.initialAge = 0
//    }

//   this.amIOld=function(){
//    // Do some computations in here and print out the correct statement to the console
//     if(age < 13){
//         console.log('You are young.');
//     }else if (age >= 13 && age < 18){
//         console.log('You are a teenager.');
//     }else console.log('You are old.');
//   };
//    this.yearPasses=function(){
//           // Increment the age of the person in here
     
//         return age += 1
//    };
// }

// var p = new Person(10)
// p.initialAge = -1
// console.log(p)
// p.amIOld();
// console.log(p.yearPasses());


// day 5

    let n = 8

    for(let i = 1; i <= 10; i++){

    console.log(n,' x ',i,' = ',n*i) 
    
};


