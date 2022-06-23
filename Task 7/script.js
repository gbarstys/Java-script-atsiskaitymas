/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

// pirmas variantas
console.log(Object.keys(audi));

// antras variantas
const keys = Object.keys(audi)
console.log(keys);

// su funkcija
function showObjectKeys(obj) {
return Object.keys(obj)
}
console.log(showObjectKeys(audi));
