class Animal {
    constructor(ojos, patas, pelo, edad, especie){
        this.ojos = ojos;
        this.patas = patas; 
        this.pelo = pelo;
        this.edad = edad;
        this.especie = especie;

    };

    comunicar(){
        return console.log('Me estoy comunicando')
    };
    alimentar(){
        return console.log('Me estoy alimentando')
    };

}

class Mascota extends Animal {
    constructor(ojos, patas, pelo, edad, especie, duenio, dirreccion, vacunas){
        super(ojos, patas, pelo, edad, especie);

        this.duenio = duenio;
        this.dirreccion = dirreccion;
        this.vacunas = vacunas;
    }
}

let gatito = new Mascota(2, 4, true, 'gatito', '1 año', 'Carlos', 'Mi casa', false)




// console.log(gatito.pelo)


