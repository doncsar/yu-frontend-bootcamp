const drums = document.querySelectorAll('.drum')

function handleCLick() {
   let buttonInnerHTML = this.innerHTML
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
      case 'a':
         drumSound = new Audio('resources/sounds/tom-2.mp3')
         break
      case 'a':
         drumSound = new Audio('resources/sounds/tom-2.mp3')
         break
      case 'a':
         drumSound = new Audio('resources/sounds/tom-2.mp3')
         break
      case 'a':
         drumSound = new Audio('resources/sounds/tom-2.mp3')
         break
      case 'a':
         drumSound = new Audio('resources/sounds/tom-2.mp3')
         break
      case 'a':
         drumSound = new Audio('resources/sounds/tom-2.mp3')
         break

      default:
         break
   }
   drumSound.play()
}

drums.forEach((drum) => drum.addEventListener('click', handleCLick))
