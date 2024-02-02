import EventEmitter from 'events'

//create class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter()

//event listener
myEmitter.on('event', () => console.log('Event!'))

// init event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')