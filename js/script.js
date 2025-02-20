// Select dom elements

const countdownEl = document.getElementById("countdown")
const numbersEl = document.getElementById("numbers-list")
const formEl = document.getElementById("answers-form")


let timer = 5;

// create countdown function

const countdownId = setInterval(function () {

  timer--
  countdownEl.innerText = timer;

  if (timer === 0) {
    clearInterval(countdownId)
  }
}, 1000)

