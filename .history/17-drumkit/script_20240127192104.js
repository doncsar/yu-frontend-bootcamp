const drums = document.querySelectorAll('.drum')

function handleCLick() {
   const drumSound = new Audio('resources/sounds/snare.mp3')
   drumSound.play()
}
console.log(drums);

drums.forEach(drum => drum.addEventListener('click', handleCLick))