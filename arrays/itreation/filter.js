// const arr =  [200 , 210 , 12 , 263 , -2903 , 32 ,-3 ,-293]
// const newarr = arr.filter((val , index , ar)=> {
// return val > 100
// })
// console.log(newarr);

// const coding = ['js' , 'python' , 'cpp' , 'java']
// const hero = coding.forEach((val , index , arr) => {
//     console.log(index , val);
// })
// // console.log(hero);

// arr = [1 ,2  ,3 ,5,6,7]

// arr.filter(() => num>3)
const books = [
  { title: "Book One", genre: "History", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "History", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userBooks = books.filter((book) => {
  return book.genre == "History" && book.edition >= 2005;
});
console.log(userBooks);
