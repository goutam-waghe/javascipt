// const promiseone = new Promise(function(resolve , reject){
//     setTimeout(function(){
// console.log('promise ban gya');
// resolve()
// } , 1000)
// })

// promiseone.then(
//     function(){
//         console.log('done');
//     }
// )
// const promise = new Promise(function(resolve , reject){
// setTimeout(() => {
//     resolve("main hu giyan")
// }, 1000);
// })
// const promisethree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = false ;
//         if(!error){
//             resolve({username:'goutam'  , age:22})
//         } else{
//             reject('ERROR : something went wrong !')
//         }

//     }, 1000)
// })

// promisethree.then(function(user){
// console.log(user);
// return user.username
// }).then(function(user){
//     console.log(user);
// }).catch(function(error){
//     console.log(error);

// }).finally(() => console.log('complete'))


// const promisefour = new Promise(function(resolve , reject){
// setTimeout(() => {
//     let error = true;
//     if(!error){
//         resolve({username:'nandini'  , age:16})
//     } else{
//         reject('ERROR : something went wrong !')
//     }
// }, 1000);
// })

// async function comsumePromise(){
//     try {
//         const Responce = await promisefour ;
//     console.log(Responce);
//     } catch (error) {
//         console.log(error);
//     }
// }
// comsumePromise()



// async function getdata(){
//   try {  const responce = await fetch('https://api.github.com/users/hiteshchoudhary')
//   const data = await responce.json()
//   console.log(data);
 
    
//   } catch (error) {
//     console.log("Error" , error);
//   }
// }
// getdata()

fetch('https://api.github.com/users/hiteshchoudhary').then((respo) =>{

return  respo.json()
}).then((data) => {
    console.log(data);
}).catch((e) => console.log(e))