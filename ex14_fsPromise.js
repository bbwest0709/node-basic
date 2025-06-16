// promise 활용하여 읽기
// promise방식을 이용하면 콜백 방식이 아닌 프로미스 방식으로 처리하므로 직관적이고 깔끔함
const fs = require('fs').promises;
// const { promises: fs } = require('fs');

console.log('[start]')

fs.readFile('ex04_os.js')
    .then((data) => {
        // Promise 체이닝 사용 가능
        console.log(data.toString())
        return fs.readFile('out.txt')
    })
    .then((data2) => {
        console.log("*****************")
        console.log(data2.toString())
    })
    .catch((err) => console.error(err))

console.log('[end]')
console.log("*** Promise 방식으로 Copy ***")

fs.copyFile('ex05_module.js', 'copy2.txt')
    .then(() => {
        console.log("복사 완료")
    })
    .catch(console.log)

async function fileCopy(src, desc) {
    try {
        await fs.copyFile(src, desc)
        console.log(src + '복사 성공', desc)
    } catch (err) {
        console.error('복사 실패', err)
    }
}

fileCopy('캡처.JPG', 'herimg.jpg')