// ex23_middleware.js
const express = require('express')
const app = express()
const path = require('path')
app.set('port', 7777)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

/**
 * 요청과 응답 사이에 추가적인 기능을 하는 중간 작업을 하고자 할 때 미들웨어를 사용한다.
 * app.use(미들웨어) : 모든 요청에서 미들웨어 실행
 * app.use('/path', 미들웨어) : 특정 경로로 시작하는 요청에서 미들웨어 실행
 * app.post('/path', 미들웨어) : 특정 경로의 post방식 요청에서 미들웨어 실행
 */
const myLogger = function (req, res, next) {
    console.log('요청 경로: ' + req.url + ' , 요청 메서드: ' + req.method)
    next()
}

// 미들웨어 설정 - 로깅 미들웨어
app.use(myLogger)

// 라우터
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/users', (req, res) => {
    res.send('모든 회원 목록')
})

app.get('/join', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'join.html'));
});

// app.post('/join', 미들웨어, 콜백함수)
app.post('/join', (req, res) => {
    const { username, email } = req.body;
    res.send(`회원가입 정보 수신됨: 아이디 ${username}, 이메일 ${email}`);
})

app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`)
})