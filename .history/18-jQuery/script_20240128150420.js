//we use $ to select an element as we would
//document.querySelector in jQuery
$('h1').addClass('big-title m-50')


//we use 'on' to set event listeners 
$('h1').on('mouseover', function () {
   $(this).text('Good Bye')
})
   
$('h1').on('mouseout', function () {
   $(this).text('Hello again')
})

$('button').text("c'mon, click me")

///using the attr method to manipulate the tags attributes

$('img').attr