const fs = require('fs')

// The fs.writeFile() method replaces the specified file and content if it exists. 
//If the file does not exist, a new file, containing the specified content, will be created:

fs.writeFile('mynew_writeFile.txt', 'Hello Content!', (err)=>{
    if (err) throw err;
    console.log('writeFile Saved.')
})