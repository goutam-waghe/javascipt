const AirLine = 'INDIAN AIRLINES INDIA'
const plane  ='A216'


console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B029'[3]);


console.log(plane.length);
console.log(AirLine.length);

console.log(AirLine.indexOf("L"));
console.log(AirLine.indexOf("INDIA"));
console.log(AirLine.charAt(3/*index*/));
console.log(AirLine.slice(1/*index*/));
console.log(AirLine.slice(7 , 15/*not include */));//second para include nhi hota hia 
console.log(AirLine.slice(0 , AirLine.indexOf(' ')));
console.log(AirLine.slice( AirLine.lastIndexOf(' ')));
console.log(AirLine.slice(-5));

const checKseat = (seat) => {
const S = seat.slice(-1)

    if(S == "C" || S == "B" ){
        console.log('you got middle seat🫤');
    } else console.log('you got lucky seat🥳');
}
checKseat('12C')  
checKseat('93A')
checKseat('31A')

const passenger = 'GoUTam';
const newpassenger = passenger.toUpperCase()
const newpassenger2 = passenger.toLowerCase()
console.log(newpassenger2);
console.log(newpassenger);
const email = '                  HELLO@gmail.com         '
updateEmail =  email.toLowerCase().trim()
console.log(email);
console.log(updateEmail);

const pricers = '288,97rs'
console.log(pricers);
const priceus  = pricers.replace('rs' , '$').replace(',' , '.');
console.log(priceus);

const announcement = 'All passenger come to boarding door 23. BOarding door 23' 
console.log(announcement.replace('door' , 'gate'));
console.log(announcement.replace(/door/g, 'gate'));
console.log(announcement);


// booleans
const planeNum = 'AirBus A015'
console.log(planeNum.includes('A015'));

console.log(planeNum.includes('bus'));

console.log(planeNum.startsWith('Air'));

 if(planeNum.startsWith('Air') && planeNum.endsWith(15))
 {
    console.log('evening flight');
 }


 console.log('i+love+you'.split('+'));


 const [fistName , lastName] ='Goutam waghe'.split(' ')
  
 const newName = ['MR.' , fistName.toUpperCase() , lastName.toUpperCase()].join(" ")
 console.log(newName);


 const capital = function(name) {
const names = name.split(' ')
const camelCase = []

for(const n of names){
    camelCase.push(n[0].toUpperCase()+n.slice(1)) 
 }

 console.log(camelCase.join(' '));


 }
 capital("nandini panjre")


//  PADDING
const Message = 'Go to gate 23'
console.log(Message.padStart(25, '+'));
console.log(Message.padEnd(25, '+'));

function creaditcard(num){
const newnum = num.slice(-4).padStart(num.length , '*')
console.log(newnum);
}

creaditcard('7852564652120')

