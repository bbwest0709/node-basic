// ex10_file.js
// 파일쓰기 : writeFileSync() / writeFile()
const fs = require("fs")
let data = "HOW ARE YOU? 반갑습니다"
fs.writeFileSync("result.txt", data)
console.log("파일쓰기 완료 result.txt파일 확인 바람")

// 비동기 방식
fs.writeFile("result2.txt", data, "utf-8", (err) => {
    if (err) {
        console.log("파일 쓰기 중 에러", errMessage)
        return;
    }
})