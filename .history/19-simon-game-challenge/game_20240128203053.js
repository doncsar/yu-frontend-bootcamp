const buttonColors = ['red', 'blue', 'green', 'yellow']
const soundBoard = {
   red: 'sounds/red.mp3',
   blue: 'sounds/blue.mp3',
   green: 'sounds/green.mp3',
   yellow: 'sounds/yellow.mp3',
   wrong: 'sounds/wrong.mp3',
}
let gamePattern = []
let userClickedPattern = []
let level = 0
let started = false

function nextSequence() {
   level++
   $('h1').text(`Level ${level}`)
   const randomNum = Math.floor(Math.random() * 4)
   const randomChosenColor = buttonColors[randomNum]
   gamePattern.push(randomChosenColor)
   playSequence()
}

function playSequence() {
   gamePattern.forEach((color, index) => {
      setTimeout(() => {
         animateButton(color)
         playSound(color)
      }, 1000 * index)
   })
}

function animateButton(color) {
   $(`#${color}`)
      .addClass('pressed')
      .delay(150)
      .queue(function (next) {
         $(this).removeClass('pressed')
         next()
      })
}

function playSound(color) {
   const audio = new Audio(soundBoard[color])
   audio.play()
}

function handleClick() {
   if (!started) return
   const userChosenColor = $(this).attr('id')
   userClickedPattern.push(userChosenColor)
   animateButton(userChosenColor)
   playSound(userChosenColor)
   checkAnswer(userClickedPattern.length - 1)
}

function checkAnswer(currentLevel) {
   if (userClickedPattern[currentLevel] !== gamePattern[currentLevel]) {
      playSound('wrong')
      $('body').addClass('game-over')
      $('h1').text('Sorry, wrong answer. Press A to start over.')
      started = false
   } else if (userClickedPattern.length === gamePattern.length) {
      userClickedPattern = []
      setTimeout(nextSequence, 1000)
   }
}

function startOver() {
   gamePattern = []
   userClickedPattern = []
   level = 0
   $('h1').text('Press A to start.')
   $('body').removeClass('game-over')
}

$('.btn').on('click', handleClick)

$(document).on('keydown', function (e) {
   if (e.key === 'a' && !started) {
      started = true
      startOver()
      nextSequence()
      $('h1').text(`Level ${level}`)
   } else if (!started) {
      $('h1').text('Press A to start.')
      $('body').removeClass('game-over')
   } else {
      startOver()
      $('h1').text('Press A to start.')      
   }
})

/