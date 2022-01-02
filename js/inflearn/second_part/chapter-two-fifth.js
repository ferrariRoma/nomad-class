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

// 즉, prototype에 연결되지 않은 것은
// 여기에 포함되지 않는다는 것이다.

// 그래서, prototype-based상속이라고도 한다.
// Class-based와 비교를 하기 위한 용어.

/* function Book(title) {
  this.title = title;
}
Book.prototype.getTitle = function () {
  return this.title;
};
function Point(title) {
  Book.call(this, title);
}
Point.prototype = Object.create(Book.prototype, {});
var obj = new Point("자바스크립트");
console.log(obj.getTitle()); */

// 위 코드에서 Object.create는 Book.prototype을
// Point.prototype에 할당시켜준다.
// 두번째 파라미터{}는 Point.prototype이 갖는 메소드를
// 작성해주는데 여기서는 생략했다.

// 그리고 나서 new연산자로 Point생성자 함수를 호출함.

// 그런데
// Book.prototype.getTitle = function () {
//     return this.title;
//   };
// 이 부분은 연결이 되어있지만,

// function Book(title) {
//   this.title = title;
// }
// 이 부분은 연결이 안됐다.

// 그래서
// function Point(title) {
//   Book.call(this, title);
// }
// 이렇게 파라미터 값(this, title)을 넘겨줘서
// 파라미터 값을
// this로 참조하는(this.title = title;) Book을
// 현재 만드는 인스턴스가 참조하도록 만들어준다.

// 조금 복잡한데 6에서는 Class가 추가되면서
// 복잡함이 많이 완화되었다. 고로 사용을 권장함!

// js에서 prototype은 상속보다
// 프로퍼티 연결의 의미가 더 크다.
// 위에서도 Point.prototype에 Book.prototype의 메소드를
// 다 연결시키고 new Point를 이용해서 인스턴스를 만듦.
// 이런 면에서 보면 상속을 통한 인스턴스 연결도
// 프로퍼티 연결의 하나로 볼 수 있다.
// 이 '연결'한다는 개념만 잡고 있으면
// Book.prototype을 Point.prototype에 연결시킨다고
// 쉽게 이해가 가능하다.

// 6에서는 위와 같은 코드를 우리가 기입하지 않는다뿐이지
// 내부적으로는 저런 과정이 다 이루어진다.

// ES5상속은 OOP의 상속 기능 부족하다.
// 예를 들면 상속받은 프로퍼티를 참조하는
// '수퍼 키워드'가 없다.
// 6에서는 그런 기능들을 지원한다.
// 그래서 상속을 사용하려면
// 6의 Class로 상속 사용하라!

// 앞에서 배운 것처럼 어차피 Class도
// 나중에는 prototype을 만들어서
// 그 안에 설정해둔다.
// <아래는 chapter one에서 했던 내용>

/* class Book {
  constructor(title) {
    this.title = title;
  }
  getBook() {
    return this.title;
  }
}
debugger; */

// 아래는 본 수업에서의 예시이다.

/* class Book {
  // 키워드 자체도 class이다.
  constructor(title) {
    this.title = title;
  }
  getTitle() {
    return this.title;
  }
}
class Point extends Book {
  // Point가 extends라는 키워드를 이용해서
  // Book을 상속받는다.
  constructor(title) {
    // constructor을 오버라이딩하였다.
    // constructor은 ES6에서 변경이 가능하다!
    super(title);
  }
}
const obj = new Point("자바스크립트");
console.log(obj.getTitle()); */

// 위에서 class를 사용하지 않았을 때와 비교를 해보자.
/* function Book(title) {
  this.title = title;
}
Book.prototype.getTitle = function () {
  return this.title;
};
function Point(title) {
  Book.call(this, title);
}
Point.prototype = Object.create(Book.prototype, {});
var obj = new Point("자바스크립트");
console.log(obj.getTitle()); */

