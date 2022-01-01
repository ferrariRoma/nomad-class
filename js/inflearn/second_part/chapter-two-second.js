// Function 오브젝트

// 강의: function형태, function오브젝트 생성,
// -오브젝트 저장, 생각의 전환

// function형태

// 빌트인 Function 오브젝트
// Function.prototype.call()
// 프로토타입에 메소드가 연결되어 있는 형태

// Function오브젝트
// function book(){...} 선언문
// const book = function(){...} 표현식
// function키워드를 사용한다.
// 인스턴스이지만, new연산자로
// 생성한 인스턴스와 구분하기 위해
// 강좌에서는 function오브젝트로 표기
// 일반적으로 함수나 메소드라고 하는 것은 이 형태이다.

// function인스턴스
// new Book()처럼 new연산자를 사용하여
// Book.prototype에 연결된 메소드로 생성

// function오브젝트 생성
// const book = function(){...}
// 엔진이 function 키워드를 만나면
// 빌트인 function오브젝트의
// prototype에 연결된 메소드로 function오브젝트 생성
// Function.prototype.constructor
// 생성한 오브젝트를 book변수에 할당
// 성격은 인스턴스이지만 new와 구분하기 위해 이렇게 표현함.

// book()형태로 호출 가능하다.
// function 오브젝트이므로 호출할 수 있음.
// function오브젝트이기 때문에 호출할 수 있다.

// 오브젝트 저장
// 함수를 호출하려면 생성한 function오브젝트를 저장해야 한다.

// function오브젝트를 저장하는 형태로는
// 프로퍼티{name: value}형태로 저장
// {book:생성한 function오브젝트}

// 함수를 호출하면
// 1. 저장된 오브젝트에서 함수 이름(book)으로 검색
// 즉, 식별자 해결을 하고
// 2. value값을 구하고
// 3. value가 function오브젝트이면 그 함수를 호출

// 생각의 전환을 해봅시다!
// 함수가 호출되면 '엔진'은
// 함수의 변수와 함수를
// {name:value}형태로 실행 환경을 설정하고 함수 코드를 실행

// 프로퍼티{name:value}형태로 생각을 전환해야
// js의 아키텍처와 메커니즘을 쉽게 이해할 수 있다.

// function(){}코드를 보면
// 함수의 변수와 함수가 {name:value}형태로
// 연상되어야 한다.
// 이것은 엔진의 관점에서 접근이다.

// 강의: function오브젝트 생성 과정, function오브젝트 구조

// 생성 과정
// function sports(){} 형태에서
// function키워드를 만나면
// 오브젝트를 생성하고 저장한다.
// 프로퍼티{sports:{...}}
// sports는 function 오브젝트 이름
// 오브젝트 {...}에 프로퍼티가 없는 상태이다.

// 이제부터 빈 오브젝트를 채운다.
/* const sports = function () {};
// 이까지만 하면 sports내부 프로퍼티가
// 아무것도 채워지지 않은 상황이다.
// prototype이 있고, [[prototype]]이 있다.
// prototype를 살펴보면 [[prototype]]이
// 있는데 이 [[prototype]]은 Object이고,
// Built-in Object object에 있는
// prototype의 메소드 6개가 설정되어 있다.
// 밖에 있는 [[prototype]]은 function인데
// Built-in Function object에 있는
// prototype의 메소드 3개가 들어있다.
// [[]]이거는 엔진이 만들었다는 뜻이다.

// sports.prototype.[[prototype]] = Object
// sports.[[prototype]] = Function
debugger; */

// function 오브젝트 생성 과정

// 1. 아래와 같이 sports오브젝트에 prototype오브젝트 첨부

// 2. prototype에 constructor프로퍼티 첨부
// => prototype.constructor가 sports오브젝트 참조
// 즉, 오브젝트 전체를 참조하게 된다.

// 3. prototype에 [[prototype]]오브젝트 첨부(안 프로토)
// => ES5스펙에 __proto__([[prototype]])가
// 기술되어 있지 않으며,
// 6스펙에 기술되어 있다.
// 엔진이 사용한다는 뉘앙스로 정의되어 있다.
// ES5 기준으로 보면 표준은 아니지만, 2000년대 초부터
// 파이어폭스에서 사용

// __proto__ -> ES5에서는 표준X. 하지만 파이어폭스에서 사용
// -> ES6에서는 기술되어 있다.

/* sports = {
    prototype:{
        constructor: sports
        [[prototype]]:{}
    }
} */

// 4. 빌트인 Object.prototype의 메소드로
// Object인스턴스를 생성하여
// prototype.[[prototype]]에 첨부
// => 이로인해 앞서 말했던 6개의 메소드가 여기 첨부된다.

// sports.prototype.[[prototype]] =
// Object.prototype.constructor로 생성된 인스턴스를 첨부
// Object.prototype에 있는 메소드 6개가 여기 첨부

// sports.[[prototype]] =
// Function.prototype.constructor로 생성된 인스턴스를 첨부
// Function.prototype에 있는 메소드 3개가 여기 첨부

// 5. sports오브젝트에 [[prototype]]오브젝트 첨부(밖 프로토)
// sports.[[prototype]]구조가 된다.
// prototype과 같은 레벨로 sports에 첨부가 된다.

// 6. 여기다가 빌트인 Function.prototype의 메소드로
// function인스턴스를 생성하여
// sports.__proto__([[prototype]])에 첨부
// => 여기에는 call, bind, apply메소드가 첨부된다.

// 7. sports오브젝트 프로퍼티에 초기값 설정
// arguements, caller, length, name

// 여기서 두 개의 [[prototype]]은 이름은 같지만
// 구조적으로 계층이 다르다.
// sports.prototype.[[prototyp]]
// sports.[[prototype]]

// 자, 정리를 해보자.

// function 오브젝트에 prototype이 있고,
// 그 안에 constructor가 연결된다.
// 그리고 마찬가지로 그 안에 [[prototype]]이 연결되어 있으며,
// 여기에 빌트인 오브젝트의 프로토타입에 연결된 메소드로 만든
// 인스턴스가 연결된다.(6개)
// 그 밖에는 빌트인 펑션 오브젝트의 프로토타입에 연결된
// 3개의 메소드가 연결된다.(3개)
// Array를 만든다고 보면,
// 빌트인 어레이 오브젝트의 프로토타입에 연결된
// 메소드로 인스턴스를 만들어서 여기 할당한다.

// 하나 눈 여겨 볼 것은 일반적으로 함수라고 하면
// '함수'의 개념으로 받아들였는데,
// 엔진의 관점으로 보면 오브젝트이고,
// 그 안에는 프로퍼티로 구성되어 있다.
// 그래서 우리도 오브젝트의 형태로 바라보도록 노력해보자.

// 강의: 함수 실행 환경 인식, 함수 실행 환경 저장, 내부 프로퍼티

// function 실행 환경 인식.
// 이걸 왜 인식해야 함?
// 함수가 호출되었을 때 실행될 환경을 알아야 실행 환경에 맞추어
// 실행할 수 있기 때문이다.

// 실행 환경 설정 시점은 function키워드를 만나
// function 오브젝트를 생성할 때이다.

// 설정하는 것은 실행 영역이다. 실행 영역이라고 하면
// 함수가 속한 스코프를 말한다.
// 즉, 렉시컬 스코프를 말한다.
// 이때 스코프를 딱 한 번만 생성해주면 된다.
// 파라미터, 함수 코드 등을 설정한다.

// -> 실행 환경 설정에서 설정 하는 것은 실행 영역이다.
// 실행 영역 중에서도 스코프를 말한다.

// 함수 실행 환경 저장
// function오브젝트를 생성하고 바로 실행하지 않는다.
// 함수가 호출되었을 때 바로 사용할 수 있도록 환경을 저장해야

// 그럼 어디에 저장하는데?
// 함수가 실행될 영역을 별도로 만듦? 아님!
// 생성한 function 오브젝트에 저장한다.
// 생성한 function 오브젝트만 읽으면
// 그 안에 함수가 시행될 수 있는 환경이 다 설정되어 있다.

// 인식한 환경을 function오브젝트의 내부 프로퍼티에 설정
// {name:value}형태로

// 여기서 내부 프로퍼티란,
// 엔진이 내부 처리에 사용하는 프로퍼티이다.
// 스펙 표기로 외부에서 사용 불가이다.
// 스펙표기[[]]형태. [[Scope]]

// -> 설정된 실행 환경을
// 생성한 function오브젝트에 그대로 저장한다.
// 그게 [[Scope]]이다.

// 강의: 내부 프로퍼티 분류: 공통 내부 프로퍼티,
// -선택적 내부 프로퍼티

// 공통 프로퍼티는 모든 오브젝트에 공통으로 설정되는 프로퍼티이다.
// 모든 오브젝트란 빌트인 오브젝트로 만드는 오브젝트를 말한다.

// 선택적 프로퍼티란 오브젝트에 따라 선택적으로 설정되는 프로퍼티.
// 예를 들자면 Array오브젝트에는 설정되지만 String오브젝트에는
// 설정되지 않는 것들을 말한다.
// 해당되는 오브젝트에만 설정한다.

// 공통 내부 프로퍼티는
// 모든 프로퍼리가 아니라
// 대부분 오브젝트에!(MATH는 prototype을 갖지 않음)

// 강의: 함수 정의, 함수 선언문, 함수 표현식

// 함수 정의(예전 function강의의 내용이 들어가 있어서
// 복습으로 봐도 됨)

// 함수 정의 형태
// 함수 선언문/표현식/new Function(param,body)

// 강의: 엔진 해석 방법: 엔진 해석 순서, 함수 코드 작성 형태,
// -엔진 처리 상태

// 엔진 해석 순서
// 자바스크립트는 스크립팅 언어이다.
// 스크립팅 언어의 특징으로는
// 작성된 코드를 위에서부터 한 줄씩 해석(환경 설정)하고
// 실행한다는 것이다.

// 하지만 js는 조~금 다르다.
// 상황에 따라서는 중간에 있는 코드가 먼저 해석될 수도 있다.
// 그렇다고 무작정 이렇게 하는게 아니다.
// 먼저 해석하는 기준이 있는데,

// 1. 함수 '선언문'을 순서대로 해석한다.

// 2. '표현식'을 순서대로 해석한다.
// const value = 123;
// const book = function(){};
// 이거 둘 모두 표현식인데, 아래에 있는게
// 함수 표현식이다.
// 변수 형태로 할당한 것은 모두 표현식이라고 할 수 있겠다.

/* function book() {
  console.log(title);
  console.log(readBook);
  console.log(getBook);
  debugger;
  var title = "JS책";
  function getBook() {
    return title;
  }
  var readBook = function () {};
  getBook();
}
book(); */

// 엔진이 위의 코드를 어떻게 해석하고 처리할까?

// <복습 중 브레인 스토밍>
// 처음 실행을 하면 function키워드를 보고
// function오브젝트의 프로토타입을 이용하여 인스턴스를 생성
// book에 대한 실행환경 설정을 하겠지?
// 스코프를 형성한 이후에
// 생성된 function오브젝트에 저장한다.
// 그러고 나서 book()이 호출되면
// 실행 콘텍스트가 생성되고 그 안에 첨부된
// 외부 환경 렉시컬 참조에서
// 앞서 생성해서 function오브젝트에 저장해두었던
// Scope를 참조하는데 [[Scope]]에서 확인할 수 있다.

// 함수 코드 작성 형태
// 마지막 줄에서 book함수 호출
// 1. title변수 선언,
// 2. 함수 선언문 작성(getBook)
// 3. 함수 표현식 작성(readBook)

// 아래는 엔진 처리 상태이다.

// 마지막 줄에서 book()을 호출하면
// 엔진이 book안으로 이동해서
// debugger에서 실행이 멈춘다.

// title, readBook은 undefined
// getBook은 function오브젝트가 출력.
// 나머지와는 달리
// getBook은 이미 엔진에서 해석했다는 뜻.

// title,readBook에 설정된 undefined도 값이다.
// 값이 있다는 것은 엔진이 해석을 했다는 뜻이다.
// 해석하지 않으면 title, readBook값이 표시되지 않는다.

// 다만 title,readBook은 이름은 정상적으로 등록이
// 되어 있지만 값은 아직이라는 것이다.

// 이처럼 undefined가 등록된 것은
// js가 이름만 있으면 값을 undefined로 자동적으로
// 설정해버린다. 그래야 name:value 프로퍼티 구조가 맞기 때문이다.

// 강의: 함수 코드 해석 순서

// (지난 시간에 이어서...)
// 함수 코드 해석 순서

// book함수를 호출하면 book() 안으로 들어간다.
// 들어가고 나서,

// 1. 함수 선언문 해석
// function getBook(){};
// => 이때 전체 소스 코드를 한 번 훑고,
// 스코프에 저장.

// 2. 변수 초기화(표현식들을 해석)
// var title = undefined;
// var readBook = undefined;
// 아직은 값을 할당하지 않음!
// => 이때 두 번 훑었음.
// 이때 설정한 것을 스코프에 저장.

// 3. 코드 실행
// 그 다음 디버거를 만남.
// => 세번째 훑는 '중'

// 계속하면
// 여기서 "JS책"을 할당하고
// readBook에 function을 할당한다.
// 그리고 getBook()을 호출한다.

// 강의: 호이스팅, 함수 앞에서 호출, [코딩 시간]

