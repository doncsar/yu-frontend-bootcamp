const drums = document.querySelectorAll('.drum')

function handleCLick() {
   let buttonId = this.innerHTML;   
   this.style.color = 'red'
   setTimeout(() => this.style.color = '#da0463', 500)
   
   
   // const drumSound = new Audio('resources/sounds/tom-1.mp3')
   // drumSound.play()
}

drums.forEach(drum => drum.addEventListener('click', handleCLick))