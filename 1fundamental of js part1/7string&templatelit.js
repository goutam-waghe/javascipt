const firstName = "Goutam";
const work = "Software engineer";
const birthYear = 2001;
let year = 2023;
//template litral add variable and string !always use template litral it is the best practies 
const old = "Hi i am " + firstName + " " + (year - birthYear) + " year old " + work;
console.log(old);
const afterEs6 = `Hi i am ${firstName} ${year - birthYear} year old ${work}`
console.log(afterEs6);
//template literal use in multiline string !!
console.log("HI THIS IS \n GOUTAM WAGHE");
console.log(`HI THIS IS nGOUTAM WAGHE`); //in template litrals we can make multiline without using \n 


//ASSIGNMENT
// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax