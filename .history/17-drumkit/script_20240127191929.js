const drums = document.querySelectorAll('.drum')

function handleCLick() {
   const drumSound = new Audio('/17-drumkit/resources/sounds/snare.mp3')
   drumSound.pla
}
console.log(drums);

drums.forEach(drum => drum.addEventListener('click', handleCLick))