
// let data = '3, sam 99912222, tom 11122222, harry 12299933, sam, edward, harry'



// function processData(input) {
//     input = input.trim().split(" ");
//     var phoneBook = {};
    
//     console.log(input)

//     // Add entries
//     for (i = 1; i <= input[0]; i++) {
//         let line = input[i].trim().split(" ");
        
//         console.log(line[0])
//         phoneBook[line[0]] = line[1];
//     }
    
//     // Search
//     for (; i < input.length; i++) {
//         let result = phoneBook[input[i]];
//         console.log( 
//             (result != undefined)
//             ? input[i] + "=" + result
//             : "Not found"
//         );
//     }
// } 

// processData(data)


//--------------------------//
//   Recursive Solutions    //
//--------------------------//+ Es de importancia el que cada resultado sea atravez de un return 

function factorialSum(num) {
    
    if(num <= 0) {
    return 0 
    } else {
    return num + factorialSum(num  - 1)
    }}

   console.log(factorialSum(3))
    // returns 15
    
// 5-1 = 4     3-1 = 2
// 4-1 = 3     2-1 = 1 
// 3-1 = 2     1-1 = 0 
// 2-1 = 1
// 1-1 = 0


