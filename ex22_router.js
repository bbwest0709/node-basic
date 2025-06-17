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

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/users', (req, res) => {
    res.send('<h1>모든 회원 목록</h1>')
})

app.use((req, res) => {
    res.status(404).send('<h1>해당 페이지는 없습니다</h1>');
});

app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`)
})