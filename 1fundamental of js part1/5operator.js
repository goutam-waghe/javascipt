//operators 

//arithmatic operators 
// + , - , * ,/,** 
let now = 2023;
let ageOfa = now - 2001;
let ageOfb = now - 2006;
console.log(ageOfa);
console.log(ageOfb);
let totalAge = ageOfa + ageOfb;
console.log(totalAge);


//assignment operators 
// = , += , -= , *= , /= 

ageOfb = 16;
let x = 2;
x += 1; // x = x + 1; x = 2 + 1 = 3
console.log(x)
x -= 1; // x = x - 1; x = 3 - 1 = 2
console.log(x)
x *= 1; // x = x * 1; x = 2 * 1 = 2
console.log(x)

//compareason operator
//> , < , >= , <= , == , ===

console.log(ageOfa > ageOfb)



// incriment and decriment operator 
//++ , --
x = 1
let y = x++;// x = 2  , y = 1
console.log(y);

y = ++x;//x = 3 , y = 3
console.log(y);

//assignemnt 
// If your country split in half, and each half would contain half the population, 
// then how many people would live in each half?
let population = 1600000000;
half = population / 2;
console.log(half + "people live in each half");


// 2. Increase the population of your country by 1 and log the result to the console
population++;
console.log(population);
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
const finLand = 6000000;
if (population > finLand)
    console.log("YES")
else
    console.log("no")
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
let avgpop = 3300000;
console.log(population < avgpop)
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portugues

let description = `indore is in india , and its is population is ${population} and ${half} is speak HINDI `;
console.log(description);



