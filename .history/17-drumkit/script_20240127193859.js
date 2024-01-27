const drums = document.querySelectorAll('.drum')

function handleCLick() {
   let buttonInnerHTML = this.innerHTML;   
   this.style.color = 'red'
   setTimeout(() => this.style.color = '#da0463', 500)
   switch (buttonInnerHTML) {
      case 'w':
         // drumSound.play()
         // const drumSound = new Audio('resources/sounds/tom-1.mp3')                  
         break;
   
      default:
         break;
   }

}

drums.forEach(drum => drum.addEventListener('click', handleCLick))