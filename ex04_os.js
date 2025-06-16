// ex04_os.js
// os모듈(내장모듈)
const os = require('os')
console.log("OS 시스템의 타입: %s", os.type())
console.log("시스템의 호스트명: %s", os.hostname())
console.log("시스템의 메모리: %d bytes / %d bytes", os.freemem(), os.totalmem())

// 바이트를 KB로 변환
const freeMemoryInMB = os.freemem() / (1024 * 1024)
const totalMemoryInMB = os.totalmem() / (1024 * 1024)

console.log("시스템의 메모리: %d MB / %d MB", freeMemoryInMB.toFixed(2), totalMemoryInMB.toFixed(2))
console.log("시스템의 메모리: %d GB / %d GB", (freeMemoryInMB / 1024).toFixed(1), (totalMemoryInMB / 1024).toFixed(1))

console.log("------CPU 정보------")
console.dir(os.cpus().length) // cpu 코어 수 반환
console.log(os.cpus())
console.log("------시스템의 네트워크 정보------")
console.dir(os.networkInterfaces())