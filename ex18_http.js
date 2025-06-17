const http = require('http')
const fs = require('fs').promises
const path = require('path')
// npm install 설치할 모듈
// npm i -D nodemon
// npx nodemon ex18_http.js
http.createServer(async (req, res) => {
    if (req.url == '/') {
        const filename = path.join('public', 'tourSample.html')
        try {
            const data = await fs.readFile(filename, 'utf-8')
            res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
            res.end(data);
        } catch (error) {
            console.error(error)
            res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' })
            res.end(error.message);
        }
    }

}).listen(3333, () => {
    console.log(`http://localhost:3333`)
});