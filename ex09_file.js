// 내장 모듈 파일 시스템 모듈 사용해보기
const fs = require("fs")
// 파일을 읽고 쓰기 할 때 사용
// 1. 동기 방식으로 파일을 읽을 경우
const data = fs.readFileSync('package.json', "utf-8");
console.log(data);
console.log("Bye Bye~~");

// 22 비동기 방식으로 파일을 읽는 경우 : readFile(파일명, 인코딩, 콜백함수)
fs.readFile("ex01_global.js", "utf-8", function (err, data) {
    if (err) throw err; // 오류 처리
    console.log(data); // 파일 내용 출력
});

console.log("---비동기 방식으로 파일 읽기 종료---");
console.log("Bye Bye");