// 이전에는
// 의도적으로 prototype에
// class에는
// 연결시켜야 하는 코드들이 있는데,
// 여긴 그런게 없다.

// 강의: prototype확장 방법, 프로퍼티 연결 고려사항,
// -constructor연결, prototype확장과 인스턴스 형태

// prototype 확장 방법

// prototype에 프로퍼티를 연결하여 작성한다.
// prototype.name = value 형태로 작성.
// name에 프로퍼티 이름을 작성한다.

// value에 JS데이터 타입 작성할 수 있다.
// 일반적으로는 function을 사용한다.

// prototype에 null을 설정하면 확장 불가!
// 더 이상 확장하지 않겠다는 시멘틱이다.

// 프로퍼티 연결 고려사항

// prototype에 연결할 프로퍼티가 많을 때
// Book.prototype.name1,2,3,~N형태는
// Book.prototype을 반복해서 작성해야 하므로 번거롭다.
// 그래서 중괄호를 이용해서
// Book.prototype = {name1:value,...}형태로 작성한다.

// 하지만 이렇게 했을때 문제는 prototype 안에 있는
// constructor가 지워지게 된다.

// constructor가 지워지는 문제와 대책으로는,
// 그래도 저렇게 오브젝트를 이용해서 한 번에 설정을 하고
// 이후에 다시 constructor을 연결해주는 것이
// 더 편하기 때문에 저런 형식을 사용해준다.
// {name1:value,...}형태로 설정한 후
// prototype에 constructor를 다시 연결

// constructor 연결

/* function Book() {}
Book.prototype = {
  constructor: Book,  // -> 의도적으로 constructor을 설정
  setPoint: function () {},
};
var obj = new Book();
console.log(obj.constructor); */

// 오브젝트 리터럴{}을 사용해서
// 프로퍼티를 연결할 때에는
// constructor가 지워지는 것을 고려해야 하지만
// ES5에서는 constructor가 없어도 인스턴스는 생성된다.

// 그래도 constructor가 연결된 것이 정상이므로
// 코드처럼 constructor에 Book function을 할당한다.
// ES5에서는 이런 방법이 가장 정석적이다.
// 6에서는 이런걸 고민할 필요가 없다.
// Class를 사용하니까 그런 듯 하다.

// prototype확장과 인스턴스 형태

/* function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return this.point;
};
var obj = new Book(100);
obj.getPoint();
debugger; */

/* obj:{
    point:100,
    [[Prototype]] = {
        getPoint: function(){},
        constructor: Book,
        [[Prototype]]: Object
    }
} */

// 1. function Book(point){};
// Book오브젝트 생성

// 2. Book.prototype.getPoint = function(){}
// Book.prototype에 getPoint메소드 연결

// 3. var obj = new Book(100);
// 인스턴스를 생성하여 obj에 할당

// 4. obj.getPoint()
// obj 인스턴스의 getPoint()호출

// 5. 인스턴스를 생성하면 prototype에 연결된 메소드를
// 인스턴스.메소드이름() 형태로 호출한다.

// getPoint가 저렇게 기술되어 있는 것은 가독성을
// 위한 것이지 실제로는 호출하면 원본에 있는 메소드를 가지고 온다.

// 강의: this와 prototype, this로 인스턴스 참조, this와
// -prototype, prototype메소드 직접 호출

// this로 인스턴스 참조

// this로 메소드를 호출한 인스턴스를 참조한다.
// var obj = new Book();
// obj.get()형태로 메소드를 호출했을 때
// get()메소드 안에서 this로 obj참조
// 즉, get메소드 앞에 기술된 object를 참조하는 것이다.
// objA.objB.get()이라고 하면 바로 앞에 기술된
// objB를 참조하게 된다.

// 인스턴스에서 메소드 호출 방법
// Book.prototype에 연결된 프로퍼티(메소드)가
// [[Prototype]]에 설정되며
// 그러면 인스턴스 프로퍼티가 됩니다.

