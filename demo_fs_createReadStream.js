const fs = require('fs')

// 'demofile.txt' 파일이 있어야 실행 됨

const rs = fs.createReadStream('./demofile.txt');
rs.on('open', ()=>{
    console.log('The file is open')
})