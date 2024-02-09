const input = document.querySelector("#input");
const check = document.querySelector("#checkIn");
const Again = document.querySelector("#Again");
const gessedNum = document.querySelector("#gessedNum");
const scoreupdate = document.querySelector("#score");
const highscoreupdate = document.querySelector("#highScore");
const Status = document.querySelector("#status");
let num;
let score,
  highscore = 0;
function starting() {
  num = Math.ceil(Math.random() * 20);
  //   console.log(num);
  score = 20;
  highscoreupdate.textContent = highscore;
  scoreupdate.textContent = score;
  document.body.style.backgroundColor = "#fff";
  document.querySelector("#white-line").style.backgroundColor = "#573333";

  Status.textContent = "Start Guessing...";
}
function checkedin() {
  let valInput = Number(input.value);
  if (valInput > 20 || valInput < 0 || valInput === "") {
    Status.innerHTML = "please enter btw 0 & 20";
  } else if (num === valInput) {
    Status.innerHTML = "Correct 🎉";
    document.body.style.backgroundColor = "#573333";
    document.querySelector("#white-line").style.backgroundColor = "#fff";

    gessedNum.textContent = num;
    if (highscore < score) {
      highscore = score;
      highscoreupdate.textContent = highscore;
    }
    check.removeEventListener();
  } else if (num > valInput) {
    Status.innerHTML = "too small";
  } else {
    Status.innerHTML = "too big";
  }
  score--;
  scoreupdate.textContent = score;
}
starting();
function Againupdate() {
  starting();
  input.value = "";
}
check.addEventListener("click", checkedin);

Again.addEventListener("click", Againupdate);
