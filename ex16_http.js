// ex16_http.js
const http = require('http')

http.createServer((req, res) => {
    const uri = req.url
    if (uri == '/') {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
        res.write(`
            <ul>
                <li><a href='/hi'>Hi</a></li>
                <li><a href='/hello'>Hello</a></li>
            </ul>
            `)
        res.end();
    } else if (uri == '/hi') {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
        res.write(`
            <style>
                body { font-family: Arial, sans-serif; }
                h1 { color: green; }
            </style>
            <h1>Hi Node.js~</h1>
            <a href='/'>home</a>
        `)
        res.end();
    } else if (uri == '/hello') {
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
        res.write(`
            <style>
                body { font-family: Arial, sans-serif; }
                h1 { color: red; }
            </style>
            <h1>Hello Node.js~</h1>
            <a href='/'>home</a>
        `)
        res.end();
    }

}).listen(5555, () => {
    console.log(`http://localhost:5555`)
})