// 호이스팅
// 함수 앞에서 함수를 호출하는 것을 호이스팅이라고 한다.
// 함수 선언문은 초기화 단계에서 function오브젝트를 생성하므로
// 어디에서도 함수를 호출할 수 있음.
// 즉 우리가 앞에서 배운 내용이 호이스팅과 관련된 내용이다.

// 이렇게 function 오브젝트가 생성되어 있기 때문에
// 함수 앞에서 호출 가능하다.
// 이것을 Hoisting이라고 합니다.
// 아래의 코드도 원래 에러가 나야 하지만
// 위에서 배웠던 것 처럼
// 이미 스코프에 설정이 되어 있기 때문에 에러가 안난다.
/* const result = book();
console.log(result);
function book() {
  return "호이스팅";
} */

// 이런 것을 호이스팅이라는 용어보다
// 앞에서 살펴본 '엔진 해석 순서'처럼 개념으로 접근

// 초기화 단계에서 값이 있으면 초기화하지 않음

// <뒤에서 나오는 내용 중 하나가 오버로딩>
// 오버로딩은 함수 이름이 같더라도 파라미터의
// 갯수나 데이터 타입이 다르면 다른 함수로 인식을
// 하는 것인데, JS는 그런게 없다.
// 그래서 덮어써질 수 있다!
// "아니 방금 안덮어써진다며? 뭔 개솔;;"
// 차이가 있다. 아래에서 그 차이를 확인해보자.

/* const result = book();
console.log(result);
function book() {
  return "호이스팅";
}
book = function () {
  // =>이미 book이 있어서 초기화를 안함.
  // function book이 계속 유지된다.
  return "함수 표현식";
};
function book() {
  return "덮어써진다.";
} */

// 내가 느낀 건 선언문과 표현식의 차이인 것 같다.

// 코딩 시간

// 목적
// JS의 {name:value}이해
// 함수 표현식과 함수 선언문 이해

// 문제는 1,2,3,4번의 결과에서 왜 그렇게 되는지의
// 논리를 설명해라!
// 1. 함수 선언문, 함수 호출(), 함수 선언문
// 2. 함수 표현식, 함수 호출(), 함수 표현식
// 3. 함수 선언문, 함수 호출(), 함수 표현식
// 4. 함수 표현식, 함수 호출(), 함수 선언문
/* function book() {
  function getBook() {
    return "책1";
  }
  console.log(getBook());
  function getBook() {
    return "책2";
  }
} */

// 강의: 오버로딩

// 오버로딩의 형태
/* function book(one) {}
function book(one, two) {}
function book(one, two, three) {}
book(one, two); */

// 함수 이름이 같더라도 파라미터 수 또는 값 타입이 다르면
// 각각 존재한다. 이걸 오버로딩이라고 한다.
// 함수를 호출하면, 파라미터 수와 값 타입이 같은 함수가 호출됨
// JS는 오버로딩을 지원하지 않는다.
// JS는 파라미터 수와 값 타입을 구분하지 않고
// {name:value}형태로 저장한다.

// 오버로딩 미지원: 함수 "선언문" 초기화
/* function book() {
  function getBook() {
    return "책1";
  }
  console.log(getBook());
//   function getBook() {
//     return "책2";
//   }
  //   const getBook = function () {
  //     return "책2";
  //   };
}
book(); */

// 1. 마지막 줄에서 book()함수를 호출하면
// 2. function getBook(){return "책1";}을 만나서
// getBook오브젝트를 생성한다.
// 3. getBook()을 호출하지 않고 아래로 내려간다.
// 4. function getBook(){return "책2";}를 만나
// getBook오브젝트를 생성한다.
// 2번의 오브젝트와 같은 이름이므로
// 여기서 생성한 getBook오브젝트로 대체된다.
// {name:value}형태에서 이름(name)이 같으므로
// 값(value)이 변경됩니다.

// 여기서 잠깐!
// 앞에 호이스팅 부분에서는
// "초기화 단계에서 값이 있으면 초기화 하지 않는다"
// 고 했는데 왜 여기서는 바뀌는거임?

/* <해석 단계>
function book() {};
var book = function(){};
=>대체(오버라이딩)되지 않습니다.
function book(){};
=>대체됩니다.
-----------------
<실행 단계>
function book(){}
var book = function(){};
=>대체됩니다. */

// 오버로딩 미지원: 변수 초기화
// 초기화할 변수가 없음

// 오버로딩 미지원: 코드 실행
// 함수 이름이 같으므로 위의 함수가 아래의 함수로 대체되었기 때문에
// "책2"가 결과에 출혁된다.

// 이런 이유로 오버로딩을 지원하지 않는다.
// key:value, name:value의 프로퍼티이다.
