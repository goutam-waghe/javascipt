// spread operator  right side hai isliye spread 
const arr = [5 ,6 ,7] ;
console.log(...arr);
const arr2 = [1 , 2,3 , 4 , ...arr] 
console.log(arr2);

// join 2 arrY
const citiesInMp = ["ujjain" , "indore" , "barwani" , "bhopal"]
const OutsideCities = ["banglore" , "pune" , "lakhnau" , "Hydrabad"]
const Allcities = [...citiesInMp , ...OutsideCities]
console.log(Allcities);


// copy Array 
const Favcities = [...citiesInMp]
citiesInMp.push("khargone");
console.log(citiesInMp);
console.log(Favcities);
 
// spread operator sabhi ittrebles ke sath kam karta hai
// string , filter , map , set But not in objects
const str = "JOnus" ;
console.log([...str , ' ' ,"S." ]);


function orderChai(ing1  , ing2 , ing3){
    return `Your chai is Ready with ${ing1} , ${ing2} & ${ing3}`
}


// const ingridents = [
//     prompt("CHAI WALE ! Ing 1 ?") ,
//     prompt(" Ing 2 ?") ,
//     prompt("Ing 3 ?")
// ]

// console.log(orderChai(...ingridents)) ;

// 2018 se spread Object me bhi kam karta hai 
const WAGHEJI = {
    Name : "wagheJI" ,
    location : "vijay nagar indore" ,
    categories :['vag' , 'nonVag'] , 
    openingHours :{
        open:11  ,
        close:24
    }

}
const newHotel = {
    founded : "2025" , 
    ...WAGHEJI , 
    founder :"Goutam waghe"
}
console.log(newHotel);
// left side hai isliye rest 
const [a , b, ...others] = [1 ,2 ,3  ,4 ,5 ,6 ,7,8]
// console.log(a ,b , others);


myObj = {
    Name:"goutam waghe" ,
    Age: 22  ,

    friends: ['radhika' , 'mohit' , 'Aditya' , 'Sam'] , 
    
}
// console.log(myObj);

const {Name, ...rest} = myObj
console.log( rest);

//function 


function add(...num){
    console.log(num);
let sum = 0 ; 
for(let i = 0  ; i < num.length ; i++){
    sum += num[i];
    
}
console.log(sum); 
}

add(1 ,2 ,3 ,4 ,5)
add(6, 9 , 5)