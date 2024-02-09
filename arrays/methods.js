let arr = [0,1 ,2 ,3 ,4  ,  5 , 6, 7] ;





// ________at 

// get last element 

console.log(arr);
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));




// __________JOIN :_ not change original array
// console.log(arr.join('_'));
// console.log(arr);
// // concat::
//  let conc = ['g' ,'o' ,'u' ,'t' ,'a' ,'m'] 
//  let conc2 = ['l' , 'o' ,'v' ,'e' , 's'] 
//  let conc3 =['n', 'a' ,'n' ,'d' ,'i' ,'n' , 'i'] 
 
 
//  let conc4 = ['g' ,'o' ,'u' ,'t' ,'a' ,'m'] 
//  let conc5 = ['l' , 'o' ,'v' ,'e' , 's'] 
//  let conc6 =['n', 'a' ,'n' ,'d' ,'i' ,'n' , 'i'] 

//  conc.concat(conc2)
// console.log(conc.concat(conc2 , conc3 ,conc4 , conc5 , conc6));
// console.log(conc);
// console.log(conc2);
// console.log(conc3);

// console.log([...conc  , ...conc2 , ...conc3]);


// __________reverse_________
// ::change Original array
// let arrr = arr.reverse()
// console.log(arr);
// console.log(arrr);

//------------slice()
// not change original array 

// let arr1 = arr ;
// let arr2 = [...arr]
// let arr3 = arr.slice()

let arrnew  = arr.slice(2 ,4 )   //[2 ,3]
let arrnew2  = arr.slice(-2)   //[6 ,7]
let arrnew3 = arr.slice(1 ,-2)   //[6 ,7]
// console.log(arrnew);
// console.log(arrnew2);
arr.push(8) 
// console.log("new");
// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


// splice

// const arr5 = arr.splice(index , deletecount , "replaceitm1" , )
// console.log(arr.splice(2));

// const arr6 = arr.splice(1 ,5)
// const arr7 = arr.splice(1 ,1 , 'a')
// console.log(arr7);
// console.log(arr);


