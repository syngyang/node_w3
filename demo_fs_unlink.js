const fs = require('fs')

// fs.unlink() method deletes the specified file:
// There was a file, "mynew_unlink.txt".

fs.unlink('mynew_unlink.txt', (err)=>{
    if (err) throw err;
    console.log('file deleted !')
})