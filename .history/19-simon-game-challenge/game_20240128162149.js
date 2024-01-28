const buttonColors = ['red', 'blue', 'green', 'yellow']
let randomChosenColor = buttonColors[nextSequence]
const gamePattern = []

function nextSequence() {
   const randomNum = Math.floor(Math.random() * 4)
   console.log(randomNum)
   return randomNum
}

functio

$('.btn').on('click', nextSequence)