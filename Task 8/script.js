/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.sub = function() {
    return this.a - this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
  this.div = function() {
    return this.a / this.b;
  };
}
let calculator = new Calculator();
calculator.read();

console.log( "Sudėta: " + calculator.sum() );
console.log( "Atimta: " + calculator.sub() );
console.log( "Dauginta: " + calculator.mul() );
console.log( "Dalinta: " + calculator.div() );