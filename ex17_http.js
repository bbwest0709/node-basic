// ex17_http.js
const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
        res.write(`<a href='/public/pizzaUI.html'><h1>피자 주문하기</h1></a>`)
        res.end();

        const filename = path.join('public', 'pizzaUI.html')
        console.log(filename) // 상대 경로
        console.log(path.resolve(filename)) // 절대 경로

    } else if (req.url === '/public/pizzaUI.html') {
        const filePath = path.join(__dirname, 'public', 'pizzaUI.html')

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-type': 'text/html; charset=utf-8' });
                res.write('<h1>파일을 찾을 수 없습니다</h1>')
                res.end(); // end() 호출되면 응답 전송이 완료되므로 더이상 데이터 쓰기 불가능
            } else {
                res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
                res.end(data);
            }
        })
    } else {
        res.writeHead(404, { 'Content-type': 'text/html; charset=utf-8' });
        res.write('<h1>404 - 페이지를 찾을 수 없습니다</h1>');
        res.end();
    }
}).listen(5555, () => {
    console.log('http://localhost:5555');
})