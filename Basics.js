/*the variables 

let x = 2; normal and we use him often 

var y = 3 ;
you can give the var the same value and its
global and local and its the older one 

const a = [0,3] ; 
you can change the value you should to give him 
stable value
a[0]=3;
a = 3 
type of  data 
String: "Hello"
Number: 123
Boolean: true or false
Array: [1, 2, 3]
Object: { name: "John", age: 30 }
*/

 
 
/*
Function 

1-function declaration 

function hello (){
console.log()

}

2-arow function 
let x = ()=>{

    console.log()}

3-Function Expression  

let x  = Function  (){
 return  (console.log(())
}


4- Anonymous Function
setTimeout(function() {
  console.log("Hello, after 1 second!");
}, 1000);


5- Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const alice = new Person("Alice", 25);
console.log(alice.name);  // Output: Alice

6 Async Function
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

 Method
 const person = {
  name: "Alice",
  greet() {
    return `Hello, ${this.name}!`;
  }
};

console.log(person.greet());  // Output: Hello, Ali

*/

/*let score = 85;
if condition 
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}

switch (expression) {
  case value1:
    // Code to run if expression === value1
    break;
  case value2:
    // Code to run if expression === value2
    break;
  // More cases...
  default


  let x = 3 ; 
  x = 4 ? console.log (true ) : cosole.log (false)

*/


/*
for loop 
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
 


  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  
*/


/*
events in js
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page
*/


/*

objects
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    return "Hello " + this.name;
  }
};

console.log(person.greet());  // Output: Hello Alice
*/


/*dom select elements 




document.getElementById('id'); // Access an element by its ID
document.getElementsByClassName('className'); // Access elements by their class name
document.getElementsByTagName('tagName'); // Access elements by their tag name
document.querySelector('selector'); // Access the first element that matches a CSS selector
document.querySelectorAll('selector'); // Access all elements that match a CSS selector

/*

/*
array in js 
let fruits = ["Apple", "Banana", "Cherry"];
unshift() / push () +
shift ()/ pop() -
slice(in , in)
splice (start , end )
*/

/*
map forEach filter 
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

let numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

let numbers = [1, 2, 3, 4];
numbers.forEach(num => {
  console.log(num * 2);
});

 */

/*
from num to str tostring (x)
from str to num Number(x) / +str 
from aray to str join ()
from str to array split()
replace the value replace(/text $/gid)


*/


/*
 Spread Operator
Copying an Array
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]


*/
/*
  Destructuring
let numbers = [1, 2, 3];
let [a, b, c] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3



*/
/*
obeject orinted programing 
oop
class X {
    constructor(name) {
        this.name = name;  // Use 'name' instead of 'names' and assign it to 'this.name'
    }
    
    hello() {
        return console.log('I\'m ' + this.name); // Use 'this.name' to access the property of the class
    }
}

let person = new X('Ali');
person.hello(); // Call the 'hello' method on the instance


*/

/*
promise
let pro = new Promise((resolve, reject) => {
    let x = true;

    if (x == true) {
        console.log(true)
        //
    } else {
        reject(false); // Reject the Promise with false
    }
});

pro.then(( ) => {
    console.log(true); // Output: true
    //
})

.catch((error) => {
    console.log(error); // This won't be executed in this case
});
if promise = true you can use then 
if false you can use reject 

*/
/*

let x = Api ;

fetch(api)
.then(a=>{return a })
catch (e=>{cosole.log e})

axios(api)
.then(a=>{return a })
catch (e=>{cosole.log e})


*/

/*console.log('Start');

setTimeout(function() {
    console.log('Delayed function');
}, 2000);

console.log('End');
*/

/*try in js 
try {
    // Code that may throw an error
    // This is the "try" block
    throw new Error('Something went wrong'); // Example of throwing an error
} catch (error) {
    // Code to handle the error
    // This is the "catch" block
    console.log(error); // Output the error message
} finally {
    // Optional "finally" block
    // This block of code executes regardless of whether an error occurred or not
    console.log('Execution complete'); // Output after handling or ignoring the error
}
*/


/*function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

try {
    console.log(divide(10, 2)); // Output: 5
    console.log(divide(10, 0)); // This line will throw an error
} catch (error) {
    console.log('Error caught:', error.message);
}
*/


/*
// Store data in localStorage
localStorage.setItem('username', 'Alice');

// Retrieve data from localStorage
let username = localStorage.getItem('username');
console.log(username); // Output: Alice
localStorage.removeItem('username');
localStorage.clear();

*/

/*
Math.round(4.7); // Rounds a number to the nearest integer, returns 5
Math.floor(4.7); // Rounds a number downwards to the nearest integer, returns 4
Math.ceil(4.3); // Rounds a number upwards to the nearest integer, returns 5
Math.abs(-4.7); // Returns the absolute (positive) value of a number, returns 4.7
Math.pow(2, 3); // Returns the base to the exponent power, i.e., 2^3, returns 8
Math.sqrt(16); // Returns the square root of a number, returns 4
Math.min(2, 3, 5); // Returns the smallest of zero or more numbers, returns 2
Math.max(2, 3, 5); // Returns the largest of zero or more numbers, returns 5
*/
