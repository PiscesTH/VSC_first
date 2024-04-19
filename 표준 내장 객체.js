// 종류가 굉장히 많다. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects 참고
// String 객체
const str = 'abc';
if (str.length <= 4) {
    console.log('5자 이상 입력하세요');
}
if (str.includes('d')) {
    console.log('d가 포함되어 있습니다.');
}

//중간에 있는 공백 제거할 때 replaceAll 사용하는데 지원 안하는 경우가 있음. 그 때 사용하는 방법
const email = 'test@ naver.com';
console.log(email.replace(/ /gi, ''));

// array객체
const arr = ['a', 'b', 'c'];
arr.pop();  //배열의 마지막 값 추출. 파괴 메서드
arr.push('d');  //배열의 마지막에 값 추가. 파괴 메서드
console.log(arr);

// date 객체
const date = new Date();    //date객체는 new Date()로 인스턴스를 만들어야 사용 가능.
console.log(date.getFullYear());