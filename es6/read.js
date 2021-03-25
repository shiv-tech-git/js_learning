const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'hello.txt'), {encoding: 'utf8'}, function(err, data) {
    if(err) return console.error('Reading error')
    console.log('File contains: ')
    console.log(data)
})

