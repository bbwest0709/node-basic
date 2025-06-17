const url = require('url')
const str = 'https://smartstore.naver.com/inflow/outlink/product?p=11016190769&tr=promo'
const str2 = 'https://smartstore.naver.com/bestlg/lives?cp=1'

// 1. url.parse(url주소) : url 주소를 분해해서 내가 원하는 정보를 추출 가능
// 2. url.format(객체) : 분해된 url 객체를 다시 원 상태로 조립한 문자열 반환
const parseUrl = url.parse(str)
console.log(parseUrl)
console.log(parseUrl.query)
console.log(parseUrl.pathname)
console.log('url.format() : ', url.format(parseUrl))

// 최근 WHATWG URL 표준을 따르는 새로운 URL API를 사용
const myURL = new URL(str2)
// 쿼리 읽기
console.log(myURL)
console.log('\nUsing WHATWG URL API:')
console.log('href:', myURL.href)
console.log('origin:', myURL.origin)
console.log('pathname:', myURL.pathname)
console.log('searchParams:', myURL.searchParams.toString())
console.log(myURL.searchParams.get('cp'))
// 쿼리 수정
myURL.searchParams.set('cp', 3)
console.log(myURL.href)
// 쿼리 추가
myURL.searchParams.append('sort', 'price')
console.log(myURL.href)
// 쿼리 삭제
myURL.searchParams.delete('sort')
console.log(myURL.href)