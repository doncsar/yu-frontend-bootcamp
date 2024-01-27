const drums = document.querySelectorAll('.drum')

function handleClick(buttonInnerHTML) {
   if (!buttonInnerHTML) {
      buttonInnerHTML = this.innerHTML
   }
   let drumSound
   switch (buttonInnerHTML) {
      case 'w':
         drumSound = new Audio('resources/sounds/tom-1.mp3')
         break
      case 'a':
         drumSound = new Audio('resources/sounds/tom-2.mp3')
         break
      case 's':
         drumSound = new Audio('resources/sounds/tom-3.mp3')
         break
      case 'd':
         drumSound = new Audio('resources/sounds/tom-4.mp3')
         break
      case 'j':
         drumSound = new Audio('resources/sounds/snare.mp3')
         break
      case 'k':
         drumSound = new Audio('resources/sounds/crash.mp3')
         break
      case 'l':
         drumSound = new Audio('resources/sounds/kick-bass.mp3')
         break
      default:
         rfeturb
         break
   }
   drumSound.play()
}

function handleKeyDown(event) {
   const key = event.key.toLowerCase()
   const validKeys = ['w', 'a', 's', 'd', 'j', 'k', 'l']

   if (validKeys.includes(key)) {
      // Call handleClick function with the key value
      handleClick(key)
   }
}

document.addEventListener('keydown', handleKeyDown)

drums.forEach((drum) => drum.addEventListener('click', handleClick))
