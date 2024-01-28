const buttonColors = ['red', 'blue', 'green', 'yellow']
let randomChosenColour = buttonColors[nextSequence]

function nextSequence() {
   const randomNum = Math.floor(Math.random() * 4)
   console.log(randomNum)
   return 
}

$('.btn').on('click', nextSequence)