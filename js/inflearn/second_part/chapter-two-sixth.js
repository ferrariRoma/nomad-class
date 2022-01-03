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

/* "use strict";
var get = function (value) {
  return this.base * this.rate + value;
};
var value = { base: 20, rate: 30 };
var result = get.call(value, 50);
console.log(result); */

// 이처럼 호출'된' 함수에서
// this로 참조할 값을 변경할 때
// call메소드를 사용하게 된다.
// this로 참조할 오브젝트를 바꾸겠다는
// 의미가 크다. get 안의 코드는 바꿀 필요가 없고
// 오브젝트만 바꾸면 되니까
// 데이터 중심으로 코딩을 할 수 있다.

// 숫자 작성

/* function get() {
  return this.valueOf();
}
var result = get.call(123);
console.log(result); */

// 1. var result = get.call(123);
// this가 오브젝트를 참조하므로
// 숫자(123)를 작성하면
// 에러가 발생해야 하지만

// 2. 값(123) 타입에 해당하는
// Number 인스턴스를 생성하고
// 123을 프리미티브 값으로 설정한다.
// 즉, this가 Number인스턴스를 참조한다.

// 자주 사용되는 방법은 아니다.

// this 참조 변경

/* var book = {
  value: 123,
  point: {
    value: 456,
    get: function () {
      console.log(this.value);
    },
  },
};
book.point.get.call(book);
book.point.get.call(book.point); */

// 1. book.point.get.call(book);
// book.point의 get()호출
// get()에서 this로 'book오브젝트' 참조
// this.value가 book.value이므로 123출력

// 2. book.point.get.call(book.point);
// book.point의 get()호출
// get()에서 this로 'book.point 오브젝트' 참조
// this.value가 book.value이므로 456출력

// <나만의 해결법인데,>
// book, book.point를 this에 그대로 대입해보자.
// 그럼 딱 말이된다! 틀린 해결법도 아닌듯~

// this로 참조할 오브젝트를 함수를 호출하면서 바꾸는 것이다.
// 이것이 call메소드의 큰 목적이다.
// 그러면 코드는 그대로 두고 변화를 가져갈 수 있다.

// 오브젝트 안에 오브젝트 안에
// 함수를 작성하는 것도 좋은 방법이다.
// 이 오브젝트 안에 book과 관련된
// 함수가 있다는 시맨틱이 되는 것이니까.

// 강의: this와 apply()메소드, this와 arguments

// this와 apply()메소드

// getTotal.apply(this,[10,20])
// 함수 호출 방법은 call()과 같지만
// 파라미터가 배열인 것이 다르다.

// 두 번째 파라미터 수가 유동적일 때 사용된다.
// call은 파라미터 수가 고정적일 때 유용하다.

// this와 arguments프로퍼티
/* var obj = { 0: 10, 1: 20, 2: 30 };
var data = [4, 5, 6];

function get() {
  for (k = 0; k < arguments.length; k++) {
    console.log(arguments[k] + this[k]);
  }
}
get.apply(obj, data); */

// 함수.apply(오브젝트, 배열);
// obj는 this가 참조할 오브젝트이고,
// data는 get함수로 넘겨줄 파라미터 값이다.

// 여기서 get함수의 파라미터 이름을 작성하지 않았다.
// 이때 arguments 프로퍼티로 파라미터를 사용할 수 있다.

// Array-like형태는 ES6에 많은 메소드에서 지원한다.
// length가 있으면 for문이 먹히니까.

// 그럼 apply가 왜 필요함?
// for문으로 이렇게 처리하면 되는데 말이야.

// '파라미터가 유동적일 때 사용한다'는 것은
// 하나의 방법이고 이것말고 궁극적인 목적은 뭔데?
// 데이터 중심으로 접근을 하겠다는 것이다.
// 데이터만 바꿔주면 함수 안의 코드는
// 변경없이 대처할 수 있다는 것이다.

// 여기서 get함수에서 값을 구할 수 있는 방법.
// 1. 파라미터로 넘겨준 값을 구하는 법
// 2. 안에서 변수를 선언해서 값을 구하는 법
// 3. 다른 메소드를 호출해서 값을 구할 수 있다.
// 4. 그리고 this를 참조해서 값을 구할 수 있다.

// 그런데 파라미터와 this는
// 외부에서 데이터를 제공해주어야 한다.

// apply는 딱 파라미터로 참조할 배열과
// this가 참조할 오브젝트를 제공해주면서
// 완전히 get함수에서 데이터를 처리할 수 있는
// 바탕을 만들어준다.
// 이게 call도 마찬가지이고 궁극적인 목적이다.
// 즉, 데이터를 바꿔가면서 함수를 호출하고
// 데이터에 따라 함수의 코드가 움직이게 된다!

// 강의: this와 콜백 함수

// this와 콜백함수

/* var obj = { value: 100 };
var data = [5, 6, 7];
function callback(element, index, data) {
  return element + this.value;
}
function get(data) {
  return data.map(callback, obj);
}
var result = get(data);
console.log(result); */