// 인스턴스 프로퍼티란
// this.prototype.setPoint()형태가 아닌
// prototype을 제외하고
// this.setPoint()형태로 호출한다.

// this와 prototype의 관계

// 아래 코드를 참고해보자.
/* function Book() {
  console.log("1: ", this.point);
}
Book.prototype.getPoint = function () {
  this.setPoint();
  console.log("2: ", this.point);
};
Book.prototype.setPoint = function () {
  this.point = 100;
};
var obj = new Book();
obj.getPoint(); */

// 1. console.log("1: ", this.point);
// 생성자 함수에서 this는 생성하는 인스턴스 참조한다.
// 어? 근데 point프로퍼티가 없네?
// 생성하는 인스턴스에 point프로퍼티가 없더라도
// 에러가 나지 않고 undefined를 반환한다.

// 이것이 변수와 instance property의 차이이다.
// 프로퍼티는 undefined를 반환하고,
// 변수는 포인트 변수가 없으면 에러가 난다.

// 2. obj.getPoint();
// 에러가 나지 않고 getPoint를 호출한다.
// 여기서는 this가 메소드를 호출한 인스턴스 참조한다.
// obj를 참조한다는 말이다. 근데 obj는 인스턴스니까
// 자신을 호출한 인스턴스를 this로 참조하게 된다.
// 즉, 메소드 앞에 작성한 인스턴스 참조하게 된다.

// 3. this.setPoint();
// this가 인스턴스 참조하며
// 인스턴스에 있는 setPoint()호출

// 이런 점이 단일 함수로 사용하는 것과
// 인스턴스로 사용하는 것의 차이점이다.
// 인스턴스 안에서는 프로포타입에 연결된 것은
// 모두 하나의 프로퍼티 개념이다.
// 그래서 this로 호출할 수 있는 것이다.

// 4. this.point = 100;
// 이때 this는 obj인스턴스를 참조하게 되는 것이고
// 여기서 obj인스턴스의 포인트 프로퍼티에 100을 할당했으므로
// 100을 공유하게 된다.

// 인스턴스를 만드는 또 다른 목적은
// 인스턴스 마다 고유한 값을 유지하기 위함도 있지만
// 인스턴스라는 묶음 안에서 처리할 수 있다는 점도 있다.

// prototype 메소드를 직접 호출하는 형태

/* function Book(point) {
  this.point = point;
}
Book.prototype.getPoint = function () {
  return this.point;
};

var obj = new Book(100);
console.log(obj.getPoint());

console.log(Book.prototype.getPoint());
debugger; */

// 1. Book.prototype.getPoint();
// .prototype. 처럼 경로를 다 적어주었다.
// 인스턴스를 생성하지 않고 직접 메소드 호출

// 2. 위처럼 경로를 작성하면
// this는 바로 앞에 기술된 것을 참조한다고 했으니까
// Book.prototype을 getPoint()에서
// this로 참조한다.

// obj.getPoint()를 하면 바로 앞에 있는
// obj를 참조하게 되니까 100을 point에 할당하게 되어
// 100이 반환되는데,

// 3. obj인스턴스에는 point가 있지만
// Book.prototype에 point가 없으므로
// undefined를 반환한다.
// 여기서도 point가 일반 변수가 아니라
// 프로퍼티이기 때문에 undefined를 반환한다.

// prototype과 instance는 오브젝트부터가 다르다.
// 저장하는 위치가 다른 것이다. 그러니 당연히 없는 것이다.

// 4. 인스턴스를 생성하여 메소드를 호출하는 것과
// 직접 prototype을 작성하여 호출하는 것의 차이이다.

// 이런 형태를 안쓰는 것은 아니지만
// 앞에서 잠깐 맛을 보았듯이 이런 경우에는
// call, apply, bind를 이용한다.
// 이것들은 getPoint의 this가
// 지정한 오브젝트를 참조할 수 있게 만들어 준다.

// 강의: prototype프로퍼티 공유 시점

// prototype 프로퍼티 공유 시점

