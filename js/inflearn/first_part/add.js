// "use strict";

// 강의: 글로벌 변수 문제
// 자주 있지는 않지만 가능성의 부분은 따질 수 있음
// 로컬과 글로벌 변수를 구분한 목적을 생각해야
/* value = 100;
function point() {
  value = 300; // 외부에 선언된 global변수를 변경
  console.log("함수:", value);
}
point(); */
// 가장 위에 있는 use strict를 사용하면
// 에러가 난다. var를 사용하지 않은
// 글로벌 변수 사용 불가
// 전체가 그런 것은 아니나,
// ES6+에서는 use strict가 디폴트 환경

// 강의: function 블록
// scope가 다르기 때문에
// function 안과 밖에
// 서로 다른 let변수가 있어도
// 각각의 scope 안에서 사용할 수 있음.
/* let sports = "축구";
function show() {
  //   let sports = "농구";
  console.log("안: ", sports);
}
show();
console.log("밖: ", sports); */
// 함수 안에서 밖의 변수를 사용할 수 있다.
// 함수 안에서 찾고 안되면 밖에서 찾는다.
// 이것을 클로저라고 한다.

// try-catch문도 블록 스코프 적용
// 다 비슷하지만 catch가 예외적이다.
// try블록 밖에 있는 변수를 가지고 와서
// 사용을 하는 편이다.
/* let sports = "축구";
try {
  let sports = "농구";
  console.log("안: ", sports);
  abc = error;
} catch (e) {
  console.log("catch: ", sports);
}
console.log("밖: ", sports); */

// switch-case문도 블록 스코프이다.
// 이건 switch가 하나의 거대한 블록인 것이다.
/* let item = 1;
switch (item) {
  case 1:
    let sports;
    break;
  case 2:
  // let sports;  // already been declared
  default:
    console.log(sports);
} */
