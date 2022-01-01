// function instance

// 강의: function인스턴스 기준, function인스턴스 생성

// 지금까지는 엔진 중심으로 강의를 진행했지만
// 엔진 처리를 바탕으로 한 활용을 배우도록 하겠다.

// function 인스턴스 기준

// 아래의 예시를 보자.
/* function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return this.point + 200;
};
var obj = new Book(100);
obj.getPoint(); */

// function구분
// 빌트인 function 오브젝트: function키워드로 생성
// 엔진에서 제공해줌.

// function인스턴스: new연산자로 생성
//

// function 오브젝트도 인스턴스이다.
// 빌트인 function 오브젝트로 생성하기 때문이다.
// 하지만 성격적으로는 인스턴스이지만
// new연산자로 생성한 인스턴스와 구분하기 위해서
// 강좌에서는 function오브젝트로 표기한다.
// 우리가 일반적으로 말하는 함수가 function오브젝트이다.

// new연산자로 생성하는 인스턴스는
// 일반적으로 prototype에 프로퍼티를 작성한다.
// 그래서 프로토타입만 보면 'new연산자로 인스턴스를 만들겠구나!'
// 하는 것을 짐작할 수 있다.

// function 인스턴스 생성

// 아래 코드는 function인스턴스를 생성하는
// 전형적인 형태이다.

/* function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return this.point + 200;
};
var obj = new Book(100);
console.log(obj.point);
console.log(obj.getPoint()); */

// 1. function Book(point){}
// Book오브젝트를 생성한다.
// Book.prototype이 만들어 진다.
// 엔진이 자동으로 만든다.
// prototype은 오브젝트이다.
// 따라서 이처럼 프로퍼티를 연결할 수 있다.

// 2. Book.prototype.getPoint = function(){}
// Book.prototype에 getPoint를 연결하고
// function(){} 오브젝트를 할당
// 프로퍼티 관점에서 보면 getPoint는 프로퍼티 이름,
// function(){}은 프로퍼티 값이다.
// Book.prototype이 오브젝트이기 때문에
// 프로퍼티를 연결할 수 있다.

// 3. var obj = new Book(100);
// Book()을 실행하자마자 인스턴스를 생성하고
// 생성한 인스턴스에 코드를 실행해서 point값을 설정
// 여기서 this는 생성한 인스턴스를 참조한다.
// Book.prototype에 연결된 메소드들을
// 생성한 인스턴스에 할당
// 하나도 빠짐없이 {name:value}형태로 할당된다.

// 4. console.log(obj.point);
// obj인스턴스에서 프로퍼티 이름으로 값을 구해 출력
// 식별자 해결의 과정이다.

// 5. console.log(obj.getPoint());
// obj인스턴스의 메소드를 호출
// 여기서 getPoint 안에 this는
// getPoint() 앞에 있는 obj를 참조한다.
// obj가 뭐냐 하면, 인스턴스이다.

// 고로 new Book(100)을 참고해서 100을 반환받고,
// 결과적으로는 300을 반환해준다.

// 6. return this.point+200;에서
// this가 obj인스턴스를 참조

// 7. 강좌의 함수/메소드 사용 기준
// Book(): 함수
// getPoint(): 메소드, prototype에 연결

// 강의: 생성자 함수, 생성자 함수 실행 과정, 인스턴스 생성 과정

// 생성자 함수

// new 연산자와 함께 인스턴스를 생성하는 함수
// new Book()에서 Book()이 생성자 함수이다.

// new연산자는 인스턴스 생성을 제어한다.
// new연산자가 인스턴스를 만드는 것이 아니다.
// 이건 생성자 함수를 호출한다.

// 생성자 함수는
// 인스턴스를 생성하고 반환한다.
// 인스턴스에 초깃값을 설정한다.

// new연산자가 생성자 함수를 호출하면
// 생성자 함수가 인스턴스를 생성하고 반환하면
// new연산자가 그 인스턴스를 받아서 최종적으로 반환하는
// 형태가 된다.

// customarilly 생성자 함수의 첫 문자는 대문자이다.

// 생성자 함수 실행 과정

// 아래의 코드를 참조하자

/* function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return this.point;
};
var obj = new Book(10); */

// 1. 엔진이 new연산자를 만나면
// function의 내부 프로퍼티인
// [[Construct]]를 호출하면서
// 파라미터 값으로 10을 넘겨준다.

// <정리>
// 즉 최초에 엔진이 스크립트를 읽으면서
// 선언문을 처리할 때 만들어 놓은 Book function오브젝트에
// [[Construct]]이게 있는거지.
// 그래서 new연산자를 엔진이 만나면 [[Construct]]를
// 이용해서 인스턴스를 생성하는거다.

// 2. function오브젝트를 생성할 때
// Book()함수 전체를 참조하도록
// [[Construct]]에 설정하였다.

// [[Construct]]는 new로 Book을 호출하는 것인데
// 다만 Book은 this.point부분만 처리하는데
// [[Construct]]는 prototype에 연결된 것도
// 다 처리한다.

// 3. 그래서 [[Construct]]에서
// 인스턴스를 생성하여 반환하고

// 4. 반환된 인스턴스를 new연산자가 받아서
// new연산자를 호출한 곳으로 반환한다.
// obj에 할당을 해주는 것이다.

