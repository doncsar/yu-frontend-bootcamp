const buttonColors = ['red', 'blue', 'green', 'yellow']
const soundBoard = {
   red: 'sounds/red.mp3',
   blue: 'sounds/blue.mp3',
   green: 'sounds/green.mp3',
   yellow: 'sounds/yellow.mp3',
   wrong: 'sounds/wrong.mp3'
}
const gamePattern = []
const use

function nextSequence() {
   const randomNum = Math.floor(Math.random() * 4)
   const randomChosenColor = buttonColors[randomNum]
   gamePattern.push(randomChosenColor)
   console.log(gamePattern)
}

function flashButton() {
   $(this).addClass('pressed')
   setTimeout(() => $(this).removeClass('pressed'), 150)

   // Play the sound corresponding to the color
   const color = $(this).attr('id')
   const audio = new Audio(soundBoard[color])
   audio.play()
}

$('.btn').on('click', flashButton)