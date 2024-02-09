console.log(23 == 23.0);
console.log(0.1 + 0.2);

// conversing 
console.log(Number("23"));
console.log(+"23");


// parsing 
console.log(Number.parseInt("30px" , 10 ));
console.log(Number.parseInt("E3" , 10 ));


console.log(Number.parseFloat("2.5rem"));
console.log(Number.parseInt("2.5rem"));

console.log(Number.isNaN(20));
console.log(Number.isNaN("20px"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23/0));