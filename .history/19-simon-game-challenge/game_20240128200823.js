// const buttonColors = ['red', 'blue', 'green', 'yellow']
// const soundBoard = {
//    red: 'sounds/red.mp3',
//    blue: 'sounds/blue.mp3',
//    green: 'sounds/green.mp3',
//    yellow: 'sounds/yellow.mp3',
//    wrong: 'sounds/wrong.mp3'
// }
// const gamePattern = []
// const userClickedPattern = []

// function nextSequence() {
//    const randomNum = Math.floor(Math.random() * 4)
//    const randomChosenColor = buttonColors[randomNum]
//    gamePattern.push(randomChosenColor)
//    console.log(gamePattern)
// }

// function handleClick() {
//    $(this).addClass('pressed')
//    setTimeout(() => $(this).removeClass('pressed'), 150)

//    // Play the sound corresponding to the color
//    const color = $(this).attr('id')
//    const audio = new Audio(soundBoard[color])
//    audio.play()
// }

// $('.btn').on('click', handleClick)


//chat gpt answer

// Define the available button colors and their corresponding sound files
const buttonColors = ['red', 'blue', 'green', 'yellow'];
const soundBoard = {
   red: 'sounds/red.mp3',
   blue: 'sounds/blue.mp3',
   green: 'sounds/green.mp3',
   yellow: 'sounds/yellow.mp3',
   wrong: 'sounds/wrong.mp3'
};

// Initialize arrays to store the game pattern and the user's clicked pattern
const gamePattern = [];
const userClickedPattern = [];

// Variable to track if the game has started and the current level
let started = false;
let level = 0;

// Function to generate the next color in the game pattern
function nextSequence() {
   const randomNum = Math.floor(Math.random() * 4);
   const randomChosenColor = buttonColors[randomNum];
   gamePattern.push(randomChosenColor);
   console.log(gamePattern);

   // Update the level name and start playing the sequence
   level++;
   $('h1').text(`Level ${level}`);
   playSequence();
}

// Function to play the sequence of colors and sounds
function playSequence() {
   for (let i = 0; i < gamePattern.length; i++) {
      setTimeout(() => {
         animateButton(gamePattern[i]);
         playSound(gamePattern[i]);
      }, 1000 * i);
   }
}

// Function to animate a button
function animateButton(color) {
   $(`#${color}`).addClass('pressed');
   setTimeout(() => $(`#${color}`).removeClass('pressed'), 150);
}

// Function to play a sound
function playSound(color) {
   const audio = new Audio(soundBoard[color]);
   audio.play();
}

// Function to handle button clicks
function handleClick() {
   if (!started) return; // Disable click if the game hasn't started
   const userChosenColor = $(this).attr('id');
   userClickedPattern.push(userChosenColor);
   animateButton(userChosenColor);
   playSound(userChosenColor);

   // Check the user's answer
   checkAnswer(userClickedPattern.length - 1);
}

// Function to check the user's answer
function checkAnswer(currentLevel) {
   if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length) {
         userClickedPattern.length = 0;
         setTimeout(nextSequence, 1000);
      }
   } else {
      // If the user's answer is wrong, play the wrong sound, show game over message, and disable click
      playSound('wrong');
      $('body').addClass('game-over');
      $('h1').text('Sorry, wrong answer. Press any key to start over.');
      started = false;
   }
}

// Function to reset the game
function startOver() {
   gamePattern.splice(0, gamePattern.length)
   userClickedPattern.splice(0, userClickedPattern.length)
   level = 0;
   $('h1').text('Press A to start.');
   $('body').removeClass('game-over')
}

// Event listener for button clicks
$('.btn').on('click', handleClick);

// Event listener for keydown
$(document).on('keydown', function(e) {
   if (e.key === 'a' && !started) {
      // Start the game when 'A' key is pressed
      started = true;
      level = 0; // Reset the level
      nextSequence();
   } else if (started) {
      return
   } else {
      // Reset the game if it's already started
      startOver();
   }
});
