const fs = require('fs')
// fs.rename() method renames the specified file:

fs.rename('mynewfile1.txt', 'mynew_renamed.txt', (err)=>{
    if(err) throw err;
    console.log('renamed !!')
})