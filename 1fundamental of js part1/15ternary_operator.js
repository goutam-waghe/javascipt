// Tarnary operator

// 1.tarnary opearator is an expression

let age = 22;

age >= 18
  ? console.log("you are free ki set  a girl")
  : console.log("not bro padai kr");

let x = age >= 18 ? "set a girl" : "padai kr";

console.log(x);

console.log(`your are ${age >= 18 ? "adult" : "kid"}`);

if (age >= 18) {
  console.log("set a girl");
} else console.log("padai kr");

//ASSIGNMENT
// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
let populationOfIndia = 133;
populationOfIndia >= 133
  ? console.log("india has large population")
  : console.log("india");
// 2. After checking the result, change the population temporarily to 13 and then to
// / / 130. See the different results, and set the population back to origina
