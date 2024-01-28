const buttonColors = ['red', 'blue', 'green', 'yellow']
// let randomChosenColor = buttonColors[nextSequence]
const gamePattern = []

function nextSequence() {
   const randomNum = Math.floor(Math.random() * 4)
   console.log(randomNum)
   return randomNum
}

function simonFlow() {
   let randomChosenColor = buttonColors[nextSequence]
   gamePattern.push(randomChosenColor)   
}

$('.btn').on('click', nextSequence)