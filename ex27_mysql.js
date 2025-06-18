// ex27_mysql.js
// mysql2 모듈 설치 -> Promise를 지원  async / await 사용 가능
// npm i mysql ==> callback fn -> 이제 더는 지원하지 않는 방식
// npm install mysql2 ==> Promise 방식

const express = require('express')
const mysql = require('mysql')
// DB 연결 정보 ==> .env
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'ezen',
    password: '1234',
    database: 'eduDB'
});

// DB 연결
conn.connect((err) => {
    if (err) {
        console.error('MySQL 연결 시도 중 에러 : ', err);
        return;
    }
    console.log('MySQL에 성공적으로 연결됐어요');
});

// 쿼리 실행
conn.query('select * from members order by id desc', (err, result) => {
    if (err) {
        console.error('쿼리 실행 에러: ', err)
        return;
    }
    console.log(result)
})

conn.end();