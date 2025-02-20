// Select dom elements

const countdownEl = document.getElementById("countdown")
const numbersEl = document.getElementById("numbers-list")
const formEl = document.getElementById("answers-form")


let timer = 30;

// create countdown function

const countdownId = setInterval(function () {

  timer--
  countdownEl.innerText = timer;

  if (timer === 0) {
    clearInterval(countdownId)
  }
}, 1000)

// create 5 numbers array function

function generateFiveNums() {
  const numList = []
  for (let i = 0; i < 5; i++) {
    let thisNum = i
    thisNum = Math.floor(Math.random() * 9) + 1;
    numList.push(thisNum)
  }
  return numList
}



