// ex21_express.js
// express 외장 모듈 설치해서 웹서버 구축하기
// npm install express
// http 모듈로 부족한 부분을 보완함. (라우팅, 미들웨어, 에러처리 등...)

const express = require('express')
// express 함수를 exports 하고 있음
const app = express() // 함수 내에서 객체를 반환

app.get('/', (req, res) => {
    // res.send() : 응답 본문을 전송하ㅗㄱ 상태 코드와 컨텐트 타입을 자동으로 설정하고 자동으로 종료
    // 기본 상태코드 : 200, 컨텐트 타입은 전송할 데이터 유형에 따라 자동 설정
    res.send('Wellcome to the Express server!')
})

app.get('/file', (req, res) => {
    // fs 모듈 대신 sendFile() 이용해 파일을 내보냄
    res.sendFile(__dirname + '/public/pizzaUI.html')
})

app.listen(7777, () => {
    console.log(`http://localhost:7777`)
})