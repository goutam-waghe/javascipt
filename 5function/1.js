// 'use strict'
// const bookings = [] ;
// const createBooking = function(flightnum , numofpassenger  =1, price =200 * numofpassenger){
// // before ES6 we use this kind of code 
// // numofpassenger = numofpassenger || 2
// // price = price || 300


//     const book = {
//     flightnum  , 
//     numofpassenger , 
//     price
// }
// console.log(book);
// }
// createBooking('AS21')
// createBooking('AS21',3 )
// createBooking('AS21',undefined , 3 )
// createBooking('AS21',3 , 100 )

// ______lession2________

// const flight = 'LS203'
// const jonus = {
//     Name : 'Goutam Waghe' ,
//     passport:247565891545
// }

// function checkIn(flightNumber , passager) {
//     flightNumber ='LS213',
//     passager.Name = 'MR ' + passager.Name ;
//     if(passager.passport === 247565891545){
//         alert('done')
//     }else{
//         alert('Wrong passport')
//     }
// }
// checkIn(flight , jonus)

// console.log(flight);
// console.log(jonus);



// //is same as 
// // const flightNumber = flight
// // const passager = jonus
// console.log();
// const newPassport = (e) => {
//     e.passport = Math.trunc(Math.random()*10000000)
// }
// newPassport(jonus)
// checkIn(flight,jonus)

// console.log(jonus , flight);

// ______lession3_______


/* first class function 
1.store function in variable
2.pass function as argument in other function
3.return function from another function
4.call methods on function

*/


/* HIGHR ORDER FUNCTION 

A function that riceives another function as an argument , that returns a new function or both 

*/












// /* function take argument as an function*/

// const oneWord = function(str){
//     // console.log(str.replace(/ /g , '-').toLowerCase());
//     return str.replace(/ /g , '-').toLowerCase()
// }
// const upperfirstWord = function(str){
//  const [first, ...other] = str.split(' ') ;
// //  console.log(first , other);
// //  console.log([first.toUpperCase(), ...other].join(''))
//  return [first.toUpperCase(), ...other].join(' ')
// }
// oneWord("this is goutam waghe")
// // upperfirstWord("this is goutam waghe")
// // HIGHR ORDER FUNCTION 
// const transform = (str , fn) =>{
// console.log("Origianl String : " , str);
// console.log("Tranfrom String : " , fn(str));
// console.log("function : " , fn.name);
// }
// transform("Ram Ram bhai saare n" , upperfirstWord)
// transform("Ram Ram bhai saare n" , oneWord)


// // js uses callbacks all the time 
// function HI(){
//     console.log('HI');
// }


// ['radhika' , 'goutam'  ,'waghe'].forEach(HI)


// /* function retern a function */

// const greet = function(greeting){
//  return function(name){
// }   
// }

// // const Hero = greet('Hello')
// // Hero('goutam')

// greet('hellow')('raja')

// // const fun1 = (greeting) =>{
// //     return (name) => {
// //         console.log(`${greeting} ${name}`);

// //     }

// // }


// this keyword 
const AIRINDIA = {
    airline: 'Air india' ,
    iataCode : 'AF' ,
    booking : [] ,
    book(name , flightnum ){
        console.log(`${name} booked seat on ${this.airline} flight ${this.iataCode}${flightnum} `);
        this.booking.push({flight :` ${this.iataCode}${flightnum}` , name })
        console.log(this.booking);
    }
    ,

}

// AIRINDIA.book('goutam waghe' ,342)
// console.log(AIRINDIA);
// 

IndianAirlines = {
    name : 'Indian Air Lines' ,
    iataCode: 'AS' , 
    booking: []
}
// 
// AIRINDIA.book('gajraj' , 943)
const book = AIRINDIA.book ;

book.call( IndianAirlines, 'goutam' , 323)