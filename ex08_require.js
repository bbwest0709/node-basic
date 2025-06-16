const obj = require("./sample2")
console.log(obj.calc.plus(2, 8)) // 속성에 함수 할당
console.log(obj.calc.minus(5, 2)) // 함수
console.log(obj.area.square(5)) // 객체
obj.print();
