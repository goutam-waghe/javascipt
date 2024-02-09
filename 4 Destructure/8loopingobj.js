const openHours = {
    MON :{
        open : 10 ,
        closed: 0
    } ,
    wed :{
        open : 10 ,
        closed: 22
    } ,
    sat :{
        open : 10 ,
        closed: 23
    }
}

const properties = Object.keys(openHours)//it will return array
// console.log(properties);

let openStr = `we are open on ${properties.length}`
for(const day of properties){
    openStr += `${day} ,`
}
// console.log(openStr);


let values = Object.values(openHours)
// console.log(values);//it will return array 


let entries = Object.entries(openHours)
console.log(entries);



for([key ,values] of entries ){

    console.log(key );
}
