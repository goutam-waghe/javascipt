// //objects
const obj = {
  // key : value ,
  firstName: "goutam",
  lastName: "waghe",
  age: 22,
  birthYear: 2001,

  job: "video editor",
  crush: `NO LOVE`,
  love: true,
  friends: ["radhika", "mohit", "Aditya"],
};
console.log(obj);

// // . vs {} notetion to access object key and values

// // .
// /*dot is a operator jiski pricidence [] se jyada hai and L-R chalta hai(obj.friend[]) dot me apn sirf key hi bata skte hai kisi tarah ka operation nhi kr skte hai */
// console.log(obj.firstName);

// console.log(obj["lastName"]);
// // it is must to pass key name in string name
// // isme ham variable ko b
// //ham isme operation b kr skte hai like this

// const namekey = 'Name'
// console.log(obj["first" + namekey]);

// let jobname = "job";
// console.log(obj.jobname); //ye acces nhi krega variable ko
// console.log(obj[jobname]); // ye kr lega

// //challange
// // goutam has 3 friends his best friend called radhika
// console.log(`${obj["firstName"]} has ${obj.friends.length} friends his best friend called ${obj.friends[0]}  `)

//object methods
// const johnInfo = {
//   firstName : 'john',
//   lastName : 'sas',
//   birthYear : 2001,
//   hasdrivinglicance:false ,
//   job : 'technicain',
//   city : 'mumbai',
//   friends:["jonas" , 'peter' , 'ace'] ,
//   // calcAge:function(birthYear) {
//   //   return 2023 - birthYear ;
//   // }
//   // calcAge:function() {
//   //  console.log(this)
//   //   // return 2023 - john.birthYear ;
//   //   return 2023  - this.birthYear ;
//   // }
//   calcAge:function() {
//   //  console.log(this)
//       this.age = 2023 - this.birthYear ;
//     return this.age ;
//   }

// }
// console.log(johnInfo.calcAge(2003))
// console.log(johnInfo['calcAge'](2003))

// console.log(johnInfo.calcAge());
// console.log(johnInfo.age);
// console.log(johnInfo.age);
// console.log(johnInfo.age);

//obj me ham function b as a key value de skte hai
// function me ham obj key se v value le skte hai'this' keywork ka use krke 'this' ka use karke ham property b add kr skte hai lekin wo property tabhi acces hogi jab ham function ko call krege
// john is a 22 year old technician and he has driving licance
// console.log(`${johnInfo.firstName} is a ${johnInfo.age} year old ${johnInfo.job} and he has ${johnInfo.hasdrivinglicance ? 'a' : 'no'} driving licance`)
//

//ASSINGMENT
// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)
// const myCountry = {
//   country: "India",
//   capital: "delhi",
//   population: 133,
//   language: "hindi",
//   neighbours: ["shri Lanka", "nepal", "chine", "bhutan"],
//   describe: `${this.country} has ${this.population} billion ${this.language}-speaking people ,${this.neighbours.length} neighbouring counntries and its capital called ${this.capital} `,
// };
// console.log(
//   `${myCountry.country} has ${myCountry.population} billion ${myCountry.language}-speaking people , ${myCountry.neighbours} neighbouring counntries and its capital called ${myCountry.capital} `
// );
// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// myCountry.population += 2;
// console.log(myCountry.population);
// decrease it by two million using brackets notation.
// myCountry["population"] -= 2;
// console.log(myCountry.population);
// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. This method

// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

// console.log(myCountry);
