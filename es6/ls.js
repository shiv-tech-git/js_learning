const fs = require('fs')

// fs.readdir(__dirname, function(err, files){ 
//     if(err) return console.error("Can't read directory")
//     console.log(`Content of the directory ${__dirname}: `)
//     console.log(files.map(f => '\t' + f).join('\n'))
// })

// fs.readdir('data', function(err, files) {
//     if(err) {
//         console.error("Read directory error")
//         process.exit(1)
//     }
//     const txtFiles = files.filter(f => /\.txt$/i.test(f))
//     if(txtFiles.length === 0) {
//         console.log("txt files haven't been found")
//         process.exit(0)
//     }
// })