// ex25_dotenv.js
// npm i dotenv 설치 후 .env 파일 생성
// .env.development / .env.test / .env.production 등으로 파일을 나누고 각 환경에 맞는 설정 관리 가능
/**
 * # key=value
 * PORT=5000
 * DB_URL=localhost
 * DB_PORT=3306
 * DB_NAME=testdb
 */
const express = require('express');
const app = express();

const dotenv = require('dotenv')
// dotenv 모듈 이용해서 .env파일에서 환경 변수를 로드하고 process.env 객체에 추가함
dotenv.config()
const port = process.env.PORT || 4000
const databaseUrl = process.env.DB_URL
const databaseName = process.env.DB_NAME

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
    console.log(`Database URL is : ${databaseUrl}`)
    console.log(`Database name is : ${databaseName}`)
})