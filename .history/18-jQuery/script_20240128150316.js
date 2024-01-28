//we use $ to select an element as we would the larger notation
$('h1').addClass('big-title m-50')

$('h1').on('mouseover', function () {
   $(this).text('Good Bye')
})
   
$('h1').on('mouseout', function () {
   $(this).text('Hello again')
})

$('button').text("c'mon, click me")

///using the attr method to manipulate the tags attributes

$('img').attr