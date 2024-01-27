const drums = [...document.querySelectorAll('button')]

function handleCLick() {
   console.log('badumtss');
}

drums.forEach(drum => drum.addEventListener('click', handleCLick))