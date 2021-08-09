const fs = require('fs')

fs.open('mynewopen.txt', 'w', (err, file)=> {
    if (err) throw err;
    console.log('Saved empty!')
})