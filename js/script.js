// Select dom elements

const countdownEl = document.getElementById("countdown")
const numbersListEl = document.getElementById("numbers-list")
const formEl = document.getElementById("answers-form")
const instructionsEl = document.getElementById("instructions")


let timer = 3;

// create countdown function

const countdownId = setInterval(function () {

  timer--
  countdownEl.innerText = timer;

  if (timer === 0) {
    clearInterval(countdownId)
    countdownEl.classList.add('d-none') // when the timer reaches 0 add class d-none to timer
    numbersListEl.classList.add('d-none') // when timer reaches 0 add class d-none to numbersListEl
    formEl.classList.remove('d-none') // when the timer reaches 0 the form appears
    instructionsEl.innerText = "Scrivi nelle apposite caselle i 5 numeri!"
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

// push the fiveNums to the html page function

function pushNumsToPage() {
  const numList = generateFiveNums()
  for (let i = 0; i < numList.length; i++) {
    thisNum = numList[i];
    numbersListEl.insertAdjacentHTML('beforeend', `<li>${thisNum}</li>`)
  }
}

pushNumsToPage()












