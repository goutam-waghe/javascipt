const resto = new Map()
resto.set("Name", "goutam waghe")
resto.set('age' ,22)
resto.set('gf', false)


resto.set('friends' , ['radhika' , 'Mohit' , 'Aaditya']).set('school' , "school of excellance").set(1. ,"lmda").set(true , 'avaible :)').set(false , 'Not Avilable :<').set("open" , 10).set('closed' , 22)

// console.log(resto)

console.log(resto.get("Name"));
// // console.log(resto.get("age"));
// // console.log(resto.get(1));
// // console.log(resto.get(true));


// const time = 21 ;
// console.log(resto.get(time> resto.get("open") && time < resto.get("closed")) )
// console.log(resto.has("age"));
// resto.delete("open")

// console.log(resto.size);
// resto.clear()
// // console.log(resto);


// NEW WAY TO SETting value of map 
const question = new Map([
    ['question' , 'what is the best programing language'],
    [1  , 'javascript'], 
    [2  , 'c'], 
    [3 , 'cpp'], 
    [4  , 'try Again'], 
    [5  , 'correct'], 
])
console.log(question);
// covert obj to map

const info = {
    Name:'goutam' ,
    Age:22,
    friends: {
        1 : "radhika" ,
        2 :"Mohit"
    }
}

console.log(Object.entries(info));
const infoMap = new Map(Object.entries(info))
console.log(infoMap);
console.log(infoMap.get("friends")[2])


// qiuz app 
// convert map to array 
// console.log(...question);
const MYarr = [...question]
console.log(MYarr);
