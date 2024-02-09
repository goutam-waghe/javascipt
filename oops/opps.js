const user = {
    userName: "Goutam" ,
    age : 22 ,
    details: function(){
        console.log(`userName : ${this.userName}`);
        console.log(this);//pura object
    }

}

console.log(user.userName);
console.log(user.details());
// console.log(this);

// # constructor function
// const promise = new Promise();
// const date = new Date()

function user2(userName ,  loginCount  , isLoggedIn){
    this.userName = userName ;
    this.isLoggedIn = isLoggedIn ;
    this.loginCount = loginCount
//  return this bydefault 
}
const userOne =  new user2("goutam" , 2 , true) ;
const userTwo = new  user2("nandini" , 3 , true);
console.log(userOne);