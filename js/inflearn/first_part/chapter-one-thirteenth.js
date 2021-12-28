// ES5 Object

// 강의: ES5 Object특징, 함수, 프로퍼티 디스크립터
// ES5 Object에 함수가 추가됨
// 메소드는 하나도 없음!

// 빌트인 Object의 모든 메소드는
// (여기서 모든 메소드란 우리가 프로토타입에서 확인했던
// 그 6가지 메소드를 말하는 것임!)
// 대부분의 빌트인 오브젝트(String,Array등을 총칭)에 첨부됨

// 이 빌트인 오브젝트를 이용해서 오브젝트 생성하는데
// 거기에 이 6가지 메소드가 들어간다는 것이다.

// 하지만 이 6가지가 모든 곳에서 다 쓰이냐?
// 아님. 그래서 손해라고 볼 수 있다.
// 그것을 복사하는 것은 아닌데,
// 빌트인 Object 오브젝트에 있는 6가지 메소드를
// 호출할 수 있는 경로를 만드는 것이다.
// 고로 메모리를 그만큼 사용하는 것이다.

// 그래서 추가되는 것이 모두 함수인 것이다.
// 함수는 첨부되지 않으므로, 연결 부하를 줄일 수 있음.

// ES5에 새로이 추가된 개념이 '속성'이다.
// 디스크립터... enumerable이 디스크립터이다.

// 프로퍼티 디스크립터
// 6개의 디스크립터가 있다!
// value는 key,value할 때 value를 설정
// writable은 값 변경 가능한지
// get은 함수인데, getter라고 한다.
// set은 setter라고 한다.
// enumerable
// configurable는 삭제 가능여부

// 강의: Object에 프로퍼티 추가

// defineProperty()
// 파라미터가 3개임!
// 1. 대상 오브젝트
// 2. 프로퍼티 이름
// 3. 속성

// 대상 오브젝트의 프로퍼티를 추가 또는
// 프로퍼티 속성을 변경

// 프로퍼티마다 상태를 갖고 있음
// 상태란? 변경/삭제/열거 가능 여부(true/false)
// 상태가 가능일 때만 처리할 수 있음.

// 프로퍼티를 추가할 때 상태 결정
/* const obj = {}; // 변경,삭제,열거의 디폴트가 트루이다.
// 하지만 defineProperty는 
// 변경,삭제,열거 디폴트가 false이다.
Object.defineProperty(obj, "book", {
  value: "JS북" // 프로퍼티의 값을 작성,
  enumerable: true // 디폴트가 false라
  // 열거하려면 열거 가능여부를 true로 해줘야 됨.
});
console.log(obj); */

// 아니 다 false가 되는 걸 왜 씀?
// js는 소스가 오픈되는데,
// 그 사람들이 메소드를 가지고 호출해서 사용할 수 있게
// 하는데, 일부는 소스를 볼 수 있어서 위험에 노출될 수 있었다.
// 하지만 이런 걸 이용해서 데이터를 보호할 수 있다.

// defineProperties()
// 파라미터 1. 대상 오브젝트
// 2. 프로퍼티 이름과 속성

// 다수의 프로퍼티를 추가하거나 속성 변경
/* const obj = {};
Object.defineProperties(obj, {
  soccer: {
    value: "축구",
    enumerable: true,
  },
  basketball: {
    value: "농구",
    enumerable: true,
  },
});
for (let name in obj) {
  // 복습-> name은 key
  console.log(obj[name]);
} */

// 강의: 프로퍼티 디스크립터, value,writable,
// -enumerable,configurable속성

// 프로퍼티 디스크립터
// 프로퍼티의 속성(6가지) 이름과 속성 값을 정의

