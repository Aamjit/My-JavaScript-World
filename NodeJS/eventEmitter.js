const EventEmitter = require('events');
const { emit } = require('process');
const eventEmitter = new EventEmitter();

const emitEvent = () => {
        eventEmitter.on('emitter',()=>{
        console.log("Event has been emitted");
    });

    eventEmitter.emit('emitter');
}

// export default emitEvent;

module.exports = { emitEvent }