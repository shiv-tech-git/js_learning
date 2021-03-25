const fs = require('fs');

fs.writeFile(__dirname + '/hello.txt', 'Hello frome Node!', function(err) {
    if(err) return console.log('Write error');
});

