//we use $ to select an element as we would
//document.querySelector in jQuery

//we use 'on' to set eventListeners
$('h1').on('mouseover', function () {
   $(this).addClass('big-title')
   $(this).text('Good Bye')
})

$('h1').on('mouseout', function () {
   $(this).text('Hello again')
})

//the tag text works on one ore more elements as selected
$('button').text("c'mon, click me")
$('button').click(() => $('h1').css())

///using the attr method to manipulate the tags attributes

$('img').attr('alt', 'jquery logo')
const anchorHref = $('a').attr('href')
console.log(anchorHref) // to show the element
//to add element
$('a').attr('href', 'http://www.google.com/')
$('a').text('Google')

//removing attribute using val() or removeAttr()
// $('input[type="checkbox"]').removeAttr('checked')
// $('input[name="newsletter"]').val(true)

//challenge 1
$(document).on('keypress', (e) => $('h1').text(e.key))

//appending children

$('h1').before('<button>New</button>')
$('h1').after('<button>New</button>')
//the next two will inset the elements inside the selected element
$('h1').append('<button>New</button>')
$('h1').prepend('<button>New</button>')
