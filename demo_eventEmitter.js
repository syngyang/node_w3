const events = require('events')

const eventEmitter = new events.EventEmitter()

// create an event handler
const myEventHandler = ()=>{
    console.log(' I hear a scream!')
}

//Assign the event handler to an event
eventEmitter.on('scream', myEventHandler);

//fire the 'scream' event
eventEmitter.emit('scream')

