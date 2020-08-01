// 1.- Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide nombre, edad,sexo,peso y altura
//      Generar el RFC a partir de el nombre, fechaNacimiento y sexo


class Persona {
    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.RFC;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.IMC = this.calcularIMC();
    };
    calcularIMC(){

        let IMC = (this.peso) / Math.pow((this.altura/100),2);
        return IMC.toFixed(2)


    };
    esmayorDeEdad(){
        return this.edad >= 18
            ? 'Mayor de edad'
            : 'Menor de edad'
    }
    calcularRFC(){


    }
        

}



persona1 = new Persona('CARLOS', 35, 'Hombre', 100, 175)
console.log(persona1)




// 2.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
// 	 -Titular y cantidad, estado
// 	 -ingresar(cantidad)
// 	 -retirar(cantidad)
// 	 Hacer las validaciones previas
// 	 Como regla de negocio no debe de tener más de $900 y menos de $10



