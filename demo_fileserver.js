const http = require('http')
const url = require('url')
const fs = require('fs')

// 브라우저 창에 확장자 까지 입력, http://localhost:8080/summer.html

http.createServer((req, res)=> {
    const q = url.parse(req.url, true);
    const filename = `.${q.pathname}`;

    fs.readFile(filename, (err, data)=>{
        if(err) {
            res.writeHead(404, {'Content-Type':'text/html'})
            return res.end( "404 Not Found")
        }
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end()
    })

}).listen(8080, ()=>{
    console.log("Server is running ...")
})