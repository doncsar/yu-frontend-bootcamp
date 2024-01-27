const drums = document.querySelectorAll('.drum')

function handleCLick() {
   let buttonInnerHTML = this.innerHTML;
   // const drumSound = new Audio('resources/sounds/tom-1.mp3')
   // drumSound.play()
}
console.log(drums);

drums.forEach(drum => drum.addEventListener('click', handleCLick))