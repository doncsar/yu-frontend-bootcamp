import fs from 'fs'
import inquirer from 'inquirer'
import qr from 'qr-image'

// Using Inquirer  to get URL
inquirer
   .prompt([
      {
         type: 'input',
         name: 'url',
         message: 'Enter the URL:',
      },
   ])
   .then((answers) => {
      const { url } = answers
      generateQRCodeAndTxt(url)
   })
   .catch((error) => {
      if (error.isTtyError) {
         console.error("Prompt couldn't be rendered in the current environment")
      } else {
         console.error('Something went wrong:', error)
      }
   })


// Function to generate QR code image and save it to a file
function generateQRCodeAndTxt(url) {
   // Generate QR code image
   const qrImage = qr.image(url)
   qrImage.pipe(fs.createWriteStream('qrcode.png'))

   // Write URL to a text file with fs.writeFile
   fs.writeFile('url.txt', url, (err) => {
      if (err) {
         console.error('Error writing URL to file:', err)
      } else {
         console.log('URL saved to url.txt')
      }
   })
}

