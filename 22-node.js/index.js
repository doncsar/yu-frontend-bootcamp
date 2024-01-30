const fs = require('fs');
// const path = require('path');
// const { promisify } = require('util');

// fs.writeFile('message.txt', 'Hello world from node.js', (err) => {
//    if (err) console.error('something went wrong: ', err)

//    console.log('file was saved');
// })

// Append content to the file
fs.appendFile('message.txt', '\nHello from Angela or Whatever your name is', (err) => {
   if (err) {
      console.error('Error appending to the file:', err);
      return;
   }

   console.log('Content appended to the file');
});

// Read the updated contents of the file and log them
fs.readFile('message.txt', 'utf8', (err, data) => {
   if (err) {
      console.error('Error reading the file:', err);
      return;
   }

   console.log('File contents:', data);
});