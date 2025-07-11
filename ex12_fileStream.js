const fs = require('fs')
const writeStream = fs.createWriteStream('out.txt', { encoding: 'utf-8' })
// binary data(이미지, 동영상) => encoding 없이 사용

// 데이터 쓰기 : write()
writeStream.write("첫 번째 줄\n") // 데이터를 스트림에 씀
writeStream.write("두 번째 줄\n")
writeStream.write("세 번째 줄\n")
writeStream.write("마지막 줄\n")

writeStream.end();

writeStream.on('finish', () => {
    console.log("out.txt에 쓰기 완료!!")
})
writeStream.on('error', (err) => {
    console.log("파일 쓰기 중 에러 발생: ", err.message)
})