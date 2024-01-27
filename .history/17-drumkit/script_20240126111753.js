const drums = [...document.querySelectorAll('button')]

function handleCLick() {
   console.log('badumtss');
}
console.log(drums);

drums.forEach(drum => drum.addEventListener('click', handleCLick))