function nextSequence() {
   const randomNum = (Math.random()) * 3
   return randomNum
}

$('button').on('click', nextSequence)