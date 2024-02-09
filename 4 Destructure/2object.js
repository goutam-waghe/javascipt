const crush = {
  name: "vandini",
  age: 17,
  city: "indore",
};
const restourant = {
  name: "WAGHEJI",
  location: "Vijay nagar Indore",
  // inhence obj litrales
  crush: "nandini panjre",
  openigHours: {
    mon: {
      open: "5 am",
      closed: "10pm",
    },
    wed: {
      open: "5 am",
      closed: "10pm",
    },
    fri: {
      open: "5 am",
      closed: "10pm",
    },
  },
  categaries: ["rajsthani", "gujrati", "south Indian", "bangali"],
  mainMenu: ["dal Tadka", "jira Rise", "lachha parata", "paneer"],
  Order: function (cate, menu) {
    return [this.categaries[cate], this.mainMenu[menu]];
  },
  // enhancement
  // Order(cate , menu) {
  //     return [this.categaries[cate] , this.mainMenu[menu]] ;
  // }
};

console.log(restourant);
const { name, location, openigHours } = restourant;
// console.log(name  , location ,     openigHours);
const { name: HotelName, location: place } = restourant;
// console.log(HotelName ,place );

// default value
const { menu = [], mainMenu: manu = [] } = restourant;
//  console.log(menu ,manu );

//  mutating value
let a = 121;
let b = 212;
const obj = { a: 21, b: 32, c: 42 };
({ a, b } = obj);
// console.log(a , b);

//nested
const {
  fri: { open: start },
} = openigHours;
// console.log(start);
