// 'use strict';

const restourant = {
  name: "WAGHEJI",
  location: "Vijay nagar Indore",
  categaries: ["rajsthani", "gujrati", "south Indian", "bangali"],
  mainMenu: ["dal Tadka", "jira Rise", "lachha parata", "paneer"],
  Order: function (cate, menu) {
    return [this.categaries[cate], this.mainMenu[menu]];
  },
};

const arr = [1, 2, 3];
// const a = [0]
// const b = [1]
// const c = [2]

const [a, b, c] = arr;
console.log(a, b, c);

let [x, , y] = arr;
console.log(x, y);
[x, , y] = restourant.mainMenu;
console.log(x, y);

//function

const [cate, menu] = restourant.Order(1, 2);
// console.log(cate, menu);

// swap value

let p = 10,
  q = 5;
// console.log(p , q);
[p, q] = [q, p];
// console.log(p , q);

//nested
const nested = [1, 2, [3, 4]];
[x, , [y, p]] = nested;
console.log(x, y);

// default
const [e = 1, f = 1, g = 1] = [2, , 3];
console.log(e, f, g);
