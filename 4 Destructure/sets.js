const Orderset = new Set([ 'momos' , 'pizza' , 'maggie' , 'kachori' , 'momos'])
Orderset.add('pasta')
// console.log(Orderset.has('kachor'))
// console.log(Orderset.delete('pizza'))
// Orderset.clear('momos')
// console.log(Orderset[0]) set me index nhi hote

for(const item of Orderset)console.log(item);


const staff = ['waiter' , 'cheif' , 'manager' , 'waiter' ]
// console.log(typeof staff);
const uniqueStaff = [...new Set(staff)]
console.log( new Set(['waiter' , 'cheif' , 'manager' , 'waiter' ]).size);
console.log(uniqueStaff);

console.log(new Set('goutamwaghe').size);
// console.log(Orderset);

