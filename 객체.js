const person = {
    name: 'coding',  //key: value
    age: 30,
    'phone number': '010-0000-0000',
    printInfo: function () {    //객체 내부에 있는 함수를 메서드 로 표현함.
        console.log('printInfo');
    },
};
console.log(person.name);   //마침표연산자 접근방법
console.log(person['age']); //대괄호연산자 접근방법.
console.log(person['phone number']);    //key에 공백이 있으면 무조건 대괄호연산자 사용
person.printInfo(); //person객체의 메서드 호출 방법

person.name = 'jim';
console.log(person.name);

const person2 = {
};
person2.name = 'Anne'
person2.gender = 'female'; //없는 속성값 추가 가능. 있는 속성이면 수정된다. 동적으로 속성 추가하는 방법.
console.log(person2);
delete person2.gender;  //동적으로 속성 삭제하는 방법
console.log(person2);
