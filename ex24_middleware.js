// ex24_middleware.js
const http = require('http'), express = require('express');
// const path = require('path')
const app = express()
app.set('port', 5555)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, 'public')))

// 1. 전역 미들웨어 => 라우터 전에 배치
app.use((req, res, next) => {
    console.log('1. 미들웨어 요청 처리...')
    next(); // 다음 미들웨어로 넘김
})

app.use((req, res, next) => {
    console.log('2. 미들웨어 요청 처리...')
    req.user = 'Hong'
    next();
})

app.use((req, res, next) => {
    console.log('3. 미들웨어 요청 처리...')
    next();
})

function auth(req, res, next) {
    console.log('auth 미들웨어 들어옴')
    if (!req.headers || !req.headers.authorization) {
        res.writeHead(401, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(`<h1 style='color:red'>${req.user}는 인증받지 않은 사용자 - 접근 불가</h1>`);
    }
    next();
}

// 라우팅
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write(`<h2 style='color:green'>${req.user}</h2>`);
    res.write(`<h1>/로 요청 들어옴</h1>`);
    if (req.user == "Hong") throw new Error('Hong은 접근 불가')
    res.end();
});

// 2. 라우터 미들웨어 설정
app.get('/mypage', auth, (req, res) => {
    console.log(req.url, req.method)
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write(`<h1>MyPage</h1>`)
    res.write(`<h2>회원 인증을 거쳐야 들어오는 페이지입니다.</h2>`)
    res.end();
})

// 3. 에러처리 미들웨어
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).end('<h1 style="color:orange">Server Error</h1>')
})

http.createServer(app)
    .listen(app.get('port'), () => {
        console.log(`http://localhost:${app.get('port')}`)
    })