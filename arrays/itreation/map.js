const arr = [1 ,2 ,3 ,4 ,5 ,6 ,7]
const rstousd = arr.map((ar) => {
   return ar * 10
})
console.log(rstousd);


const num = []
arr.forEach((nums) => {
    updateNum = nums * 10
num.push(updateNum)
})


// chaining 
const newarr = arr.map(num => num*10)
                  .map(num => num + 1)
                  .filter(num => num > 50)
                  console.log(newarr);

                  