const movements = [200 , 400 ,  900 , -200 , 300 , -250]

// movements.forEach((movement , index , arr) => {
//     if(movement > 0){console.log(` ${index} you deposite ${movement}`);
// } else{ console.log(`you withdrol ${Math.abs(movement)}`);}
    
// });
//0 : fun(200)
//1 : fun(400)
//2 : fun(900)
//3 : fun(-200)


const map = new Map([['Name' , 'goutam'],
['Age' , 22],
['friends' , ['radhika' , 'Aditya' ,'mohit']],


])
// map 
// console.log(map);

map.forEach(( val , key ,arr) => {
    console.log(`keys:${key} \n val:${val} \n arr : ${arr}`);
})

// set : set main keys nhi hoti hai 
const set  = new Set([ 'momos' , 'pizza' , 'maggie' , 'kachori' , 'momos'])
console.log(set);
set.forEach((val , _ , set) => {
    console.log(`keys:${key} \n val:${val} \n arr : ${set}`);
})