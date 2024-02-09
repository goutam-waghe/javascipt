
//dom : document object model 
/* ye html doc ka structured representation hota hai
ye js ko html element acces krne me allow krta hai  ye entry point hota hai
jisse ki ham js se html and css ko dynamically change kr skte hai */
// document.querySelector(".box").textContent ='hey
// document.querySelector('.left h2').textContent =  '🎉Correct Number';
// document.querySelector('#score span').textContent = 20;
// document.querySelector('input').value = 23;
// document.querySelector('.guessNumber').textContent = 23;
// document.getElementById('check').addEventListener('click' , function (){
//     document.querySelector('.left h2').textContent = '🎉Correct Number';
    
// })

// document.querySelector('.left h2').textContent = 'correct number'
// document.querySelector('#score span').textContent = 20 ;
// document.querySelector('.guessNumber').textContent = 20 ;
// document.querySelector('input').value = 23 ;
//note: ham Jab bhi user interface se input lenge wo string type me hi aayega to apne ko usko number me convert krna pdega
// document.querySelector('#check').addEventListener('click' , () => {
//     const guess = Number(document.querySelector('input').value) ;
//     document.querySelector('.guessNumber').textContent = guess
//     document.querySelector('.left h2').textContent = 'correct number'
//     console.log(typeof guess)
// } )