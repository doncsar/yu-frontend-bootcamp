const drums = document.querySelectorAll('.drum')

function handleCLick() {
   let buttonId = this.innerHTML;
   console.log(buttonId);
   buttonId.style
   // const drumSound = new Audio('resources/sounds/tom-1.mp3')
   // drumSound.play()
}
console.log(drums);

drums.forEach(drum => drum.addEventListener('click', handleCLick))