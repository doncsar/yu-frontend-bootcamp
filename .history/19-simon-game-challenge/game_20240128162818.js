const buttonColors = ['red', 'blue', 'green', 'yellow']
// let randomChosenColor = buttonColors[nextSequence]
const gamePattern = []

function nextSequence() {
   const randomNum = Math.floor(Math.random() * 4)   
   // return randomNum1
}

let randomChosenColor = buttonColors[nextSequence]
gamePattern.push(randomChosenColor)
function simonFlow() {
   nextSequence()
   console.log(gamePattern);
}

$('.btn').on('click', simonFlow)