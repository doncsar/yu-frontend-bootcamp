function nextSequence() {
   const randomNum = (Math.random()) * 3
   console.log(randomNum)
}

$('.btn').on('click', nextSequence)