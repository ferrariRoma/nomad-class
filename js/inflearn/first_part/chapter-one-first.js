// 강의: 강좌 환경
/* var hello = "안녕하세요";
document.body.innerText = hello; */

// 강의: 문장
// js코드 실행 단위. 세미콜론까지 하나의 문장!

// 강의: 변수
/* let book = "책",
  point = 123;
console.log(book, point); */
// 의미를 부여하여 변수 이름을 작명
// 시멘틱semantic

// 강의: 주석
/**
 *
 */

// 강의: console.log()
// console.log(data..) 소괄호 안에 작성한 값들을 parameter라고 한다.

// 강의: 상수, 진수
/* var ONE = 123;
// 대문자로 다 쓰는 것은 상수니까 바꾸지 마세요! 하는 시맨틱 선언.
// 그냥 const쓰면 되지만 일단은...
ONE = 456;
console.log(ONE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// JS가 제공하는 상숫값은 변경 불가! 바꾸면 에러난다~ */
// js에서도 2진수를 사용은 하는데 ES6에서 머신러닝을 하는 과정에서 쓴다.

// 강의: 데이터 타입
// 숫자타입, 문자타입.
/* const point = 123;
console.log(typeof point);
const book = "책";
console.log(typeof book); */
// 데이터는 반드시 타입을 가진다.
// js는 데이터를 기준으로 타입을 결정한다.
// 타입을 먼저 선언하고 타입에 맞는 데이터를 할당하는 C와는 반대로,
// 데이터를 할당하고 그에 따른 타입이 결정된다.

// 강의: Number타입, String타입
// 언어 타입과 스펙 타입
// 언어 타입은 6개이다.
// undefined, Null, Boolean, String, Number, Object
// 스펙(문서) 타입
// 언어 알고리즘을 위한 타입으로 JS프로그램에서 사용 불가

// Number타입에는 특수한 값 3개가 포함되어 있다.
// NaN(Not a number), Infinity, -Infinity
// 이 세 가지를 포함하고 있다.
/* const point = 1 * "A";
console.log(point); */
// js는 이렇게 다른 언어라면 에러가 날 수 있는 상황에서도 NaN을
// 출력해주고 이후의 코드들을 출력을 해준다.
// 프로그램을 죽지 않게 해주기 위해 노력한다.
/* const point1 = "책, '123'";
console.log(point1);
const point2 = '책, "123"';
console.log(point2); */

// 강의: Undefined, Null 타입
// Undefined(대문자)는 스펙 타입이고,
// undefined(소문자)는 값이다.
// Null(대문자) 타입은 스펙 타입이고,
// null(소문자) 타입은 값이다.
/* var point;
console.log(point);
var book = null;
console.log(book); */
// null은 할당을 해주어야 하지만,
// undefined는 값이 할당되어 있지 않으면
// 자동으로 할당이 된다.(물론 var, const, let 모두 각각 이 부분에서
// 조금씩 다르지만)

// 강의: Boolean 타입, Object 타입
// Object의 형태는 {name: value}의 형태
// property는 name과 value 하나를 지칭
// Object는 프로퍼티의 집합
// Object 안에는 프로퍼티를 작성하지 않아도 됨.
// 즉, 0개 이상의 프로퍼티가 필요!
/* const book = {
  title: "책",
  price: 123,
};
console.log(typeof book);
console.log(book); */

// 타입 정리
// 기본 데이터 타입을 Primitive 타입이라고 함.
/* console.log(typeof 123);
console.log(typeof "123");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
// object? typeof의 한계. ES6에서는 이에 대한 해결책이 나옴
console.log(typeof { book: "책" }); */
