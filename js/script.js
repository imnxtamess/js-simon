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
  const numList = new Set() // creates a set of unique values
  while (numList.size < 5) { //.size is the same as length but for unique numbers
    let thisNum = Math.floor(Math.random() * 9) + 1;
    numList.add(thisNum) // add appends a new value at the end of the set
  }
  return Array.from(numList) // returns the set to an array
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

// save the random numbers in an array
const ranNum1 = document.querySelector("#numbers-list>li:first-child")
const ranNum2 = document.querySelector('#numbers-list>li:nth-child(2)')
const ranNum3 = document.querySelector('#numbers-list>li:nth-child(3)')
const ranNum4 = document.querySelector('#numbers-list>li:nth-child(4)')
const ranNum5 = document.querySelector("#numbers-list>li:last-child")

const ranNumList = [ranNum1.innerText, ranNum2.innerText, ranNum3.innerText, ranNum4.innerText, ranNum5.innerText]


console.log(ranNumList);


// save the input numbers into an array after the button gets clicked and check how many and which are correct

formEl.addEventListener('submit', function (e) {
  e.preventDefault()
  const inputArray = [];
  inputArray.push(inputNum1.value, inputNum2.value, inputNum3.value, inputNum4.value, inputNum5.value) // pushes user input numbers into the input array
  console.log(inputArray);
  let guessed_count = 0
  let guessed_list = []
  for (let i = 0; i < inputArray.length; i++) {
    thisNum = inputArray[i]
    if (ranNumList.includes(thisNum)) {
      guessed_count += 1 // adds 1 to 0 each time a number is correctly guessed by checking the random numbers list
      guessed_list.push(thisNum) // each time a number is guessed correctly it is then added to the guessed numbers list
    }
  }
  countdownEl.classList.remove("d-none")
  instructionsEl.classList.add("d-none")
  if (guessed_count > 0) {
    countdownEl.innerHTML = (`You have guessed: </br> ${guessed_count} Numbers correctly.</br> Here's a list of the correct ones: ${guessed_list}`)
  }
  else {
    countdownEl.innerHTML = ("You haven't guessed any of the numbers.</br>Try again by refreshing the page!")
  }
})











