// Select dom elements

const countdownEl = document.getElementById("countdown")
const numbersListEl = document.getElementById("numbers-list")
const formEl = document.getElementById("answers-form")
const instructionsEl = document.getElementById("instructions")
const inputNum1 = document.querySelector('#input-group>input:first-child')
const inputNum2 = document.querySelector('#input-group>input:nth-child(2)')
const inputNum3 = document.querySelector('#input-group>input:nth-child(3)')
const inputNum4 = document.querySelector('#input-group>input:nth-child(4)')
const inputNum5 = document.querySelector('#input-group>input:last-child')



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
  return numList
}

pushNumsToPage()

const ranNum1 = document.querySelector("#numbers-list>li:first-child")
const ranNum2 = document.querySelector('#numbers-list>li:nth-child(2)')
const ranNum3 = document.querySelector('#numbers-list>li:nth-child(3)')
const ranNum4 = document.querySelector('#numbers-list>li:nth-child(4)')
const ranNum5 = document.querySelector("#numbers-list>li:last-child")

const ranNumList = [ranNum1.innerText, ranNum2.innerText, ranNum3.innerText, ranNum4.innerText, ranNum5.innerText]




// save the input numbers into an array after the button gets clicked

formEl.addEventListener('submit', function (e) {
  e.preventDefault()
  const inputArray = [];
  inputArray.push(inputNum1.value, inputNum2.value, inputNum3.value, inputNum4.value, inputNum5.value)
  console.log(inputArray);
  let guessed_count = 0
  for (let i = 0; i < inputArray.length; i++) {
    thisNum = inputArray[i]
    if (ranNumList.includes(thisNum)) {
      guessed_count += 1
      console.log(guessed_count);

    }
  }

})











