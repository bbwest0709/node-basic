//  ex22_router.js
/**
 * express 모듈 이용해서
 * get '/' index.html 보여주기
 * get 'users' => 모든 회원 목록 보여주기 <h1>모든 회원 목록</h1> 출력
 * 그 외 나머지 경로 '*' => <h1>해당 페이지는 없습니다</h1> 출력
 */
const express = require('express')
const path = require('path')
const app = express();

app.set('port', 9090)

// public 폴더 내에 정적인 파일들(이미지, html, css, js)을 넣으면 브라우저에서 접근 가능하도록 설정
// http://localhost:9090/images/clear.png -> public 포함되지 않음
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/users', (req, res) => {
    let str = `<h1> 모든 회원 목록 </h1>
    <ul>
        <li><a href='/users/1'>1번 : 홍길동</a></li>
        <li><a href='/users/2'>2번 : 최영아</a></li>
        <li><a href='/users/3'>3번 : 김철수</a></li>
    </ul>
    `
    res.send(str)
})

// path 부분에 ':파라미터명' ==> 동적 세그먼트
// req.params.파라미터명
app.get('/users/:uid', (req, res) => {
    const uid = req.params.uid;
    let str = `<h1>${uid}번 회원님의 정보</h1>
    <p>DB에서 ${uid}번 회원님의 정보를 가져와 출력할 예정입니다.</p>`
    res.send(str)
})

app.use((req, res) => {
    res.status(404).send('<h1>해당 페이지는 없습니다</h1>');
})

app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`)
})