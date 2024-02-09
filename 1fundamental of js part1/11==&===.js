// key point : it is recommded use === most time 
//== inhance chances to give us bag in our code 
let age = '22';

//=== is strict it does not do type coerian
if (age === 22) {
    console.log('true');
} else console.log('false');

//== is loose equal operator is does type coerian
//
if (age == 22) {// '22' == 22 :true yhan pr string number me convert kr detA HAI type coerian ke vajah se 
    console.log('true');
} else console.log('false');


// !== is also stict !!
//!= is loose


//prompt inpute lene ke kaam aata hai pr ye inpute ko as string me deta hai

//pormpt browser ka part hai node js me kaam nhi krta hia

//ASSIGNMENT
// let x = Number(prompt("enter a num"));
// console.log(typeof x);
// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1

// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)

// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?

// 8. Reflect on why we should use the === operator and type conversion in this
// situation
let numNeighbours = prompt('how many neighbour countries does your contry have?')



if(numNeighbours == 1){
    console.log('only 1 border')
} else if(numNeighbours > 1)
{
    console.log("more than 1 Border");
} else {
    console.log('No borders');
}

if(numNeighbours === 1){
    console.log('only 1 border')
} else if(numNeighbours > 1)
{
    console.log("more than 1 Border");
} else {
    console.log('No borders');
}


