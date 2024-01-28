$('h1').addClass('big-title m-50')

$('h1').on('mouseover', function () {
   $(this).text('Good Bye')
})
   
$('h1').on('mouseout', function () {
   $(this).text('Hello again')
})

$('button')