// 공유하는 시점은 사용하는 시점에
// prototype의 프로퍼티를 공유한다.

// 즉, 메소드를 호출하는 시점에서
// prototype의 메소드를 공유한다.

// prototype의 프로퍼티로 인스턴스를 생성하지만
// 인스턴스의 프로퍼티는
// 원본 prototype의 프로퍼티를 참조한다.
// 브라우저 개발도구창에 보면 인스턴스를 보면
// prototype에 연결된 메소드가 많이 보이지만
// 경로만을 가지고 보여주는 것이지
// 복사하여 인스턴스에 갖고 있는 개념이 아니다.

// 인스턴스의 메소드를 호출하면
// 원본 prototype의 메소드를 호출한다.

// 원본 prototype에 메소드를 추가하면
// 인스턴스를 생성한 후라도
// 생성된 모든 인스턴스에서
// 추가한 메소드가 사용 가능하다.

// 원본 prototype에 메소드를 추가하면
// 생성된 모든 인스턴스에서 추가한 메소드를 사용할 수 있다.
// 호출하는 시점에 원본 프로토타입의 메소드를 공유하고
// 원본 prototype의 메소드를 호출하기 때문이다.

// 프로퍼티 공유 시점

// 아래 코드 참조

function Book() {
  this.point = 100;
}

var obj = new Book();
console.log(obj.getPoint);

Book.prototype.getPoint = function () {
  return this.point;
};

var result = obj.getPoint();
console.log(result);

debugger;

// 1. var obj = new Book();
// 인스턴스를 생성하여 obj에 할당

// 2. console.log(obj.getPoint);
// obj인스턴스에 getPoint()가 없음
// 아직 없기 때문에 undefined가 출력

// 3. Book.prototype.getPoint = function(){
//     return this.point;
// }
// Book.prototype에 getPoint()추가하였으니
// 앞에서 생성한 obj인스턴스에서 getPoint()를
// 사용할 수 있다.

// 4. var result = obj.getPoint();
// 인스턴스를 생성할 때는 obj에 getPoint가 없었지만
// getPoint()를 호출하기 전에 Book.prototype에
// getPoint()를 추가했으므로 호출할 수 있습니다.

// 5. return this.point;
// 추가하더라도 this가 인스턴스를 참조한다.
// 여기서 this는 호출하는 시점에서의 인스턴스를 참조한다.
// 실행 콘텍스트가 만들어지고
// obj를 this 바인딩 컴포넌트에 바인딩 시키고
// 그것을 this가 참조하게 된다.

// 즉, 만드는 시점과는 관계가 없고
// 호출하는 시점에 obj가 this바인딩에 바인딩 되기 때문이다.
// 만약, getPoint에 정적으로 this가 바인딩 되면
// 이처럼 '인스턴스' 개념으로 만들 수 없다.

// 6. 이런 특징을 활용하여
// 상황(필요)에 따라 메소드를 추가하는 등의
// 역동적인 프로그램 개발이 가능하다.

// 강의: 인스턴스 프로퍼티, 인스턴스 프로퍼티 우선 사용

// 인스턴스 프로퍼티

// prototype에 연결된 프로퍼티도
// 인스턴스 프로퍼티가 됩니다.
// obj.프로토타입에_있는_메소드 의 형태로 호출하기 때문에
// 인스턴스의 프로퍼티가 된다고 한다.
// 하지만 직접 인스턴스에 연결된 프로퍼티와 차이가 있다.

/* obj인스턴스 = {
    point: 100, // 직접 연결한 프로퍼티
    getPoint: function(){},
    [[Prototype]]: { 
        // 프로포타입에 설정된 메소드들이 여기에 첨부된다.
        getPoint: function(){}
    }
} */

// 인스턴스의 프로퍼티를 prototype으로 만든
// 인스턴스 프로퍼티 보다 먼저 사용

// 인스턴스마다 값을 다르게 가질 수 있음!
// 인스턴스를 사용하는 중요한 목적
