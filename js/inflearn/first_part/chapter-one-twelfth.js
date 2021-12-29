// 자바스크립트 특징
// 강의: 스크립팅 언어 특징, 컴파일 순서
// 스크립팅 언어 특징
// 소스 파일의 코드를 사전에 컴파일하여
// 실행 파일을 만들어 놓지 않고
// 사용하는 시점에 컴파일하고 실행
/* const value = 123;
const book = function () {
  const point = 456;
  const getPoint = function () {
    return point;
  };
  getPoint();
};
book(); */

// html을 렌더링 하면서 스크립트의 src속성에 작성된
// book.js를 컴파일함. 그리고 필요하면 그때 일부를 실행함
// 자바나 C는 사전에 컴파일을 해서 사전에 exe파일을 생성해놓는
// 것과 차이가 난다. 사용하는 시점에서 컴파일도 하고 실행도 하니까

// 컴파일 순서
// 소스 파일의 위에서부터 아래로 컴파일
// function키워드를 만나면 빌트인 펑션 오브젝트를 생성
// 펑션 안의 코드는 컴파일 하지 않음.
// 함수가 호출될 때!, 그때 해준다.

// JS와 객체지향
// 객체 지향 프로그래밍 언어 OOP
// 자바스크립트는 객체 지향 언어
// ES5스펙에 아래와 같이 기술되어 있음
// ECMAScript is an object-oriented
// programming language

// 다른 언어의 OOP구현과 차이가 있다.
// 언어마다 객체지향이라는 개념적인 측면을 구현하는
// 방법이 다르기 때문이다.
// JS특징이 반영된 OOP를 구현해야 한다.

// OOP의 객체
// 객체 Object
// 우리가 배운 실체가 있는 Object와는 달리
// 개념적인 접근이다.
// 객체는 행위Behavior와 속성Attribute으로 구성
// 행위: 먹다, 마시다(동사)
// 속성: 밥, 사이다(명사)

// 객체를 형상화해보자.
// 행위가 메소드가 되고,
// 속성이 프로퍼티가 된다.
// 객체가 '클래스'로 된다.

// 클래스는 안에다가
// 행위와 속성을 정의한 것으로,
// 인스턴스로 생성하여 프로그램에서 사용

// +클래스는 무조건 new연산자를 통해서
// 인스턴스로 생성해서 사용해야 한다!!!

// 강의: 자바스크립트 객체 형태, JS의 OOP구현 방법,
// -prototype형태/연결

// JS 객체 형태
// Object오브젝트 형태
/* const book = {
  read: function (param) {
    코드;
  },
}; */

// Object인스턴스를 생성할 수 없음
// 이것을 이용할 수도 있다.
// 복습 차원에서 왜 활용할 수 있는지를 되짚어보자.
// 인스턴스가 생성된다는 것은 프로토타입이 있다는 것이고
// 프로토타입이 있다는 것은 그 안에
// 복사되어 오는 메소드들이 있다는 것이니까
// 그것을 쓰지도 않을 것이면 괜히 인스턴스로 인해
// 메모리만 차지하고 프로그램이 조금이라도 무거워지게 되기 때문이다.

// Function오브젝트 형태
// function readBook(param){코드}
// 객체이지만, OOP의 객체라고 하기에는 부족
// 왜냐하면, OOP의 객체는 개념적인 것으로
// 이것을 가지고 Class라고 정의한다고 했고,
// 그 안에는 다수의 메소드가 있다고 했는데,
// 이것은 오직 하나의 메소드이기 때문에
// 객체에 메소드가 하나 있는 모습..
// 그래서 OOP의 객체라고 하기엔 작다랄까?

// prototype
// JS의 OOP구현 방법
// prototype에 메소드 연결

// prototype의 형태
/* "use strict";

const obj = String;
const proto = obj.prototype;
// 프로토타입 안에 많은 프로토타입이 있는데,
// 이것을 클래스 관점에서 보면
// String이 클래스 네임이 되고,
// 안에 작성된 것들이 메소드와 프로퍼티가 되는 것이다.
debugger; */

// js는 프로토타입에 객체지향에서 말하는
// 메소드를 연결해둔다.
// 다른 언어와 이것부터에서 차이가 난다.

// 그럼 우리가 개발하는 것은 어떻게 하면 될 것인가?
/* const Book = function () {};
Book.prototype.getBook = function () {
  return "JS북";
};
// 1. 함수 작성
// 2. Book.prototype에 getBook 메소드 연결
// 3. prototype이 오브젝트이므로,
// {이름:메소드}형태로 연결할 수 있음
// 여기서는 메소드 이름이 getBook이고 메소드가 function~~
// 이다. 다만 js는 prototype을 사용한다는 것이다.
const proto = Book.prototype;
debugger;
// 객체에서 속성이 프로퍼티,attribute */

// function오브젝트를 만들면 prototype이 기본적으로
// 만들어진다.
// 이건 js엔진이 만들어준다.
// 거기서 우리가 뭘 더 붙이면 class개념이 되는 것이고,
// 안붙이고 그대로 사용하면 function오브젝트가 되는 것이다.

// 결과적으로 function오브젝트를
// 2가지 형태로 사용할 수 있는 것이다.

