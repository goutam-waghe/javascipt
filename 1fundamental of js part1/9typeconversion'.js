//type conversion

let a = "108";
let x = Number(a);
Number(a);
console.log(a);//string 
console.log(typeof a);
console.log(typeof x);//number 
let name = "nandini";
console.log(Number(name)); //NaN
console.log(typeof Number(name));//number
console.log(typeof NaN); //number

// console.log(typeof (a), typeof (x))
// Original varibale me {string numbe me or vice versa} me change nhi hoti hai ye sirf tempary hoti hai
// 1: first letter of Number() and String()should be capital letter

let b = 23;
console.log(typeof b); //number
console.log(typeof String(b)); //string

// TYPE COERCION:
console.log("HI I am goutam " + 23 + "old guy");
console.log("40" + "30" + "10");
console.log(40 + 30 + "10"); //output 7010
console.log("40" + 30 + 10); //output 703010 left to right chalta hai addition
console.log("40" - "20" - 10);
console.log("10" * "2" * 3);
console.log("10" / 2);
console.log(typeof +"69");

//CONCEPT :-
//1: + operator number  ko string me change kr detA HAI or string concat ho jati hai
//2: - * / opertor '465' type string ko number me change kr dete hai

// game: guesss number
let n = "10" + 1;
n = n - 5;
console.log(n);

//ASSINGMENT
// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were righT
