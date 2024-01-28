//we use $ to select an element as we would
//document.querySelector in jQuery
$('h1').addClass('big-title m-50')


//we use 'on' to set eventListeners 
$('h1').on('mouseover', function () {
   $(this).text('Good Bye')
})
   
$('h1').on('mouseout', function () {
   $(this).text('Hello again')
})

//the tag text works on one ore more elements as selected
$('button').text("c'mon, click me")

///using the attr method to manipulate the tags attributes

$('img').attr('alt', 'jquery logo')
const anchorHref = $('a').attr('href')
//to add element
$('a').attr('href', 'http://www.google.com/')
$('a').text('Google')
console.log(anchorHref)// to show the element



//removing attribute using val() or removeAttr()
$('input[type="checkbox"]').removeAttr('checked')
$('input[name="newsletter"]').val(true)