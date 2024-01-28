const buttonColors = ['red', 'blue', 'green', 'yellow']
const gamePattern = []

function nextSequence() {
   const randomNum = Math.floor(Math.random() * 4)
   const randomChosenColor = buttonColors[randomNum]
   gamePattern.push(randomChosenColor)
   console.log(gamePattern)
}

function flashButton() {
   $(this).addClass('pressed')
   setTimeout(() => $(this).removeClass('pressed'), 150)
}

$('.btn').on('click', flashButton)
