const os = require('os')
// gets user info
const user = os.userInfo()
console.log(user)
// return system uptime in secs
console.log(os.uptime())

// info about current system
const currentos = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentos)

module.exports = { user, currentos }