const restourant = {
  name: "WAGHEJI",
  location: "Vijay nagar Indore",
  categaries: ["rajsthani", "gujrati", "south Indian", "bangali"],
  mainMenu: ["dal Tadka", "jira Rise", "lachha parata", "paneer"],
  Order: function (cate, menu) {
    return [this.categaries[cate], this.mainMenu[menu]];
  },
};
console.log("--------OR------");

// use any data type , return any data type , short circuiting
console.log(3 || "Goutam");
console.log("" || "Jonus");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || 23 || null);
restourant.guest = "21";

const guests = restourant.guest ? restourant.guest : "NO guests";

console.log(guests);

const guests2 = restourant.guest || "No guests";
console.log(guests2);

console.log("----AND----");

console.log(3 && "jonus");
console.log("" && "jonus");
// console.log(true && 0);
console.log(undefined && null);

console.log(0 && "goutam");
console.log(7 && "goutam");

console.log("hello" && 23 && "goutam" && "NUll");
