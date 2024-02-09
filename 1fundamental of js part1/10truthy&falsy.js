//truthy and falsy values

// 5 FALSY VALUES : 0 , false , undefined , "" , NaN , null
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean({}));
console.log(Boolean("goutam"));

let money = 10;
//js itself convert to boolean we do not need to do it manualy
if (money) {
  console.log(`don't spend it all`);
} else {
  console.log(`u need to earn`);
}

//one more use case of falsy value : the variable is difined or not
//its is not make any sense it has use case with logical operator which we see in nexr lesssions
let height = undefined;
if (height) {
  console.log(`YAY height is difind`);
} else console.log(`height is undifind`);
