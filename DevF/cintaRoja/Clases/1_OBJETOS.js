
let persona = {
    nombre : 'Carlos',
    apellido : 'Chavez',
    edad : 35,
    pais : 'Mexico',
  
  
    //Metodos
  
      saludar (){
          console.log('Hola');
      },
  
      despedir (){
          console.log('Adios');
      },
  
      gritar : (a,b) =>{
         return  a * b 
      }
  
  }
  
  
let perrito = {

    //ATRIBUTOS

    color : 'cafe',
    patas : 3,
    tienePelo : true,
    nombre : 'Bolillo',


    // METODOS

    ladrar: () =>{
        console.log('guaguagua')
        
    },

    comer: () =>{
        console.log('No me toques que estoy comiento')
    }

}


// AÑADIR ATRIBUTO

    perrito.dueno = 'Carlos';

// AÑADIR METODO 

    perrito.estarAlerta = () =>{
        console.log('Te estoy vigilando');
    }


console.log(perrito.dueno)