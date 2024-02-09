

//sytax of function
/* function function-name(para , para) {

} 

calling of fun :
function-name(para , para);


para => parameter 
it is optional
*/
// declearation of function
function myFUn() {
    console.log("hi i am goutam waghe\n");
}
myFUn();
myFUn();

function fruitprocessor(apple, orange) {
    console.log(apple, orange);
    const juice = `juice of  ${apple} apple and ${orange} orange`
    return juice;
}

let appleOrangejuice = fruitprocessor(3, 3);
console.log(appleOrangejuice);

console.log(fruitprocessor(2, 3)); //coonsole.log() is also function but its predifined


Number('23') // it is also prefined function

function calcAge(birthyear) {
    return 2023 - birthyear;
}


console.log(calcAge(2001));



//function Expression
// syntax
/* const functionname = function(para){

} 
l

functionname(value);


*/
//it is also called anonames function
const calcAge2 = function (birthyear) {

    return 2023 - birthyear;
}

console.log(calcAge2(2001))
// Diff btw function declearation and function expression
// 🔴 function decleation me apn aoko ko declear krne se pehle call kr skte hai (concept of hoisting) lekin function expression me nhi kr skte hia



//Arrow function
//syatax 
/* const vairable-name = para => code //for one line code function 

if we have more code the use {} and we have more then 1 para them use (para , para) 
const varibale = () => {

}
*/

const calcAge3 = (birthyear) => {
    const age = 2023 - birthyear;
    const marry = 26 - age;
    return `age is ${age} and marry in ${marry} year`;
}
console.log(calcAge3(2001))


function peaceoffruit(fruit) {
    return fruit * 4;

}

function fruitjuice(mengo, banana) {
    console.log(mengo, banana);
    const peaceofmengo = peaceoffruit(mengo);
    const peaceofbanana = peaceoffruit(banana);

    // console.log(,);
    const juice = `juice of  ${peaceofbanana}peaces of ${banana} banana and ${peaceofmengo} of ${mengo} mengo`
    return juice;
}


console.log(fruitjuice(2, 3))
