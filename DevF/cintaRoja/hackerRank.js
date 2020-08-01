
// Day 2: Operators
// There are  lines of numeric input:
// The first line has a double,  (the cost of the meal before tax and tip).
// The second line has an integer,  (the percentage of  being added as tip).
// The third line has an integer,  (the percentage of  being added as tax).

// Output Format

// Print the total meal cost, where  is the rounded integer result of the entire bill ( with added tax and tip).

// Sample Input

// 12.00
// 20
// 8
// Sample Output

// 15
// Explanation

function solve(meal_cost, tip_percent, tax_percent) {
    
    tip_percent = meal_cost * tip_percent /100;
    tax_percent = meal_cost * tax_percent /100;
    
   let totalCost = Math.round(meal_cost + tip_percent + tax_percent);
   console.log("The total meal cost is " + totalCost + " dollars.")
  
    }

    solve(15.50, 15, 10)




//  EJEMPLO DE OBJETOS


    var dimensiones = {
        altura: 34,
        anchura: 455
    }
    
    console.log("altura: ",dimensiones.altura)
    console.log("anchura: ",dimensiones.anchura)
    
    class Poligono {    // clase 
      constructor(figura,alto, ancho) { //Es un método especial para crear e inicializar un objeto creado con una clase.
        this.figura = figura
        this.alto = alto;
        this.ancho = ancho;
      }
      getName(){
        return this.figura;
      }
      getArea(){
          return this.alto * this.ancho
      }
    };
    
    const rectangulo = new Poligono("rectangulo",33,44);
    
    console.log("Area del poligono: ",rectangulo.getArea());

