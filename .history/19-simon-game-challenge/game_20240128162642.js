const buttonColors = ['red', 'blue', 'green', 'yellow']
// let randomChosenColor = buttonColors[nextSequence]
const gamePattern = []

function nextSequence() {
   const randomNum = Math.floor(Math.random() * 4)   
   return randomNum
}

let randomChosenColor = buttonColors[nextSequence]
function simonFlow() {
   gamePattern.push(randomChosenColor)
   nextSequence()
   console.log(gamePattern);
}

$('.btn').on('click', simonFlow)