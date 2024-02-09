'use strict'
const scoreEl0 = document.querySelector('.score-0');
const scoreEl1 = document.querySelector('.score-1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('#h2');
const btnnew = document.querySelector('#h1');
const btnhold = document.querySelector('#h3');
const victory = document.querySelector('#h4');
const player0 = document.querySelector('#box0');
const player1 = document.querySelector('#box1');
// const currentScoreEL0 = document.querySelector('#current__score0');
// const currentScoreEL1 = document.querySelector('#current__score1');
let playing = true ;
//strating conditions

victory.classList.add('victory') ;
const scores = [0 ,0]
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;

const switchPalyer = () => {
  currentScore = 0 ;
  document.querySelector(`#current__score${activePlayer}`).textContent  = currentScore ;
  activePlayer = activePlayer === 0 ? 1: 0;
  player0.classList.toggle('active--player');
  player1.classList.toggle('active--player');

}
btnRoll.addEventListener('click' , ()=>{
 if(playing){
  const dice = Math.trunc(Math.random()*6)+1 ;
  // console.log(dice);
  diceEl.classList.remove('hidden') ;
  diceEl.src = `dice-${dice}.png`

  if(dice !== 1){
    currentScore += dice ;

    document.querySelector(`#current__score${activePlayer}`).textContent  = currentScore ;



  } else {
switchPalyer();
  }

 }
})

btnhold.addEventListener("click" , () => {
 if(playing){
  scores[activePlayer] += currentScore ; 
  document.querySelector(`.score-${activePlayer}`).textContent = scores[activePlayer] ;

  if(scores[activePlayer]>=100 ){
    playing = false ;
victory.classList.remove('victory') ;

    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('active--player')
  } else {
    switchPalyer();
 }

 }
})


btnnew.addEventListener('click' , () => {
  activePlayer = 0;
diceEl.classList.add('hidden');
victory.classList.add('victory') ;
playing = true
currentScore = 0;
scores[0] = 0;
scores[1] = 0;
document.querySelector(`#current__score0`).textContent  = currentScore ;
document.querySelector(`#current__score1`).textContent  = currentScore ;
scoreEl0.textContent  = currentScore ;
document.querySelector(`.score-1`).textContent  = currentScore ;
document.querySelector(`.player--0`).classList.remove('player--winner')
document.querySelector(`.player--1`).classList.remove('player--winner')
document.querySelector(`.player--0`).classList.add('active--player')
document.querySelector(`.player--1`).classList.remove('active--player')

})






