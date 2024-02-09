"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNum);
let score = 20;
document.querySelector("#score span").textContent = score;
let highscore = 0;

const Message = (message) => {
  return (document.querySelector(".left h2").textContent = message);
};

document.querySelector("#check").addEventListener("click", () => {
  const guess = Number(document.querySelector("input").value);
  if (!guess) {
    Message("No Number");
  } else if (guess < 0 || guess > 20) {
    // document.querySelector('.left h2').textContent = 'please Enter btw 1 to 20'
    Message("please Enter btw 1 to 20");
  } else if (guess !== secretNum) {
    if (score > 1) {
      Message(guess > secretNum ? "too High!" : "too low!");
      score--;
      document.querySelector("#score span").textContent = score;
    } else {
      Message("You lost the game!");
      document.querySelector("#score span").textContent = 0;
    }
  } else if (guess === secretNum) {
    Message("Correct Number 🎉🎉");
    document.querySelector("body").style.backgroundColor = "#f7b801";
    document.querySelector(".guessNumber").style.width = "200px";
    document.querySelector(".guessNumber").textContent = secretNum;
    if (score > highscore) {
      highscore = score;
      document.querySelector("#highscore span").textContent = highscore;
    }
  }
});
document.querySelector("#Again").addEventListener("click", () => {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#001524";
  document.querySelector(".guessNumber").textContent = "?";
  document.querySelector("input").value = "";
  document.querySelector(".guessNumber").style.width = "100px";
  Message("start Guessing....");
  document.querySelector("#score span").textContent = score;
});
