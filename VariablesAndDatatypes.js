// JavaScript Variables and Data Types

// Variables can be declared using var, let, or const
var name = "Rashmi";  // old way, function-scoped
let age = 21;         // modern way, block-scoped
const country = "India"; // cannot be changed after declaration

// JavaScript is dynamically typed
let x = 10;      // x is a number
x = "hello";     // now x is a string

// Data Types in JavaScript

// 1. String - sequence of characters
let greeting = "Hello, World";

// 2. Number - includes both integer and float
let score = 95;
let percentage = 87.5;

// 3. Boolean - true or false
let isStudent = true;

// 4. Null - intentional absence of value
let emptyValue = null;

// 5. Undefined - variable declared but not assigned
let unassigned;

// 6. Object - collection of key-value pairs
let person = {
  name: "Rashmi",
  age: 21,
  isStudent: true
};

// 7. Array - list of values
let colors = ["red", "green", "blue"];

// Typeof operator - checks the type of a variable
console.log(typeof score);      // number
console.log(typeof greeting);   // string
console.log(typeof emptyValue); // object (this is a JavaScript quirk)
console.log(typeof unassigned); // undefined
