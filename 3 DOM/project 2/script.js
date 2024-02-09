'use strict' ;
const modal  = document.querySelector('.modal');
const overlay  = document.querySelector('.overlay'); 
const btnColseModal  = document.querySelector('.close-modal');
const btnShowModal  = document.querySelectorAll('.show-modal')  ;
// console.log(btnShowModal);
const hidden = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const showmodal = () => {
    
        modal.classList.remove('hidden');//yha pr .hidden use krenge oKK!!
        overlay.classList.remove('hidden');
    
}

for(let i = 0 ; i < btnShowModal.length ; i++)
btnShowModal[i].addEventListener('click' ,showmodal)//yha pr () use nhi krna nhi to function direct call ho jayega !!


btnColseModal.addEventListener('click' , hidden);
overlay.addEventListener('click' , hidden);

// How to respond to KeyboardEvent !!
document.addEventListener('keydown' , (event) => {
    console.log(event.key);
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        hidden();

    }
})