// 참고로 개발자들 간의 시멘틱인데,
/* const Book = function () {};
Book.prototype.getBook = function () {
  return "JS북";
}; */
// 이거처럼 Book 함수 이름이 대문자로 시작하면
// 클래스로 사용하겠다는 것이다.
// 즉, 북.프로토타입에 메소드를 연결해서 사용하겠다는 시멘틱
// 소문자면 단일 펑션, 즉 프로토타입에 메소드를 연결하지 않고
// 사용하겠다는 시멘틱임

// 이런 관점에서 보면 String, Number오브젝트 모두
// 대문자로 시작하니까 해당 prototype에 메소드가
// 연결되어있다는 의미이다.

// 다른 언어는 class안에 메소드와 프로퍼티를 작성
// 자바스크립트는 프로토타입에!

// ES6에서 class에 메소드 작성
// 하지만 엔진이 알아서
// 내부에서 프로토타입에 연결
/* class Book {
  constructor(title) {
    this.title = title;
  }
  getBook() {
    return this.title;
  }
}
debugger; */

// 강의: js인스턴스, instanceof연산자

// 인스턴스
// 클래스를 new연산자로 생성한 것
// ES5에는 클래스가 없지만, 앞서 배운 것처럼
// prototype에 연결된 것이 있으면
// 클래스로 볼 수 있음.
// 이것은 new연산자로 생성할 수 있음.

// 인스턴스 목적
// 클래스에 작성된 메소드를 작성
// 프로토타입에 연결된 프로퍼티로
// 인스턴스를 만들어서 메소드로
// 호출하겠다는 뜻.
// 그리고 가장 중요한 것은
// 인스턴스 마다 프로퍼티 값을
// 유지하겠다는 목적이 있다.

// new연산자
// 인스턴스를 생성하여 반환
// new Book("JS책");
// 인스턴스를 생성하므로
// Book()을 생성자 함수라고 부름
// Book..
// ES5에서는 생성자 함수,
// ES6에서는 클래스
// 파라미터로는 생성자 함수로
// 넘겨 줄 값을 소괄호()에 작성
/* const Book = function (point) {
  this.point = point;
  // 여기서 this는 생성하는 인스턴스를 참조
};
Book.prototype.getPoint = function () {
  return this.point + 100;
};
const oneInstance = new Book(200);
// 인스턴스를 사용할 때는 프로토타입을 작성하지 않는다.
console.log(oneInstance.getPoint()); */

// instanceof
// 오브젝트로 생성한 인스턴스 여부 반환
// instance instanceof object
// 인스턴스를  생성했냐.    이걸로
// 1. 클래스로 활용할 Book만들기
/* const Book = function (point) {
  this.point = point;
};
// 2. 클래스로 만들기
Book.prototype.getPoint = function () {
  return this.point + 100;
};
// 3. new를 이용해서 인스턴스 만들기
const oneInstance = new Book(200);
// 4. new를 사용해서 Book이걸로
// oneInstance를 만들었니?
console.log(oneInstance instanceof Book); */

// 강의: 메소드 형태, 메소드 호출 방법

// 메소드 호출 형태

// OOP의 일반적인 형태
/* const data = ["book", "책", 123];
// 데이터 형태: 배열
const obj = new Array();
// new를 이용해서 인스턴스를 만듦
// 이 Array는 클래스 이름이다.
// 앞에서 봤던 Book처럼!
const result = obj.concat(data);
// 인스턴트.콘캣을 이용해 데이터를 넘겨줌
console.log(result); */

// 이것이 전형적인 형태이다.
// 인스턴스가 있어야 하고,
// 거기에 .을 찍고 concat 메소드를 호출해서 사용

// js는 또 다른 방법이 있다.
// 1. 데이터로 메소드 호출
/* const data = ["book", "책", 123];
const result = data.concat();
console.log(result);
// 원래는 데이터 뿐인 data이기 때문에
// concat을 호출해도 안되는게 정상이지만
// js는 엔진이 data의 타입이 Array임을
// 확인하고 빌트인 Array의 프로토타입에
// 연결된 메소드로 인스턴스를 만들어
// 그 인스턴스의 concat을 호출함. */

// 2. 오브젝트의 함수 호출
/* const data = ["book", "책", 123];
const bookObj = {
  // 오브젝트 만듦
  concat: function (data) {
    // 프로퍼티를 만들고,
    // 값으로 함수를 할당
    return data.concat();
  },
};
console.log(bookObj.concat(data));
// 요런 경우는 new연산자로 인스턴스를 못 만듦
// 즉, 공통적인 내용이 들어간다는 것
// 인스턴스를 만들지 않고 간단하게 사용할 수 있다. */

// 인스턴스를 많이 만들면 만들수록
// 메모리를 많이 사용하는데
// 이런 것은 메모리를 절약할 수 있다.

// 3. 인스턴스의 메소드 호출
/* const data = ["book", "책", 123];
const Book = function (data) {
  this.data = data;
};
Book.prototype.concat = function () {
  return this.data.concat();
};
const oneInstance = new Book(data);
console.log(oneInstance.concat());
debugger; */

// Object확장
/* // 네임스페이스로 사용
Book = {}; // 이거 자체는 오브젝트
Book.Javascript = {}; // .Javascript라고 적으면
// js가 오브젝트가 되고 Book이 네임스페이스가 된다.
Book.Html = {}; */

// 메소드 사용 팁
// 메소드를 알 수 없을 때는?
// MDN 활용
