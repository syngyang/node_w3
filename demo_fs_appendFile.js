const fs = require('fs')
// The fs.appendFile() method appends the specified content 
//  at the end of the specified file:

fs.appendFile('mynew_appendFile.txt', 'This is my text.', (err)=>{
    if (err) throw err;
    console.log('appendFile 2nd Saved')
})