// 1. ES5의 map(),forEach()처럼
// 콜백 함수가 있는 메소드는
// 두 번째 파라미터에 this로 참조할
// 오브젝트를 작성할 수 있다.(option)

// 챕터1에서 배운 것 처럼 ES5에서는
// 콜백함수를 가진 메소드가 7개가 있다.

// 2. function callback(element, index, data){
//     return element+this.value;
// };
// map()에서 호출하는 콜백 함수

// 3. return data.map(callback,obj);
// map()의 두 번째 파라미터에 obj를 작성!
// callback()에서 obj를 this로 참조합니다.

// 4. map()의 코드는 바꾸지 않고
// obj값과 data파라미터 값만 바꾸면 된다.

// 관점과 접근법에 관련된 아이디어
// data.map(callback, obj);

// 첫번째 param에 콜백함수 작성,
// 배열data를 하나씩 읽으면서 콜백함수가 반복된다.

// 두번째 param에 '콜백함수에서'
// this로 참조할 오브젝트를 작성
// 즉, 여기선 callback함수 안의 this가
// 참조할 오브젝트를 obj로 설정하였다.

// 여기서 메소드 기능이 아닌 다른 관점에서 접근해보도록 하자.

// get함수를 호출하면서 데이터를 넘겨줌.
// 이게 배열이니까 map메소드를 사용할 수 있다.
// 근데 콜백함수는 독립적인 것이다.
// map메소드는 콜백함수에서 뭘 하는지 알 필요가 없다.

// map의 기능은 콜백함수를 호출해서 두번째 파라미터에
// 오브젝트가 작성이 되어있으면 넘겨주는 것이다.

// 이게 독립성이다.
// map메소드는 데이터를 넘겨주는게 목적이다.
// 나머지는 콜백함수에서 처리한다.

// 이게 데이터 중심으로 처리하는 것이다.
// 콜백에서 무슨 일이 일어나는지는 모르겠고,
// 데이터만 넘겨주면 된다.

// 이런 데이터 관점의 접근을 위한 것이
// ES5의 콜백함수를 가지는 7가지 메소드이다.

// 또 하나의 관점이다.
// 앞에서 call,apply메소드를 다뤘다.
// this를 넘겨줌으로써 호출되는 함수에서
// 완전히 처리가 될 수 있게 하였다.
// map이나 forEach는 배열을 반복한다.
// '반복'이 더해진 셈이다.
// 이런 것은 대부분 함수처리이다.

// 한편, Class와 인스턴스는
// 묶음단위로 처리할 수 있는 것이다.

// 이 모든 것의 공통분모는 this이다.
// 이렇게 this를 활용한 시스템을 구상하면
// 한 단계 더 높은 활용성을 확보할 수 있다.

// call,apply,콜백함수를 가진 7가지 메소드,
// Class, 인스턴스까지 묶음으로 사용을 하면
// this가 굉장히 파워풀해진다.

// 이러한 것들의 가장 밑바탕은
// 데이터 중심 처리이다.
// 함수 메소드는 고정되어 있으니,
// 데이터만 넘겨주면 처리가 된다!

// 이런 관점에서 아래 코드를 읽어보자.

// 강의: this와 bind()메소드, function오브젝트 생성/
// -호출, 파라미터 병합

// bind()
// 이거는 시맨틱 그대로 묶는 것이다.

// 두 번에 나누어 처리를 한다.
// 일반적으로 함수는 호출하면 바로 처리하지만,
// bind메소드는 function오브젝트를 생성하는 것과
// 생성한 function오브젝트를 함수로 호출하는
// 두 단계로 이루어진다.
// 그럼 각각의 단계에서 바인드가 이루어진다.

// 묶기 위해서 두 단계로 나눈 것이다.
// 호출하자 실행되면 바인드가
// 될 수 없다.

// this와 호출된 함수의 파라미터 값을 파라미터로 갖는다.
// 즉, 이 두 가지를 바인드한다.
// 호출된 함수는 이 바인드 된 환경을 사용해서
// 실행하는 것이다.

// 생성한 function을 호출할 때에도
// 파라미터를 작성할 수 있다.
// 그래서 두개의 파라미터를 병합하여 사용할 수 있다.

// function오브젝트 생성, 호출

/* var book = {
  point: 123,
  get: function () {
    return this.point;
  },
};
var obj = book.get.bind(book);
console.log(typeof obj);
var result = obj();
console.log(result); */

// var obj = book.get.bind(book);
// book.get()을 '호출하지 않고'
// function오브젝트를 생성하여 반환한다.
// 여기서 생성한 function오브젝트를
// 생성한 오브젝트의 내부 프로퍼티인
// [[TargetFunction]]에 설정
// 실행을 나누어서 하므로 저장 필요하다.

// console.log(typeof obj);
// obj의 타입은 function오브젝트가 출력된다.

