// //basic explanations

// //common js
// // const Person = require('./person')
// //const logger = require('.//logger')

// //es module
// import Person from './person.js'

// const person = new Person('Jack', 30)

// person.greetings()

// //logger
// import Logger from './logger.js'

// const logger = new Logger()

// logger.on('message', (data) => console.log('Called listener: ',data))
// logger.log('Hello world!')

// //test 2
// import http from 'http'
// import path from 'path'
// import fs from 'fs'

// const localDir = process.cwd()

// const server = http.createServer((req, res) => {
//    //this wont work, because it doesn't know how to handle css, images or anything like that
//    // if (req.url === '/') {
//    //    fs.readFile(
//    //       path.join(localDir, 'public', 'index.html'),
//    //       (err, content) => {
//    //          if (err) throw err
//    //          res.writeHead(200, { 'Content-Type': 'text/html' })
//    //          res.end(content)
//    //       }
//    //    )
//    // }
//    // if (req.url === '/about') {
//    //    fs.readFile(
//    //       path.join(localDir, 'public', 'about.html'),
//    //       (err, content) => {
//    //          if (err) throw err
//    //          res.writeHead(200, { 'Content-Type': 'text/html' })
//    //          res.end(content)
//    //       }
//    //    )
//    // }

//    //this is the normal work on node, fetching an api, since we're not looking for one right now we are emulating one with the USERS variable
//    // if (req.url === '/api/users') {
//    //    const users = [
//    //       { id: 1, name: 'John Doe' },
//    //       { id: 2, name: 'Jane Doe' },
//    //       { id: 3, name: 'Jack Doe' },
//    //       { id: 4, name: 'Jimmothy Doe' },
//    //    ]
//    //    res.writeHead(200, { 'Content-Type': 'application/json' })
//    //    res.end(JSON.stringify(users))
//    // }

//    //build it write: dynamic file path
//    let filePath = path.join(
//       localDir,
//       'public',
//       req.url === '/' ? 'index.html' : req.url.slice(1)
//    )
//    console.log(req.url)

//    //find the file extension
//    let extname = path.extname(filePath)
//    //initial content type
//    let contentType = 'text/html'
//    //check the extension to set content type
//    switch (extname) {
//       case '.js':
//          contentType = 'application/javascript'
//          break
//       case '.css':
//          contentType = 'text/css'
//          break
//       case '.png':
//          contentType = 'image/png'
//          break
//       case '.svg':
//          contentType = 'image/svg+xml'
//          break
//       case '.jpg':
//          contentType = 'image/jpeg'
//          break
//    }

//    //Read file
//    fs.readFile(filePath, (err, data) => {
//       if (err) {
//          if (err.code === 'ENOENT') {
//             console.log(err)
//             fs.readFile(
//                path.join(localDir, 'public', '404.html'),
//                (err, data) => {
//                   res.writeHead(200, { 'Content-Type': 'text/html' })
//                   res.end(data, 'utf8')
//                }
//             )
//          } else {
//             //some other server error
//             res.writeHead(500)
//             res.end(`Server Error: ${err.code}`)
//          }
//       } else {
//          //success
//          res.writeHead(200, { 'Content-Type': contentType })
//          res.end(data, 'utf8')
//       }
//    })
// })

// const PORT = process.env.PORT || 5500

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`))


//test 3
import http from 'http'
import path from 'path'
import fs from 'fs'

const PORT = process.env.PORT || 5500
const PUBLIC_DIR = path.join(process.cwd(), 'public')

const server = http.createServer((req, res) => {
   const { url } = req
   let filePath

   if (url === '/') {
      filePath = path.join(PUBLIC_DIR, 'index.html')
   } else if (url === '/about') {
      filePath = path.join(PUBLIC_DIR, 'about.html')
   } else {
      filePath = path.join(PUBLIC_DIR, url.slice(1))
   }

   // Determine content type based on file extension
   const contentType = getContentType(filePath)

   fs.readFile(filePath, (err, data) => {
      if (err) {
         if (err.code === 'ENOENT') {
            // Handle 404 Not Found
            return serveErrorPage(res, 404, 'Not Found')
         } else {
            // Handle other server errors
            return serveErrorPage(res, 500, 'Server Error')
         }
      }

      // Serve the file with the correct content type
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(data, 'utf8')
   })
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

function getContentType(filePath) {
   const ext = path.extname(filePath).toLowerCase()
   const contentTypeMap = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.json': 'application/json',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
   }
   return contentTypeMap[ext] || 'application/octet-stream'
}

function serveErrorPage(res, statusCode, message) {
   const errorPagePath = path.join(PUBLIC_DIR, '404.html')
   fs.readFile(errorPagePath, (err, data) => {
      if (err) {
         res.writeHead(500, { 'Content-Type': 'text/plain' })
         res.end('Internal Server Error')
      } else {
         res.writeHead(statusCode, { 'Content-Type': 'text/html' })
         res.end(data, 'utf8')
      }
   })
}
