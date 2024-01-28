const buttonColors = ['red', 'blue', 'green', 'yellow']
let randomChosenColour = 

function nextSequence() {
   const randomNum = Math.floor(Math.random() * 4)
   console.log(randomNum)
}

$('.btn').on('click', nextSequence)