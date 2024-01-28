const drums = document.querySelectorAll('.drum')

function makeSound(key) {
   if (buttonInnerHTML.type === 'click') {
      buttonInnerHTML = this.innerHTML
      let drumSound
   switch (key) {
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
         break
   }
   drumSound.play()
}

function handleKeyDown(e) {
   const key = e.key.toLowerCase()
   const validKeys = ['w', 'a', 's', 'd', 'j', 'k', 'l']

   if (validKeys.includes(key)) {
      makeSound(key)
   }
}

document.addEventListener('keydown', handleKeyDown)

drums.forEach((drum) => drum.addEventListener('click', makeSound))
