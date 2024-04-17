//함수선언문
function functionName() {
    for (let i = 1; i <= 9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
}
functionName();

// 함수 표현식
const gugudanEx = function gugudanEx() { //gugudanEx(함수 이름) 있으면 네이밍함수. 없으면 익명함수 로 구분한다. 네이밍함수로 사용하는것 권장.(이름 같게 사용)
    for (let i = 1; i <= 9; i++) {
        console.log(`2 * ${i} = ${2 * i}`);
    }
}
gugudanEx();

// 화살표 함수
const gugudanArrowFunc = () => {
    for (let i = 1; i <= 9; i++) {
        console.log(`5 * ${i} = ${5 * i}`);
    }
}
gugudanArrowFunc();

gugudan();  //기본값 설정 가능. es6부터.
gugudan(7); //이렇게 해도 함수 호출 가능. y, z 에는 undefined가 할당
// 함수 호이스팅에 의해 함수 선언문이 호출 보다 아래에 있어도 호출 가능. 선언부가 가장 먼저 로드됨.
// 다만 함수 표현식에서는 선언부와 구현부가 따로 구분되기 때문에 호출되도 함수가 아닌 변수만 호출됨.
function gugudan(x = 10, y, z) {
    console.log('매개변수 테스트');
    for (let i = 1; i <= 9; i++) {
        console.log(`${x} * ${i} = ${x * i}`);
    }
}

// 즉시실행함수
console.log('즉시실행함수 테스트');
(function init() {
    console.log('init');
})();   //()를 써서 함수 호출. 일회용 함수.

(()=>{
    console.log('init with arrow');
})();   //화살표 함수로 만든 즉시실행함수.

function init() {   // 즉시실행함수에 사용한 이름은 전역스코프에서 재사용이 가능하다.
    console.log('init2');
}
init();