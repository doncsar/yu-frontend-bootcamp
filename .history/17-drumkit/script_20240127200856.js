const drums = document.querySelectorAll('.drum')

function handleClick(buttonInnerHTML) {
   buttonInnerHTML = this.innerHTML
   this.style.color = 'red'
   setTimeout(() => (this.style.color = '#da0463'), 500)
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
         console.log('Not a valid key');
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
