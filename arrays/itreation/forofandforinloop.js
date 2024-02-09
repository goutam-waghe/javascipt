 let name = 'goutam'
 let obj = {
    firstName : 'nandini' ,
    age: 17  ,
    city : "indore"
 }
 let a = ['a' ,'b' ,'c' ,'d' ,'e']
 const resto = new Map()
resto.set("Name", "goutam waghe")
resto.set('age' ,22)
resto.set('gf', false)

//  for in 
 
 for(let i in obj){
    // console.log(i);
    // console.log(obj[i]);
}
for(let i in a){
   
    // console.log(i);
    // console.log(a[i]);
 }
 for( let i in name){
    // console.log(i);
    // console.log(name[i]);
 }
// for in not work on map 
//  for(let i in resto){
//     console.log(i);
//  }

// for__of_____loop 
// not work in obj 
//  for(let i of obj){
//     console.log(i);
   
//  }

//work map return array
//  for(let [key , val] of resto){
//     console.log(key , val);
   
//  }

//  for(let i of a){
//     console.log(i);
   
//  }
//  for(let i of name){
//     console.log(i);
//  }
