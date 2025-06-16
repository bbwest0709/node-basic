// ex05_requre.js
const obj = require("./ex05_modul") // 확장자는 생략 가능
const obj2 = require('./sample');
/**
 * require('모듈파일명')
 * - 이 때 확장자 .js는 생략해도 된다
 * [1] require('module')하면 먼저 module.js를 찾는다.
 * [2] 해당 파일이 없으면 module이라는 디렉토리를 찾는다.
 * [3] 디렉토리가 있으면 해당 디렉토리의 index.js를 찾는다.
 */
console.log(obj.num)
obj.plus(10, 3)
obj.minus(10, 3)

obj2.gop(5, 9)
obj2.divide(64, 8)
