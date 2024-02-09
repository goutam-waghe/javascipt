// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall.
// GOOD LUCK 
const mark = {
    fullName : 'mark miller',
    height : 1.69 , 
    mass : 78 ,
    calcIbm: function() {
        this.markIBM = this.mass /(this.height * this.height);
        return this.markIBM
    }
}
const john = {
    fullName: 'john smith' ,
    height : 1.95 , 
    mass : 92 , 
    calcIbm : function() {
        this.johnIBM = this.mass /(this.height * this.height) ;
        return  this.johnIBM ;
    }
}
john.calcIbm() ;
mark.calcIbm() ;

console.log(mark.markIBM);
console.log(john.johnIBM);



if( john.johnIBM > mark.markIBM ){
    console.log(`${john.fullName} has the higher IBM ${john.calcIbm()} then the ${mark.fullName} IBM ${mark.calcIbm()}  `);
} else {
    console.log(`${mark.fullName} has the higher IBM ${mark.calcIbm()} then the ${john.fullName} IBM ${john.calcIbm()}  `);
}

