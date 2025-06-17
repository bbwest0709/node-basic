// path 모듈 : 파일의 경로 처리 기능 제공
// path.set : OS의 파일 경로 구분자
// join() : 경로를 결합
// resolve(경로) : 주어진 경로를 절대 경로 변환
// dirname(경로) : 주어진 경로에서 파일 이름을 제외한 디렉토리 경로만 반환
// basename(경로) : 파일명 반환(확장자 포함)
// extname(경로) : 확장자 반환
const path = require('path');

console.log("***************")

// 경로 구분자 확인
console.log('Path Separator:', path.sep);

// 경로 결합
const filePath = path.join('folder', 'subfolder', 'file.txt');
console.log('Joined Path:', filePath);

// 절대 경로로 변환
const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
console.log('Absolute Path:', absolutePath);

// 디렉토리 경로만 추출
const dirPath = path.dirname('/folder/subfolder/file.txt');
console.log('Directory Path:', dirPath);

// 파일명 추출
const baseName = path.basename('/folder/subfolder/file.txt');
console.log('Base Name:', baseName);

// 파일명에서 확장자 제외
const baseNameWithoutExt = path.basename('/folder/subfolder/file.txt', '.txt');
console.log('Base Name without Ext:', baseNameWithoutExt);

// 확장자 추출
const extName = path.extname('/folder/subfolder/file.txt');
console.log('Extension Name:', extName);

console.log("***************")

const dirs = ['C:', 'ezen', 'node-basic']
const dirStr = dirs.join(path.sep)
console.log(dirStr)
console.log(__dirname)
console.log(path.join(__dirname, 'public', 'pizzaUI.html'))

const curPath = path.join(__dirname, 'public', 'pizzaUI.html')
// curPath 파일명 제외한 상위 경로
const upDir = path.dirname(curPath)
console.log(upDir)
const fname = path.basename(curPath)
console.log(fname)
const ext = path.extname(curPath)
console.log(ext)
const filePath2 = '/home/user/project/file.txt'
// 2단계 상위 디렉토리 얻어오기
const str = path.join(filePath2, '..', '..')
console.log(str)
console.log(path.resolve(str)) // 주어진 경로를 절대 경로로 반환