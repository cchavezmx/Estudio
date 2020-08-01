let titulo = document.getElementById('titulo');
let subtitulo = document.getElementById('subitutlo');

//console.log(titulo)
//console.log(subtitulo)


let boton = document.getElementById('btn')


const cambiar = () => {

titulo.innerHTML = "PerroLoco"
subtitulo.innerHTML = "Que loco no!?"

}

boton.addEventListener('click', cambiar)


//====================================== para explicar ==============================//

let btnsaludo = document.getElementById('btn_saludo')   // document.getElementById se ocupa para 

const saludo = () => {
 
    var nombre = prompt('¿Como te llamas?')
    titulo.innerHTML = "Hola " + nombre
}

btnsaludo.addEventListener('click', saludo)


// =========================================== agregar nombre con un imput ==============================//

let pregunta = document.getElementById('pregunta') //este es el input donde va a ir el nombre de la gente 
let botoncambio = document.getElementById('btn_cambio') // va a esperar la ejecucion del escript con addeventlistner
let respuesta = document.getElementById('respuesta') // va a ir en h3

const input = () =>{
    respuesta.innerHTML = pregunta.value // inner pinta los cambios 
}

botoncambio.addEventListener('click', input)