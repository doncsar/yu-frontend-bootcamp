const buttonColors = ['red', 'blue', 'green', 'yellow']
let randomChosenColor = buttonColors[nextSequence]
game

function nextSequence() {
   const randomNum = Math.floor(Math.random() * 4)
   console.log(randomNum)
   return randomNum
}

$('.btn').on('click', nextSequence)