const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5555;

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const pool = mysql.createPool({
    host: 'localhost',
    user: 'ezen',
    password: '1234',
    database: 'eduDB',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

// 회원가입
app.post('/api/users', async (req, res) => {
    // Post 방식 = req/bpdy, Get 방식 = req.query, '/api/users/100' ==> req.params
    const { name, email, passwd } = req.body;
    console.log(name, email, passwd)
    // 유효성 체크(not null 제약 조건을 가진 필드들)
    if (!name || !email || !passwd) {
        return res.status(400).json({
            result: 'fail',
            message: '이름, 이메일, 비밀번호는 필수 입력입니다.'
        })
    }
    try {
        const sql = 'INSERT INTO members(name, email, passwd) VALUES(?,?,?)'
        const [result] = await pool.execute(sql, [name, email, passwd])
        console.log('INSERT 결과: ', result)
        res.json({ result: 'success', message: '회원가입 완료, 로그인 하세요' })
    } catch (error) {
        console.error('회원가입 DB 에러: ', error)
        res.status(500).send({ error: '회원가입 중 오류가 발생했습니다.' });
    }
})

app.get('/members', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM members ORDER BY id DESC');
        res.json(rows);  // JSON 형식으로 응답
    } catch (err) {
        console.error('DB 쿼리 에러:', err);
        res.status(500).send('DB 에러 발생');
    }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})