// 디스크립터 타입 분류
// 데이터, 악세스, 공용 프로퍼티 디스크립터
// 디스크립터 타입에 속한 속성만 같이 사용할 수 있다.
// 이 말이 뭐냐면,
// 데이터 타입이라면 데이터 타입에 속한
// value, writable을 같이 사용할 수 있고,
// 악세스에 있는 get,set 두 개를
// value, writable에 붙여서 사용할 수 없다.
// 그리고 공용에 있는 enumerable과
// configurable은 데이터, 악세스와 모두 같이 사용할 수 있다.

// value, writable
// get, set
// enumerable, configurable

// 디스크립터 타입 인식 기준
// 먼저 value,writable작성 체크
// 얘네가 작성되어 있으면 데이터 프러퍼티,
// 작성되어 있지 않으면 악세스 프로퍼티

// value속성
// 프로퍼티 값을 {value:"JS북"}형태로 작성
// value는 속성이고 "JS북"이 프로퍼티 값이 된다.
/* const obj = {};
Object.defineProperty(obj, "book", { value: "JS북", enumerable: true });
for (const name in obj) {
  console.log(name);
  console.log(obj[name]);
} */

// writable속성
// 프로퍼티 값 변경 가능/불가
/* const obj = {};
Object.defineProperty(obj, "book", {
  value: "JS북",
  //   writable: true,
});
obj.book = "변경 가능";
console.log(obj.book); */

// enumerable속성
// for~in으로 열거 가능 여부

// confugurable속성
// 프로퍼티 삭제 가능, 불가

// true이면 프로퍼티 삭제 가능
// value이외 속성 변경 가능
/* const obj = {};
Object.defineProperty(obj, "book", {
  value: "JS북",
  // 삭제 가능
  //   configurable: true,
  configurable: false,
});
delete obj.book;
console.log(obj.book);
obj.book = "NoDelete";
console.log(obj.book); */

// 강의: getter, setter, get속성, set속성

// getter는 OOP용어
// 즉, 객체지향 프로그래밍을 지원하는 언어에서 사용가능
/* const obj = {};
Object.defineProperty(obj, "book", {
  get: function () {
    return "JS책";
  },
  // value: "booking",
  // define에서 값을 설정할 때
  // 값을 value속성에 작성하게 되는데 그게 없네?
  // 이때 get을 호출
  // 프로퍼티로 값을 구할 때 value속성이 없으면
  // get속성을 호출하게 되는데
  // 이것이 바로 getter이다.
});
const result = obj.book;
console.log(result); */

// set속성
// 이것 역시 OOP용어이다.
/* const obj = {},
  data = {};
Object.defineProperty(obj, "book", {
  set: function (param) {
    data.title = param;
  },
  get: function () {
    return data.title;
  },
});
obj.book = "JS책";
// 이렇게 값을 할당해줄때
// value속성이 없으니까 set을 호출함.
console.log(obj.book); */

// 위에서 보는 set,get의 형태는 ES5의 형태이다.
// ES6에서는 조금 더 편리하게 사용할 수 있게 해두었다.

// 강의: 프로퍼티 추출

// getPrototypeOf()
// 파라미터의 프로토타입에 연결된 프로퍼티 반환
/* function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {};
Book.prototype.setPoint = function () {};
const obj = new Book(100);
const result = Object.getPrototypeOf(obj);
for (const key in result) {
  console.log(key + ":" + result[key]);
} */

// 참고 - setPrototypeOf()가 ES5스펙에 없고
// ES6에 있음. get과 set은 짝이다.
// 이것은 설정을 인스턴스.__proto__에 설정을 해줌.
// getPrototypeOf은 prototype것을 가지고 오는데
// setPrototypeOf은 __proto__에 설정을 함.

// 그럼 ES5에서는 왜 이게 안됐냐?
// __proto__는 5버전에서 보기에는 표준이 아님.
// 물론 브라우저에서는 지원을 했지만,
// 5버전 스펙에 정의가 되지 않았음. ES6에 정의가 돼 있음.
// 표준이 없기 때문에 ES5에서 사용하지 않았다고 봄/