// 인스턴스 생성 과정

// 아래 코드 참조

/* function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return this.point;
};
var obj = new Book(10);
console.log(obj);
debugger; */

// 1. new Book(10)실행
// Book 오브젝트의 [[Construct]]호출하고
// 파라미터 값을 [[Construct]]로 넘겨준다.
// -> Book function 오브젝트에 생성되어 있는
// constructor에게 전달해준다.

// 2. 이때 [[Construct]]는
// 빈 Object 생성하는데 이것이 인스턴스이다.
// 지금은 빈 오브젝트{}이며 하나씩 채워간다.

// 3. 오브젝트에 내부 처리용 프로퍼티를 설정한다.
// 공통 프로퍼티와 선택적 프로퍼티

// 4. 오브젝트의 [[Class]]에 "Object"설정
// 따라서 생성한 인스턴스 타입은 Object이 된다.
// 여기서 결정된다. Function에서 Object로 바뀜.
// -> [[Class]]는
// obj의 [[Prototype]]을 말하는 거 같음

/* Book인스턴스: {
  point: 10,
  __proto__ = {
    constructor: Book,
    getPoint: function () {},
    __proto__: Object,
  };
} */

// 5. Book.prototype에 연결된 프로퍼티(메소드)를
// 생성'한' 인스턴스의 [[Prototype]]에 설정
// constructor도 같이 설정
// constructor과 앞에서 본 [[Construct]]과는 다르다.
// 전자는 외부프로퍼티(obj의 프로퍼티),
// 후자는 내부프로퍼티(원본에 있는 프로퍼티)

// 강의: constructor프로퍼티

/* Book function 오브젝트:{
    prototype:{
        constructor: Book
    }
} */

// 생성하는 function오브젝트를 참조한다.
// function오브젝트를 생성할 때 설정한다.
// prototype에 연결되어 있음.

// 이때 constructor의 값은 book function오브젝트
// 전체를 참조한다.

// 개인 경험
// constructor가 없더라도 인스턴스가 생성됨.
// 하지만, 필요하지 않다는 의미는 아니다.

// ES5: constructor 변경 불가
// 생성자를 활용할 수 없음

// 6: 변경 가능!
// 활용성이 높다!

/* var Book = function () {};
var result = Book === Book.prototype.constructor;
console.log("1: ", result);

var obj = new Book();
console.log("2: ", Book === obj.constructor);

console.log("3: ", typeof Book);
console.log("4: ", typeof obj);
debugger; */

// 1. Book===Book.prototype.constructor;
// 두개가 타입까지 같다는 뜻이다.
// Book오브젝트를 생성할 때
// Book.prototype.constructor가
// Book오브젝트를 참조하기 때문이다.

// 2. Book===obj.constructor;
// obj의 constructor가
// Book오브젝트를 참조하므로 true이다.

// 3. typeof Book;
// Book오브젝트 타입은 function

// 4. typeof obj;
// obj인스턴스의 타입은 object

// 5. function오브젝트를 인스턴스로 생성했더니
// object로 타입이 '변경'되었습니다.
// 이것은 constructor가 실행될 때
// 생성한 오브젝트의 [[Prototype]]에
// Object를 설정하기 때문

// 6. 오브젝트 타입이 바뀐다는 것은
// 오브젝트 성격과 목적이 바뀐 것을 뜻합니다.
// 다른 관점에서 접근해야 합니다.

// 일반적인 함수의 관점에서 접근할 것이 아니라
// 인스턴스로 접근을 해야 한다는 뜻.
// 인스턴스의 가장 큰 특징은 프로토타입이 있으면
// 거기에 많은 메소드가 연결되어 있다는 것이다.
// 즉, 함수가 하나가 아니라 다수라는 것이다.
// 함수는 함수가 하나인데
// 인스턴스는 함수가 다수이다.

// 강의: prototype,상속,prototype오브젝트 목적,
// 인스턴스 상속

// prototype오브젝트 목적

// prototype확장
// prototype에 프로퍼티를 연결하여 prototype확장
// 가장 큰 목적이라고 할 수 있다.
// Book.prototype.getPoint = function(){}

// 프로퍼티 공유
// 생성한 인스턴스에서 원본 prototype의 프로퍼티 공유한다.
// var obj = new Book(123); 이렇게 인스턴스를 만들고
// obj.getPoint(); 이렇게 메소드를 호출하면
// Book.prototype.getPoint가 호출된다.
// 원본에 악세스할 수 있는 권한을 가지게 되는 셈이다.

// 인스턴스 상속
// function 인스턴스를 연결하여 상속
// Point.prototype = new Book();
// js에서 상속은 확장의 개념이다.

// 인스턴스 상속

// 인스턴스 상속 방법
// prototype에 연결된 프로퍼티로
// 인스턴스로 생성하여 상속받을 prototype에 연결
// 그래서, prototype-based상속이라고도 한다.

// js에서 prototype은 상속보다
// 프로퍼티 연결의 의미가 더 크다.
// 인스턴스 연결도 프로퍼티 연결의 하나

// ES5상속은 OOP의 상속 기능 부족
// 6의 Class로 상속 사용
