// this

// 강의: this개요, this의 글로벌 오브젝트, this와
// - window 오브젝트

// this개요

// 키워드이다.
// obj.name()형태로 호출한
// 함수 또는 메소드에서
// this로 인스턴스 혹은 오브젝트를 참조한다.
// 실행 콘텍스트의 this바인딩 컴포넌트에 바인딩된다.
// 그래서 함수 안에서 this로 obj를 참조할 수 있다.

// this와 글로벌 오브젝트

// 글로벌 오브젝트에서 this는
// 글로벌 오브젝트를 참조한다.
// 글로벌 함수를 호출할 때는 함수 앞에 뭘 적을 수 없지만
// 묵시적으로 글로벌 오브젝트를 뜻하기 때문에
// 글로벌 오브젝트를 참조하게 된다.

// this와 window오브젝트의 관계

// window는 js에서 만든 것이 아니며
// 글로벌 오브젝트의 스코프도 아니다.
// 그런데 window와 글로벌 오브젝트를 같은 선상에서 사용한다.

// 이것은 Host오브젝트 개념을 적용한다.

// this와 글로벌 오브젝트의 관계를 살펴보자.
// 아래 4가지는 글로벌 오브젝트에 코드 작성한다.
// window.onload = function(){
//   // 안이 아니라 밖에 코드를 작성
// };

// 1. this가 window참조
/* console.log(this === window); */

// 즉, 글로벌 오브젝트에서 this는
// window를 참조한다.

// 2. this로 글로벌 변수 사용
/* var value = 100;
console.log(this.value); */

// 비록 var키워드를 사용하긴 했지만 글로벌 변수이다.
// this가 글로벌 오브젝트를 참조하기 때문에
// 이런 결과를 도출할 수 있는 것이다.

// 3. window로 글로벌 변수 사용
/* var value = 100;
console.log(window.value); */

// 어라? window.value를 했는데
// 왜 100이 출력이 되는거지?
// 그것은 window가 글로벌 오브젝트를 참조하므로
// window.value형태로 글로벌 변수를 사용가능하다.

// window.value랑 this.value의 결과가 같고
// window===this도 true니까 같은거 아냐?
// 그렇게 봐도 되겠지만 실체는 다르다.

// 4. this.value = 100; 형태로 값 할당
/* this.value = 100;
console.log(window.value); */

// this가 글로벌 오브젝트를 참조하므로
// 글로벌 오브젝트에 설정된다.
// window 역시 글로벌 오브젝트를 참조하므로
// vlaue를 공유할 수 있다.

// window오브젝트와 같이 js에서 다른 오브젝트를
// 마치 내것 처럼 사용하는 개념을
// 앞에서 배웠던 Host오브젝트라고 한다.
// DOM오브젝트도 Host오브젝트이다.

// 이런 개념으로 인해서 this와 window,
// 글로벌 오브젝트와 window가 같은 선상에서
// 사용되는 것이다.

// this와 window오브젝트의 관계(이어서)

// window.onload = function(){
//    // 여기에 코드를 작성
// }

// 이번에는 안에다가!
// onload는 이벤트 핸들러 함수이다.
// 즉, onload이벤트가 발생되면
// function(){여기} 작성한 코드를 실행한다.

// 1. this가 window참조
/* window.onload = function () {
  console.log(this === window);
}; */

// 앞에와 값이 같다!
// onload도 이벤트를 처리하는 함수이지만
// function오브젝트이다.
// 그래서 window.onload에서 onload앞에 기술된
// window를 함수 안에서 this로 참조하게 된다.

// onload이벤트가 발생하게 되면
// 실행 콘텍스트를 일단 생성하게 되고
// onload 앞에 있는 window오브젝트를
// this 바인딩 컴포넌트에 바인딩하게 된다.
// 이후 함수에서 this로 그것을 참조하게 되니까
// true가 나온다.

// 2. this로 로컬(지역) 변수 사용
/* window.onload = function () {
  var value = 100;
  console.log(this.value);
}; */

// value는 핸들러 함수의 '지역 변수'다.
// this.value에서 this가 위에서 설명한대로
// 'window오브젝트'를 참조하므로
// this.value로 '지역 변수'에 악세스할 수 없다.

// 3. this.value = 100; 형태로 값 할당
/* window.onload = function () {
  this.value = 100;
  console.log(window.value);
}; */

// this가 window오브젝트를 참조하기 때문에
// window오브젝트에 설정된다.

// 정리를 하자면 함수든 이벤트 핸들러 함수든지
// 함수 앞에 작성한 오브젝트를 함수에서
// this로 참조하게 된다.
// 그게 글로벌 오브젝트든 일반 오브젝트든 똑같다.

// 강의: this참조 범위, this와 strict모드, this참조 오브젝트

// this와 strict모드

// 오브젝트.함수이름() 형태로 함수 호출해야 하지만
// 글로벌 오브젝트는 오브젝트 이름이 없으므로
// 함수 이름만 작성하여 호출한다.

// 하지만 strict모드에서는
// window.book()처럼 book()앞에
// window를 글로벌 오브젝트로 작성해야 작동한다.

