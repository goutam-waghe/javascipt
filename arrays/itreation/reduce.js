const arr = [1 ,2 ,3 , 4]

// reduce : reduce ek hi value return krta hai jo operarion se return hokr aai hai , ye ek callback leta hai jisme 4 parameter hote hai
// accumalater :iski initial value apko deni hoti bad me ye se kisi opration se change hoti rehti hai 
// currentvalue
// currentIndex 
// array 
// syntax 
let initialVal = 0
const myTotal = arr.reduce(function(acc , cv){
return acc + cv 
} , initialVal)
console.log(myTotal);



const shopingKart = [
    {
    course : 'java Script' ,
    price : 999
    } ,
    {
    course : 'App Development' ,
    price : 5999
    } ,
    {
    course : 'DSA' ,
    price : 4999
    } ,
    {
    course : 'Python' ,
    price : 1600
    } ,
    {
    course : 'Data Science' ,
    price : 20000
    } 
]



const Payment = shopingKart.reduce((acc , cv , index ) => {
    return acc + cv.price

} , 0)
console.log(Payment);