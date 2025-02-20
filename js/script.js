// Select dom elements

const countdownEl = document.getElementById("countdown")
const numbersEl = document.getElementById("numbers-list")
const formEl = document.getElementById("answers-form")


let timer = 30;

// create countdown function

const countdownId = setInterval(function () {
  timer--
  countdownEl.innerText = timer;
}, 1000)

