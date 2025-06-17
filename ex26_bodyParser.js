const express = require('express');
const app = express();
const path = require('path')
require('dotenv').config();
const port = process.env.PORT || 3333

// 미들웨어 설정
// extended : true 주면 qs 모듈 이용해서 파싱, false 주면 querystring 모듈 사용
app.use(express.urlencoded({ extended: true })) // POST 폼 데이터 파싱
app.use(express.json()) // json 요청 바디 파싱

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.get('/login', (req, res) => {
    const { nick, password } = req.query
    res.send(`<h2>GET 방식 로그인 요청 : req.query </h2><p>닉네임: ${nick}</p><p>비밀번호: ${password}</p>`);
})

app.post('/login', (req, res) => {
    const { nick, password } = req.body;
    res.send(`<h2>POST 방식 로그인 요청 : req.body </h2><p>닉네임: ${nick}</p><p>비밀번호: ${password}</p>`);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})