const http = require('http')
const formidable = require('formidable')
const fs = require('fs')

http.createServer((req, res)=>{
    if (req.url == '/fileupload'){
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files)=>{
            const oldpath = files.filetoupload.path;
            const newpath = 'C:/Users/win10/fileupload연습/'+files.filetoupload.name;
            fs.rename(oldpath, newpath, (err)=>{
                if (err) throw err;
                res.write('File uploaded and moved !')
                res.end();
            })
        })
    } else {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<form action="fileupload" method="POST" enctype="multipart/form-data"> ')
        // 파일선택 버튼
        res.write('<input type= "file" name="filetoupload"><br>')
        // 제출 버튼
        res.write('<input type="submit">')
        res.write('</form>')
        return res.end()
    }
    
}).listen(8080, ()=>{
    console.log('Server is running  ...')
})