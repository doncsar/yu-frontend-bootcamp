const drums = document.querySelectorAll('.drum')

function handleCLick() {
   console.log('badumtss');
}
console.log(drums);

drums.forEach(drum => drum.addEventListener('click', handleCLick))