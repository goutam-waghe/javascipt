function multiby2(val){
    this.val = val
return val * 2
}
multiby2.power = 2 ;

console.log(multiby2(5))
console.log(multiby2.power)
console.log(multiby2.prototype);


function createUser(userName ,score ){
this.userName = userName ;
this.score = score ;
}

createUser.prototype.increament = function(){
    this.score++ ;
}

const chai = createUser("chai" , 25) 
const coffe = createUser("coffe" , 100);
// sb kuch object hai in js 
// functin ---> Object ---> null 
console.log(chai);
console.log(coffe);
/* Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/