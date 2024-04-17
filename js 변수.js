/* var - 변수. 같은 이름의 변수 재생성 가능 */
var num = 10;
var num = 20;
console.log(num);

/* let - 변수. 같은 이름의 변수 재생성 불가능. 오류 발생 가능성 줄여줌. 사용 권장. IE 11에서는 작동 애매함.*/
let n = 10;
// let n = 20;
console.log(n);
/* 호이스팅 - 선언부와 할당을 나누어서, 선언부를 최상위로 끌어올리는 행위.
    var는 호이스팅 가능. let은 호이스팅 불가능 */
console.log(x);
var x = 40;
/* 다음 코드처럼 호이스팅
var x;
console.log(x);
x = 40;
*/
/* console.log(y);
let y = 50; 이 코드는 에러 발생*/

/* const - 재할당 불가능 */
const f = 30;   //선언과 동시에 할당해야함.
// f = 20; 불가능
console.log(f);