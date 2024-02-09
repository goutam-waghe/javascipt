//arrys
//array ek reffrence data type hai jimse ham multiple vlaue ko store kr skte hai in single variable like below given exmple
//for access an array element just write array name and index like this arrayName[index] (index start from 0)
const friends = ["aman", "radhika", "aditya", "goutam"];

console.log(friends);
console.log(friends[3]);
console.log(friends[2]);
console.log(friends[1]);
console.log(friends[0]);
console.log(friends.length); //ye ek js property hai jiisse  ham diye gye array ki length pta kr skte hai

// one another way to make an array:
const age = new Array(21, 20, 21, 19);
console.log(age[friends.length - 1]);
console.log(age);

//we can change array element
// point:array element ko ham const se bhi change kr skte hia pr PURE array ko nhi
//friends[0] = 3;✅
// friends =[1 ,3 , 3]  ❌

friends[3] = "mohit";
console.log(friends);

// WE CAN INSERT ALL TYPE VALUE IN ARRAY
const fristName = "goutam";
const myBio = [fristName, "waghe", 2023 - 2002, "developer", friends];
console.log(myBio);

//exercise 1
const calcAge = function (birthyear) {
  return 2023 - 2014;
};

const year = [2001, 2003, 2006, 2000];
// console.log(calcAge(year)); ye game nhi chalega
console.log(calcAge(year[0]));
console.log(calcAge(year[0]));

// yha pr ye function at the end single value de ra hia isliye dabake use kro koi dikkat nhi
const newArray = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[2]),
  calcAge(year[2]),
];
console.log(newArray);

const oneMore = ["im ${2002-2001}", 20];
console.log(oneMore);

//Push : ye array ke last me di gyi value ko add kr deta hia
//remember :  ye original array ko change krta hai !
//            updated array ki lengh return krta hia !

const cities = ["indore", "bhopal", "ujjain"];
console.log(cities);
console.log(cities.length);
cities.push("barwani");

// const pushReturn = cities.push('barwani');
// console.log(pushReturn)
console.log(cities);
console.log(cities.length);

//unshift :ye array ke start me di gyi value ko add kr deta hia
//remember :  ye original array ko change krta hai !
//            updated array ki length return krta hia !
cities.unshift("jabalpur");
console.log(cities);

// remove element from an array
// pop : ye array me se last elemnt ko hta deta hai
//remember :  ye original array ko change krta hai !
//            array ki poped  value return krta hia !
//            () koi parameter nhi dena
const poped = cities.pop();
console.log(cities);
console.log(poped);

//shift : ye array me se frist elemnt ko hta deta hai
//remember :  ye original array ko change krta hai !
//            array ki hatai hu  value return krta hia !
//            () koi parameter nhi dena
const shifted = cities.shift();
console.log(cities);
console.log(shifted);

// indexOf()
0; // we can find index of any Element in array using indexOf method

console.log(cities.indexOf("bhopal"));

// includes ye element ki presence ko chack krtA HIA AND  STRICLLY KAM KRTA HAI
// boolean value return korbe
cities.push(22);

console.log(cities.includes("bhopal"));
console.log(cities.includes("gwaliar"));
console.log(cities.includes("23"));

if (cities.includes("indore")) {
  console.log("bhiya apna ko kam ban gya crush b or kam b😂💖");
}

// assignments
// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'

const neighboursofindia = [
  "srilanka",
  "nepal",
  "bagnladesh",
  "pak",
  "afganistan",
  "butan",
];
console.log(neighboursofindia);

// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of  your selected country. So add it to the end of the 'neighbours' array

neighboursofindia.push("upopia");
console.log(neighboursofindia);
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
neighboursofindia.pop();
console.log(neighboursofindia);

// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'

if (neighboursofindia.includes("germany")) {
  console.log(`Probably is a central European country`);
} else console.log(`Probably not a central European country`);
// 5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for'Sweden' in the array, and then replace it with 'Republic of Sweden

console.log(neighboursofindia.indexOf("butan"));
neighboursofindia[neighboursofindia.indexOf("butan")] = "bhutan";
console.log(neighboursofindia);
