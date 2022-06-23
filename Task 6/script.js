/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..]
2. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

// 1 Užduotis
function getUserNames(users) {
  const userNames = [];  // Sukuri tuscia masyva
  for (i = 0; i < users.length; i++)
    {
      userNames.push(users[i].name);  // kiekvieno elemento name idedi i ta nauja masyva
    }
console.log(userNames);
}
getUserNames(users); 

// 2 Užduotis 1 variantas
const getUserAverageAge = (arr = []) => {
  const {sum, count} = arr.reduce((acc, val) => {
    let {sum, count} = acc;
    sum += val.age;
    count++;
    return {sum, count};
  }, {
    sum: 0, count: 0
  });
  return (sum / (count || 1));
};
console.log(getUserAverageAge(users));

// 2 Užduotis 2 variantas
let getAverage = arr => {
  let reducer = (total, currentValue) => total + currentValue;
  let sum = arr.reduce(reducer)
  return sum / arr.length;
}
let ages = users.map(user => user.age);
console.log(getAverage(ages));

// 2 Užduotis 3 variantas
let avgs = users.reduce((ac,a) => a.age + ac,0)/users.length
console.log(avgs)