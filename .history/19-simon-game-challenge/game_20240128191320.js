const buttonColors = ['red', 'blue', 'green', 'yellow']
const gamePattern = []

function nextSequence() {
   const randomNum = Math.floor(Math.random() * 4)
   const randomChosenColor = buttonColors[randomNum]
   gamePattern.push(randomChosenColor)
   console.log(gamePattern)
}

function flashButton() {
      // $(this).animate({ opacity: 0 }, 100, 'linear', function () {
      //    $(this).animate({ opacity: 1 }, 100) // Restore opacity after 100ms
   // })
   $(this).addClass('pressed')
   setTimeout(() => $(this).removeClass('pressed'), 150)
}

$('.btn').on('click', flashButton)