// getOwnPropertyNames()
// 열거 가능 여부를 체크하지 않음
// 자신이 만든 프로퍼티가 대상이고,
// 다른 오브젝트에서 받은 프로퍼티는 제외
/* const obj = {};
Object.defineProperties(obj, {
  book: { value: "책" },
  point: { value: 123 },
});
const names = Object.getOwnPropertyNames(obj);
for (let k = 0; k < names.length; k++) {
  console.log(names[k]);
} */

// keys()
// 열거 가능한 이름만 반환
/* const obj = {};
Object.defineProperties(obj, {
  book: { value: "책", enumerable: true },
  point: { value: 123 },
});
const names = Object.keys(obj);
for (let k = 0; k < names.length; k++) {
  console.log(names[k]);
} */

// 강의: 프로퍼티 디스크립터 함수

// getOwnPropertyDescriptor()
// 프로퍼티 디스크립터의 속성 이름, 값 반환
// 다른 오브젝트에서 받은 프로퍼티는 제외
/* const obj = {};
Object.defineProperty(obj, "book", {
  value: "책",
  writable: true,
  enumerable: true,
});
const desc = Object.getOwnPropertyDescriptor(obj, "book");
for (const key in desc) {
  console.log(key + ": " + desc[key]);
} */

// preventExtension()
// 오브젝트에 프로퍼티 추가 금지 설정
// 프로퍼티 삭제, 변경은 가능
// 추가 금지를 설정한 후에는
// 추가 가능으로 변경이 '불가'
/* const obj = {};
Object.preventExtensions(obj);
try {
  Object.defineProperty(obj, "book", {
    value: "책",
  });
  // prevent 이후에 book key에 
  // 프로퍼티를 설정하려고 하였음
} catch (e) {
  console.log("추가 불가");
} */

// 데이터 보호의 관점에서 접근하면 된다.

// isExtensible()
// 프로퍼티 추가 금지 여부 반환
/* const obj = {};

Object.defineProperty(obj, "book", {
  value: "책",
});
console.log(Object.isExtensible(obj));

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); */

// seal()
// 오브젝트에 프로퍼티 추가, 삭제 금지 설정
// 추가 금지는 오브젝트 단위로,
// 삭제 금지는 프로퍼티 단위로 설정
// 추가 금지를 하더라도 변경은 가능하다고 함.
/* const obj = {};
Object.defineProperty(obj, "book", {
  value: "책",
});
Object.seal(obj);
try {
  Object.defineProperty(obj, "sports", {
    value: "스포츠",
  });
} catch (e) {
  console.log("추가 불가");
} */

// isSealed()
// 오브젝트에 프로퍼티 추가,삭제 금지 여부 반환
// true: 응 할 수 없어. 불가능
// false: 아니 할 수 있어. 가능
/* const obj = {};
Object.defineProperty(obj, "book", {
  value: "책",
  writable: true,
});
console.log(Object.isSealed(obj));
Object.seal(obj);
console.log(Object.isSealed(obj)); */

// freeze()
// 오브젝트에 프로퍼티 추가,삭제,변경 금지 설정
// seal은 추가, 삭제까지 금지이고,
// freeze는 변경까지 금지임.
/* const obj = {};
Object.defineProperty(obj, "book", {
  value: "책",
  writable: true,
});
Object.freeze(obj);
try {
  Object.defineProperty(obj, "book", {
    value: "포인트",
    // writable이 true이지만
    // freeze를 했기 때문에
    // 변경 시도시에 에러가 난다.
  });
} catch (e) {
  console.log("변경 불가");
}
console.log(obj.book); */

// isFrozen()
// frozen여부를 반환
// 그래서 true이면 불가이고,
// false이면 가능이다.
/* const obj = {};
Object.defineProperty(obj, "book", {
  value: "책",
  writable: true,
});
console.log(Object.isFrozen(obj));
Object.freeze(obj);
console.log(Object.isFrozen(obj)); */
