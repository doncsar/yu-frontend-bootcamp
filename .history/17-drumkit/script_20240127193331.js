const drums = document.querySelectorAll('.drum')

function handleCLick() {
   let buttonId = this.innerHTML;
   console.log(buttonId);
   this.style.color = 'white'
   setTimeout((this.style.color = '#da0463'))
   // const drumSound = new Audio('resources/sounds/tom-1.mp3')
   // drumSound.play()
}
console.log(drums);

drums.forEach(drum => drum.addEventListener('click', handleCLick))