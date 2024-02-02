import EventEmitter from 'events'
import { v4, v5, stringify } from 'uuid'

export default class Logger extends EventEmitter {
   log(msg) {
      //call event
      this.emit('message', { id: v4(), msg })
   }
}