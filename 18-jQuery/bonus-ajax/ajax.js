//create event listener
document.getElementById('btn').addEventListener('click', loadText)

function loadText() {
   // console.log('button clicked');

   //Create XHR Object
   const xhr = new XMLHttpRequest()
   //open function - type, url/file, async or not
   xhr.open('get', 'sample.txt', true)

   console.log('READYSTATE: ', xhr.readyState)
      //readystate values:
      //0- request not validated
      //1- server connection established
      //2- request received
      //3- processing request
      //4- request finished and response is ready

      // HTTP statuses
      // 200: 'OK'
      // 403: 'Forbidden'
      // 404: 'Not found'

   //OPTIONAL - used for loaders or loading
   xhr.onprogress = () => {
      console.log('READYSTATE: ', xhr.readyState)
   }

   xhr.onerror = () => { 
      console.error('request error')
   }

   //validating request
   xhr.onload = () => {
      console.log('READYSTATE: ', xhr.readyState)
      if (xhr.status == 200) {
         // console.log(xhr.responseText)
         document.getElementById('root').innerText = xhr.responseText
      } else if (xhr.status == 404) {
         document.getElementById('root').innerText = `404 - NOT FOUND`
      }
   }

   // xhr.onreadystatechange = () => {
   // console.log('READYSTATE: ', xhr.readyState)
   //    if (xhr.readyState == 4 && xhr.status == 200) {
   //          console.log(xhr.responseText)
   //    }
   // }

   //sends request
   xhr.send()
}

