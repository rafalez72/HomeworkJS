//1_Comment Your JavaScript Code
//Esto es un comentario
 
/* Esto es otro comentario
 */


//2_Comment Your JavaScript Code

var myName;

//3_Storing Values with the Assignment Operator

// Setup
var a;

// Only change code below this line
a=7;

//4_Assigning the Value of One Variable to Another

// Setup
var a;
a = 7;
var b;

// Only change code below this line
b=a;

//5_Initializing Variables with the Assignment Operator

var a=9;

//6 Declare String Variables
var myFirstName ='Rafael';
var myLastName = 'Lezcano';
//7 understanding-uninitialized-variables
var a=9;
//8 understanding-case-sensitivity-in-variables
// Only change code below this line
var a=5;
var b=10;
var c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//9 explore-differences-between-the-var-and-let-keywords
// Variable declarations
let catName = "Oliver";
let catSound = "Meow!";

//10 declare-a-read-only-variable-with-the-const-keyword
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//11 add-two-numbers-with-javascript
const sum = 10 + 10;

//12 subtract-one-number-from-another-with-javascript
const difference = 45 - 33;

//13 multiply-two-numbers-with-javascript
const product = 8 * 10;

//14 divide-one-number-by-another-with-javascript
const quotient = 66 / 33;

//15 increment-a-number-with-javascript
let myVar = 87;

// Only change code below this line
myVar++;

//16 decrement-a-number-with-javascript
let myVar = 11;

// Only change code below this line
myVar--;

//17 create-decimal-numbers-with-javascript
const ourDecimal = 5.7;

// Only change code below this line
let myDecimal=5.7;

//18 multiply-two-decimals-with-javascript
const product = 2.5 * 2.0;

//19 basic-javascript/divide-one-decimal-by-another-with-javascript
const quotient = 4.4 / 2.0; // Change this line

//20 finding-a-remainder-in-javascript
const remainder = 11%3;

//21 compound-assignment-with-augmented-addition
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

//23 compound-assignment-with-augmented-subtraction
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

//24 compound-assignment-with-augmented-multiplication
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *=  5;
b *= 3 ;
c *=  10;

//25 compound-assignment-with-augmented-division
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

//26 escaping-literal-quotes-in-strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

//27 quoting-strings-with-single-quotes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//28 escape-sequences-in-strings
const myStr = "FirstLine\n\t\\SecondLine\n\ThirdLine"; // Change this line

//29 concatenating-strings-with-plus-operator
let myStr;

myStr="This is the first sentence.";
myStr+=" This is the second sentence.";

//30 concatenating-strings-with-the-plus-equals-operator
let myStr;
myStr="This is the first sentence."
myStr+=" This is the second sentence."

//31 constructing-strings-with-variables
// Only change code below this line
const myName = "Rafael";
const myStr = "My name is "+  myName +" and I am well!";

//32 appending-variables-to-strings
// Change code below this line
const someAdjective = "perfect";
let myStr = "Learning to code is ";
myStr+=someAdjective;

//33 find-the-length-of-a-string
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

//34 use-bracket-notation-to-find-the-first-character-in-a-string
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

//35 understand-string-immutability
// Setup
let myStr = "Jello World";

// Only change code below this line

// Only change code above this line
myStr="Hello World";

//36 use-bracket-notation-to-find-the-nth-character-in-a-string
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

//37 use-bracket-notation-to-find-the-last-character-in-a-string
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line

//38 use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2 ]; // Change this line

//39 word-blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "my  "+myNoun+" is really "+myAdjective+" and "+myVerb+" very " +myAdverb; // Change this line
// Only change code above this line

//30 store-multiple-values-in-one-variable-using-javascript-arrays
// Only change code below this line
const myArray = ["2",2];

//41 nest-one-array-within-another-array
// Only change code below this line
const myArray = [[]];

//42 access-array-data-with-indexes
const myArray = [50, 60, 70];
const myData =myArray[0]

//43 modify-array-data-with-indexes
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0]=45

//44 access-multi-dimensional-arrays-with-indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

//45 manipulate-arrays-with-push
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])

//46 manipulate-arrays-with-pop
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
let removedFromMyArray= myArray.pop();

//47 manipulate-arrays-with-shift
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
let removedFromMyArray=myArray.shift();

//48 manipulate-arrays-with-unshift
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35])

//49 shopping-list
const myList = [
    ["Chocolate Bar",15],
    ["Chocolate Bar",15],
    ["Chocolate Bar",15],
    ["Chocolate Bar",15],
    ["Chocolate Bar",15] ]

//50 write-reusable-javascript-with-functions
function reusableFunction (){
    console.log('Hi World')
  }
  reusableFunction()

//51 passing-values-to-functions-with-arguments
function functionWithArgs (param1, param2) {
    console.log(param1+param2);
  }
  functionWithArgs(2,3)

//52 return-a-value-from-a-function-with-return
function timesFive (num) {
    return num * 5;
  }
  
  
//53 global-scope-and-functions
// Declare the myGlobal variable below this line

let myGlobal =10
function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal =5
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//54 local-scope-and-functions
function myLocalScope() {
    // Only change code below this line
    let myVar=5
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

//55 global-vs--local-scope-in-functions
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear="sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
//56 understanding-undefined-value-returned-from-a-function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
//57 assignment-with-a-returned-value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed=processArg(7)

//58 stand-in-line
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
   let r= arr.shift()
    return r;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


