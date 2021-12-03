
const path = require('path')

const pathInfo = () =>{
    console.log(path.win32)
    
    const filepath = path.join('/content', 'subfolder', 'test.txt')
    console.log(filepath)

}

module.exports = { pathInfo };