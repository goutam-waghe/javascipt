const btn = document.querySelector("#button");
const copy = document.querySelector('#copyimg'); 
const generatedPass = document.querySelector('#passwordinput') ;
const length = 12


const number ='0123456789' ;
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
const  lowercase ='abcdefghijklmnopqrstvwxyz';
const symbol =  '$@#?$#&?/'
const allchar =lowercase + symbol + uppercase + number ;
// console.log(allchar);


function creatpass(){
let password = "" ;
while(length > password.length)
{
    password += allchar[Math.floor(Math.random()*allchar.length)]
    
}
generatedPass.value = password ;
// console.log(password);

}

btn.addEventListener('click' , () =>{
    creatpass();
    // console.log('yes');
})
copy.addEventListener('click' ,() => {
    generatedPass.select();
    document.execCommand("copy")
})