const fs = require('fs');
const copy = function (src, dest) {
    const readStream = fs.createReadStream(src) // 원본 파일명 => 읽는 스트림 연결
    const writeStream = fs.createWriteStream(dest);

    // 읽기 스트림(Readable Stream)과 쓰기 스트림(Writable Stream)을 연결해서 데이터를 자동으로 전달해주는 역할
    readStream.pipe(writeStream);
    console.log("파일 카피 중")
}
console.log("복사 시작");
// copy("ex03_process.js", 'copy.txt');
copy('캡처.JPG', 'myimg.JPG')
console.log("복사 완료");

// 파일 압축시 사용할 모듈
const zlib = require('zlib')

fs.createReadStream('out.txt')
    .pipe(zlib.createGzip()) // gzip 압축 -> 단일 파일 압축 zip 압축 여러 파일과 폴더 압축. zip은 외부 라이브러리 필요
    .pipe(fs.createWriteStream('yourimg.gz'))
    .on('finish', () => {
        console.log('파일 압축 완료')
    })