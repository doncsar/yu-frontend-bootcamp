import fs from 'fs'
import path from 'path'
const __dirname = process.cwd() //cause __dirname don't work with es-module

//create folder
fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
   if (err) throw err
   console.log('folder created successfully')
})

//create and write to file (overwrites anything if there is an existing file)
fs.writeFile(
   path.join(__dirname, '/test', 'hello.txt'),
   'hello world from node js and traversy media',
   (err) => {
      if (err) throw err
      console.log('file written to successfully')

      //adding content to file
      fs.appendFile(
         path.join(__dirname, '/test', 'hello.txt'),
         'hello world from node js and traversy media',
         (err) => {
            if (err) throw err
            console.log('file written to successfully')
         }
      )
   }
)

//read file
fs.readFile(
   path.join(__dirname, '/test', 'hello.txt'),
   'utf-8',
   (err, data) => {
      if (err) throw err
      console.log(data)
   }
)

// Rename file
fs.rename(
   path.join(__dirname, 'test', 'hello.txt'),
   path.join(__dirname, 'test', 'helloworld.txt'),
   (err) => {
      if (err) throw err
      console.log('File renamed')
   }
)