// bind()의 첫 번째 파라미터
// get()함수에서 this로 참조할 오브젝트 작성
// get()앞에 작성한 오브젝트를 this로 참조하지 않는다.
// 일반적으로는 함수 앞에 작성한 book을 참조하지만,
// bind는 파라미터에 작성한 오브젝트를 참조한다.
// 파라미터를 작성하지 않으면 undefined 설정한다.
// 이것이 바인딩이다. 이때 this로 참조할 오브젝트를 묶는다.

// 생성한 function오브젝트의 내부 프로퍼티인
// [[BoundThis]]에 설정
// book.get.bind(book); 여기서 처리가 분리가 되니까
// 저장을 해놨다가 obj()에서 호출을 하는 것이다.

// var result = obj();
// bind()로 생성한 function오브젝트 호출한다.
// book.get()함수가 호출됩니다.

// return this.point;
// this가 [[BoundThis]]를 참조한다.
// 이것은 function오브젝트에 설정되어있다.
// 즉, book오브젝트를 참조하므로 123반환

// 파라미터 병합

/* var book = {
  get: function () {
    return Array.prototype.slice.call(arguments);
  },
};
var obj = book.get.bind(this, 10, 20);
var result = obj(30, 40);
console.log(result); */

// var obj = book.get.bind(this, 10, 20);
// 두 번째, 세 번째 파라미터에 값을 작성했으며
// book.get()의 파라미터 값으로 넘겨준다.
// function오브젝트의 내부 프로퍼티인
// [[BoundArguments]]에 설정한다.
// 처리가 분리되니까 저장해두어야 해서!

// get()함수에 파라미터 이름을 작성하지 않았기 때문에
// arguments사용하였다.

// return Array.prototype.slice.call(arguments);
// slice()는 인덱스 범위의 엘리먼트를 '배열'로 반환
// 인덱스를 작성하지 않으면 arguments 전체를 반환한다.

// var result = obj(30,40);
// book.get()함수가 호출되면서 30,40이 넘어가는데
// 넘어가기 전에 파라미터를 바인드 시킨다.
// 바인드 메소드에 작성한 10,20을 앞에 두고
// 30,40을 뒤에 첨부한다.

// book.get.bind(this,10,20);에서
// 10과 20을 [10,20]형태로 반환
// 여기에 obj(30,40)을 병합하여 반환한다.

// 강의: bind()활용, 이벤트 처리

/* var book = {
  myPoint: 100,
  setEvent: function () {
    //->이벤트 설정함수
    var node = document.getElementById("point");
    node.onclick = this.show.bind(book, node);
  },
  show: function (node, event) {
    //->핸들러 설정함수
    console.log(node.textContent);
    console.log(this.myPoint);
  },
};
book.setEvent(); */

// 시나리오
// "값 출력"버튼을 클릭하면 값을 표시합니다.

// 이벤트 처리의 어려움이 있는데
// 이벤트를 설정할 때의 오브젝트를
// 헨들러에서 this로 참조할 수 없다는 것이다.

// addEventListener나 onclick을 통해서
// 이벤트를 설정하면 헨들러 함수에서
// this로 오브젝트를 참조할 수 없다.
// 오브젝트를 잃어버린다.

// 위 오브젝트처럼 이벤트를 설정하는 것과 헨들러 함수를
// 같이 설정을 하면 한 눈에 알아볼 수 있다.

// 헨들러 함수(show)에서 this사용할 수 있어야 한다.
// 못한다면 값을 악세스하는 방법이 하나 없어지기 때문이다.
// 함수에서 값을 처리하는 4가지 처리 방법 중
// 하나가 사라지는 것이다.

// bind()로 해결할 수 있다.

// document.getElementById("point");
// 이거는 button#point로 '엘리먼트 오브젝트' 생성

// node.onclick = this.show.bind(book,node);
// show는 이벤트 핸들러인데
// show에서 this로 book오브젝트를 참조하기 위해
// book을 바인드한다.
// show파라미터 값으로 node를 넘겨주어서
// 이벤트를 설정했던 엘리먼트 오브젝트(node)를 바인딩함.

// show:function(node,event)
// button#point를 클릭했을 때 호출된다.
// node: 이벤트를 설정한 엘리먼트
// event: 'Event오브젝트'

// console.log(this.myPoint);
// bind() 첫 번째 파라미터에
// book오브젝트를 작성했으며
// 이를 this로 참조하므로 123이 표시된다.

// 이벤트 핸들러에서는 bind를 많이 사용한다.
// 핸들러 함수를 독립적으로 만들 수 있고,
// 독립적으로 만들었기 때문에 공유할 수도 있다.

// 앞전의 예제와 다른 것은
// 바인드 메소드로 function오브젝트를 만들고 그것을 호출했는데
// 여기서는 그 함수를 호출을 이벤트 핸들러가 해준다.

// 이처럼 이벤트를 처리할 때
// bind를 이용하면 간단하고 다양한 값을
// 핸들러 함수에서 사용할 수 있다.