// 함수 앞에 오브젝트를 작성하지 않으면
// this 바인딩 컴포넌트에 undefined가 설정되므로
// this로 window를 참조할 수 없다.
/* function book() {
  "use strict";
  return this;
}
var result = book();
console.log(result); */

// 호출하는 book() 함수 앞에 오브젝트를 작성하지 않으면
// return this에서 undefined가 반환된다.
// this바인딩 컴포넌트에 undefined가 설정된다는 뜻이다.

/* function book() {
  "use strict";
  return this;
}
var obj = window.book();
console.log(obj === window); */

// 호출하는 book() 함수 앞에
// window 오브젝트 작성하였다.
// book() 함수가 글로벌 함수이므로 호출되며
// return this가 window를 참조하게 된다.
// return this에서 window 오브젝트 반환

// this 참조 오브젝트

// this가 참조하는 오브젝트

// 아래 코드에서 this가 참조하는 오브젝트는 무엇일까?

/* var book = {
  point: 100,
  member: {
    point: 200,
    get: function () {
      console.log(this === book.member);
      console.log(this.point);
    },
  },
};
book.member.get(); */

// book.member.get()에서 book.은 경로의 역할을
// 할 뿐이다. 이렇게 함수는 바로 앞에 작성한 오브젝트를
// 함수 안에서 this로 참고한다.

// 강의: this와 인스턴스

// 인스턴스의 목적?
// 인스턴스마다 고유 값을 유지하기 위해서이다.

// 인스턴스에서 this의 목적?
// this로 인스턴스를 참조하여
// this.name형태로 프로퍼티에 접근하려는 것이다.
// name에 function오브젝트가 할당되어 있으면
// 그것은 메소드 이름이 되는 것이다.

// [[Prototype]] 프로퍼티 접근
// new연산자로 인스턴스를 생성하면
// prototype에 연결된 프로퍼티가
// 인스턴스의 [[Prototype]]에 첨부되며
// this.method()형태로
// [[Prototype]]에 첨부된 method()호출

// 여기서 prototype에 연결된 메소드는
// 모든 인스턴스에서 공유함.
// 그러나 인스턴스마다 고유의 값을 유지할 수 있다.
// 일관된 환경에서 값만 달리할 수 있는, 데이터 중심의 접근법

/* var book = {};
book.Point = function (point) {
  this.point = point;
  // 여기서 this는 Point를 참조하겠군!
};
book.Point.prototype.getPoint = function () {
  console.log(this.point);
};
var obj = new book.Point(100);
// 인스턴스가 생성되었기 때문에
// this는 생성한 인스턴스를 참조하므로
// point는 인스턴스 프로퍼티가 되겠군!
// 이 논리로 인스턴스마다 프로퍼티 이름과 값을
// 유지할 수 있다.

// this에 obj를 대입해보면 obj.point가 되는데,
// 딱 그렇게 인스턴스 프로퍼티가 된다!

// 그럼 여기서 100은 생성된 obj인스턴스의
// point에 할당이되겠군!

// 아래와 같이 되겠구나!

// obj인스턴스 = {
//   point: 100,
//   [[Prototype]] = {
//       getPoint: function(){
//           console.log(this.point)
//       }
//   }
// }

obj.getPoint(); */

// 이것은 Class 관점의 접근이다.

// 강의: this와 call()메소드, this사용, Object사용,
// -숫자 작성, this 참조 변경

// this와 call()

// call메소드는
// 함수.call()의 형태로 작성한다. 아래와 같이,
// getTotal.call(this, 10, 20);

// 첫 번째 파라미터에 this로 참조할 오브젝트 작성!
// 일반적으로 this를 작성하지만
// this이외에 다른 오브젝트를 사용할 수 있다.

// 즉, this바인딩 컴포넌트에
// 첫번째 파라미터에 작성한 오브젝트가
// 바인딩 된다는 것이다.

// this사용

// 아래 코드는 window.onload 밖에 코드를 작성
// 즉, 글로벌 오브젝트에서 실행한다.

/* "use strict";
var value = 100;
function get(param) {
  return param + this.value;
}
// var result = get.call(this, 20);
var result = get(20);
console.log(result); */

// 1. get.call(this,20)
// write "this" at first parameter's place

// 2. return param + this.value;
// this가 글로벌 오브젝트를 참조하므로
// (var value = 100)을 사용합니다.

// ----call()을 사용하지 않고----

// 3. return param + this.value;
// get(20)으로 호출하면,
// this가 undefined를 참조하므로
// 에러가 발생합니다.

// strict모드인데다가
// get앞에 아무런 오브젝트를 적어주지 않아서
// undefined가 발생하게 된다.

// 첫번째 파라미터에 작성된 '오브젝트'를
// '호출된 함수에서 this로 참조'할 때
// call메소드를 사용한다.

// 여기서는 글로벌 오브젝트에 작성된 value를 참조해야 한다!
// 고로 글로벌 오브젝트를 참조해야 하니까
// this를 첫번째 파라미터 자리에 적어두게 되었다.

// Object 사용

var get = function (value) {
  return this.base * this.rate + value;
};
var value = { base: 20, rate: 30 };
var result = get.call(value, 50);
console.log(result);
