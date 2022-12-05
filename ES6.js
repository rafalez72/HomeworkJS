//1Compara el alcance de las palabras clave "var" y "let"
function checkScope() {
    let i = 'function scope';
    if (true) {
     let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
//2Muta un arreglo declarado con const
const s = [5, 7, 2];
function editInPlace() {
  // Cambia solo el código debajo de esta línea

  // Usar s = [2, 5, 7] sería inválido
  s[0]=2
  s[1]=5
  s[2]=7
  // Cambia solo el código encima de esta línea
}
editInPlace();
//3 Prevenir la mutación del objeto

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Cambia solo el código debajo de esta línea
  
  Object.freeze(MATH_CONSTANTS)
    // Cambia solo el código encima de esta línea
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
//4Usa funciones flecha para escribir funciones anónimas de manera breve

const magic =()=> {
    return new Date();
  };

//5Escribe funciones flecha con parámetros
const myConcat =(arr1, arr2)=> {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));

//6 Establece parámetros por defecto para tus funciones
// Cambia solo el código debajo de esta línea
const increment = (number, value=1) => number + value;
// Cambia solo el código encima de esta línea

//7 Utiliza el parámetro rest con parámetros de función
const sum = (...args) => {

    return args.reduce((a, b) => a + b, 0);
  }

//8Utiliza el operador de propagación para evaluar los arreglos en el lugar
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Cambia esta línea

console.log(arr2);
//9Usa sintaxis de desestructuración para extraer valores de objetos
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Cambia solo el código debajo de esta línea
  const { today, tomorrow } = HIGH_TEMPERATURES;
  
  
  // Cambia solo el código encima de esta línea

//10 Usa sintaxis de desestructuración para asignar variables desde objetos
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // change code below this line
    
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  
  // change code above this line
  
  console.log(highToday); // should be 77
  console.log(highTomorrow); // should be 80


//11Usa sintaxis de desestructuración para asignar variables desde objetos anidados
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
  const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
  // Only change code above this line
//12Usa sintaxis de desestructuración para asignar variables desde arreglos
let a = 8, b = 6;
// Cambia solo el código debajo de esta línea
[a,b]=[b,a]
//13 Utiliza la sintaxis de desestructuración con el parámetro rest para reasignar elementos de un arreglo
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
 
//14 Utiliza sintaxis de desestructuración para pasar un objeto como parámetro de función
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Cambia solo el código debajo de esta línea
  const half = ({max,min}) =>{
  
   return (max + min) / 2.0
    }; 
  // Cambia solo el código encima de esta línea
//15 Crea cadenas usando plantillas literales


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
    // change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // change code above this line
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

//16 Escribe declaraciones concisas de objecto literales usando la abreviatura de propiedad de objeto
const createPerson = (name, age, gender) => {
    // Cambia solo el código debajo de esta línea
    return {
       name,
       age,
       gender
    };
    // Cambia solo el código encima de esta línea
  };
//17Escribe funciones breves y declarativas con ES6
// Cambia solo el código debajo de esta línea
const bicycle = {
    gear: 2,
     setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Cambia solo el código encima de esta línea
  bicycle.setGear(3);
  console.log(bicycle.gear);

//18Usa sintaxis de clases para definir una función constructora
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  
  const carrot = new Vegetable("carrot");
  console.log(carrot.name); // => should be 'carrot'
//19Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
//20Crea un módulo para scripts
<html>
  <body>
    <!-- Cambia solo el código debajo de esta línea -->
<script type="module" src="index.js"></script>
    <!-- Cambia solo el código encima de esta línea -->
  </body>
</html>
//21Utiliza la exportación para compartir un bloque de código
const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  export {uppercaseString,lowercaseString}

//22 Reutiliza código de JavaScript utilizando import

import {uppercaseString,lowercaseString} from './string_functions.js'
uppercaseString("hello");
lowercaseString("WORLD!");
//23 Use * para importar todo de un archivo


// Cambia solo el código encima de esta línea
import * as stringFunctions from './string_functions.js'
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//24 Create an Export Fallback with export default
export default function subtract(x, y) {
    return x - y;
  }
//25 Import a Default Export
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);
//26 Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {

});
//27 Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      // Change this line
      resolve('We got the data')
    } else {  
      // Change this line
      reject ('Data not received')
    }
  });

//28 Handle a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  makeServerRequest.then(result=>console.log(result));
//29 Handle a Rejected Promise with catch

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  }).catch(error=> console.log(error));