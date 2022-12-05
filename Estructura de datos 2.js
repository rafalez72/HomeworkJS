//1 Use an Array to Store a Collection of Data
let yourArray; // Change this line
yourArray=[1,'a',true,1,2]


//2 Access an Array's Contents Using Bracket Notation


let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1]=1
// Only change code above this line
console.log(myArray);

//3Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
    // Only change code below this line
      arr.push(7)
      arr.push('VIII')
      arr.push(9)
      arr.unshift('three')
      arr.unshift(2)
      arr.unshift('I')
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

//4 Remove Items from an Array with pop() and shift()

function popShift(arr) {
    let popped=arr.pop(); // Change this line
    let shifted=arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

//5 Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4)
// Only change code above this line
console.log(arr);

//6 Add Items Using splice()

function htmlColorNames(arr) {
  // Only change code below this line
arr.splice(0,2,'DarkSalmon','BlanchedAlmond')


  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 
'LavenderBlush', 'PaleTurquoise', 'FireBrick']));



//7 Copy Array Items Using slice()
function forecast(arr) {
  // Only change code below this line
arr=arr.slice(2,4)
  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


//8 Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
newArr.push([...arr])
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

//9Combina arreglos con el operador de propagación

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence=['learning',...fragment,'is', 'fun']; // Cambia esta línea
  return sentence;
}

console.log(spreadOut());

//10 Comprueba la presencia de un elemento con indexOf()
function quickCheck(arr, elem) {
  // Cambia solo el código debajo de esta línea
  if(arr.indexOf(elem)===-1) return false;
  else return true
  // Cambia solo el código encima de esta línea
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//11Itera a través de todos los elementos de un arreglo utilizando bucles "for"
function filteredArray(arr, elem) {
  let newArr = [];
  // Cambia solo el código debajo de esta línea

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      
      newArr.push(arr[i]); 
    }
  }
  // Cambia solo el código encima de esta línea
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


//12Crea arreglos complejos multidimensionales
let myNestedArray = [
  // Cambia solo el código debajo de esta línea
  ['unshift', false, 1, 2, 3, 'complex', 'nested',['unshift', false, 1, 2, 3, 'complex', 'deep',['unshift', false, 1, 2, 3, 'complex', 'deeper',['unshift', false, 1, 2, 3, 'complex', 'deepest']]]],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Cambia solo el código encima de esta línea
];

//13 Agrega pares clave-valor a objetos de JavaScript
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Cambia solo el código debajo de esta línea
foods.bananas=13
foods.grapes=35
foods.strawberries =27
// Cambia solo el código encima de esta línea

console.log(foods);

//14 Modifica un objeto anidado dentro de un objeto
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Cambia solo el código debajo de esta línea
userActivity.data.online=45
// Cambia solo el código encima de esta línea

console.log(userActivity);

//15 Accede a los nombres de propiedad con la notación de corchetes
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Cambia solo el código debajo de esta línea
  return foods[scannedItem] 
  // Cambia solo el código encima de esta línea
}

console.log(checkInventory("apples"));

//16  Usa la palabra clave "delete" para eliminar las propiedades de los objetos
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Cambia solo el código debajo de esta línea
delete foods.oranges
delete foods.plums
delete foods.strawberries
// Cambia solo el código encima de esta línea

console.log(foods);

//17 Evalúa si un objeto tiene una propiedad
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Cambia solo el código debajo de esta línea
if(userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')) return true
else return false
  // Cambia solo el código encima de esta línea
}

console.log(isEveryoneHere(users));

//18 Itera a través de las claves de un objeto con una sentencia "for...in"
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Cambia solo el código debajo de esta línea
  let count=0
  for (let user in usersObj){
    if(usersObj[user].online) count++
  }
  // Cambia solo el código encima de esta línea
  return count
}

console.log(countOnline(users));

//19 Genera un arreglo de todas las claves de los objetos con Object.keys()
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea
  return Object.keys(obj)
}

console.log(getArrayOfUsers(users));

//20Modifica un arreglo almacenado en un objeto
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Cambia solo el código debajo de esta línea
  userObj.data.friends.push(friend)
  // Cambia solo el código encima de esta línea
  return  userObj.data.friends
}

console.log(addFriend(user, 'Pete'));


