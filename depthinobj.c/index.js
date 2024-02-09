// objects
const property = 'LastName' ;
const val  = 'waghe'
const obj = {
    firstName : 'goutam' ,
    [property] : val ,
    age : 22 ,
    "my friends": ['raja bhiya' , 'tharun']

    
}
const fun = function(a){
delete a ;
return a;
}(5);

// delete obj.age
// console.log(obj);
// console.log(fun);
// console.log(obj["my friends"]);
// delete obj["my friends"]

for( key in obj){
    console.log(key +  '=>' + obj[key] );
}


//if you one key then pehle wali overide kr di jayegi

const Question1 = {
    a : "one" ,
    b : "two" ,
    a : "three" ,
}
console.log(Question1);
// Question 2
// create a function multiby2  that multiply all numeric values by 2 in given obj

const Question2 = {
    a : 100 ,
    b:200 , 
    title : 'MY NMS'
}
multiby2(Question2)

function multiby2(obj){
for(key in obj){
    
    if(typeof obj[key] == "number" ){
        obj[key] *= 2
    }
}
}

console.log( Question2); 

// question 3 output of this question

const P = {}
const Q = {
    key : 'Q'
}
const R = {
    key : 'R'
}
P[Q] = 123 ;
P[R] = 456 ;
console.log(P[Q]);
console.log(P);

// qouestion 4  whats the json.signify and json.parse

const user = {
    name : 'goutam' , 
    age : 22
}
const strobj = JSON.stringify(user) ;
console.log( JSON.parse(strobj));

// Question5 
console.log([..."Nandini"]);


// Question6
const user1 = {
    name: "goutam" ,
    age:22
}
const admin = {
    admin : true ,
    ...user1
}
console.log(admin);
const setting = {
    userName: 'goutam',
     level :22 ,
    helth : 90
}
const data = JSON.stringify(setting ,["level" , "helth"]);
console.log(data);

//Question 11 

let c = {
    greting :"hellow"}
let d ;
d = c ;
c.greting = 'namste';
console.log(d.greting);

// Qotion 12 
console.log({a :1 } == {a : 1});
// console.log({a :1 } === {a : 1});
// Question13

let person = {
    name:'nandini' , 
};
const mumba = [person];//mumba[0]
// person = null
person.name = null
console.log(mumba);