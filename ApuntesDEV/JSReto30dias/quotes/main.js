function game (a, b){

    if (a === 'piedra' && b === 'tijera' || a === 'tijera' && b === 'papel' || a === 'papel' && b === 'piedra'){
      return 'J1'
    }else if(b === 'piedra' && a === 'tijera' || b === 'tijera' && a === 'papel' || b === 'papel' && a === 'piedra'){
      return 'J2'
    }else 
      return 'Empate'
  }
  
  game('piedra', 'papel')

let saludo = console.log('Hola')

let persona = {
  nombre : 'Carlos',
  apellido : 'Chavez',
  edad : 35,
  pais : 'Mexico',
}

let saludo = 'Hola '

console.log(saludo + persona.nombre)
console.log(persona.apellido)