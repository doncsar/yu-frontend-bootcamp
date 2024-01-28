const buttonColors = ['red', 'blue', 'green', 'yellow']
// let randomChosenColor = buttonColors[nextSequence]
const gamePattern = []

function nextSequence() {
   const randomNum = Math.floor(Math.random() * 4)   
   // return randomNum1
}

let randomChosenColor = buttonColors[nextSequence]
gamePattern.push(randomChosenColor)
console.log(gamePattern);
function simonFlow() {
   nextSequence()
}

$('.btn').on('click', simonFlow)