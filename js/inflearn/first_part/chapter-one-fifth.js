// 강의: Number 오브젝트 개요, 프로퍼티 리스트
// 숫자 처리를 위한 오브젝트
// 함수를 호출하여 숫자를 처리하고,
// 프로퍼티로 값을 구한다.
// 목적: 숫자 값을 문자열로 변환
// 수단: toString()
// 목적을 기준으로 접근을 해야 한다.
// new Number()는 인스턴트를 생성합니다.(X)
// 인스턴트를 생성하기 위해 new Number()을 사용합니다.(O)

// 강의: Number타입으로 변환, Number상수
// 파라미터 값을 작성하지 않으면 0을 반환
/* console.log(Number("123") + 500);
console.log(Number("ABC"));
// 변환할 수 없는 값이면 NaN
console.log(Number(0x14));
// 16진수를 10진수로 변환
console.log(Number(true));
// true는 1로, false는 0으로 변환된다.
console.log(Number(null));
// null은 0으로 변환
console.log(Number(undefined));
// undefined는 NaN으로 */

// 강의: new연산자
// 연산자이므로 built-in-object에는 해당되지 않지만
// 다음 강좌에 필요한 지식!
// new연산자는 오브젝트로 인스턴스를 생성하여 반환
// 원본을 복사하는 개념이다.
// 즉, 오브젝트를 하나 복사하기 위해서 new를 쓰는 것이다.
// 그리고 복사된 복사본이 인스턴스이다.
/* const obj = new Number();
console.log(typeof obj); */
// 오브젝트를 복사하는 것이니까 obj로 object타입!

// new연산자를 쓰면 이런 Number도 함수로 호출되는데,
// 그래서 ()가 있는 것이다.
// 이때 함수 Number()로 호출되는 것이 생성자이다.
// 그리고 Number함수가 아닌 생성자 함수라고 부른다.

// 프로퍼티가 모여 Object,
// object는 인스턴스! 그래서 두개를 구분해야 한다.

// 인스턴스마다 값을 갖기 위해서 인스턴스를 생성한다.
/* const oneObj = new Number("123");
console.log(oneObj.valueOf());
const twoObj = new Number("456");
console.log(twoObj.valueOf()); */

// 강의: Number인스턴스 생성, 인스턴스 형태
// new Number()
// new연산자를 사용하여 Number생성자를 호출하면
// built-in Number오브젝트로 새로운 Number인스턴스를 생성
/* "use strict";
var numberObject = Number; // Number함수를 할당.
var obj = new Number("123"); // 빌트인 Number오브젝트를 할당
debugger;
console.log(obj.valueOf()); */
// 여기서 확인이 되겠지만, numberObject의 prototype과
// obj의 [[prototype]]가 같다.
// 인스턴스를 만드는 기준은 프로토타입 오브젝트에 연결된 것만 가지고 온다.
// 이것만 인스턴스에 할당해준다.
// 나머지 사항들은 원본에 와서 보라는 것임

// 즉, 인스턴스를 만드는 기준은 프로토타입!
// 그곳에 있는 함수들을 복사해주는 것이고,
// 나머지는 원본에 와서 확인을 하면 됨.

// 복사해줄태니까 복사된 사항은 [[prototype]]오브젝트에 저장.
// 이전의 _proto_를 말하는 거 같음

// 프리미티브 값
// 언어에 있어서 가장 낮은 단계의 값
// 프리미티브 타입
// Number, String, Boolean: 인스턴스 생성 가능
// Null, Undefined: 인스턴스 생성 불가
// Object는 프리미티브 값을 제공하지 않음
/* "use strict";
var book = "책";
var point = 123;
// 더 이상 값을 전개시킬 수 없음
var obj = { book: "책" };
// 이건 토글 버튼이 있어서 전개를 시킬 수 있음.
// 하지만 프리미티브 값을 제공할 수 없음.
var instance = new Number(123);
// 이것도 토글 버튼이 있어서 전개를 시킬 수 있음.
// obj와는 다르게 이것은 primitiveValue라는게 있음
debugger; */

// 인스턴스의 프리미티브 값
// new연산자를 통해 인스턴스를 생성하면,
// 파라미터 값으로 프리미티브 값을 설정
// 프리미티브 값을 갖는 오브젝트
// Boolean, Date, Number, String
/* var obj = new Number(123);
console.log(obj + 200); */
// obj에 값을 더하면
// 인스턴스의 프리미티브 값으로 obj를 인식하고
// 연산을 함

// valueOf()는 이런 Number인스턴스의
// 프리미티브 값을 반환해 줌
// 즉 키를 [[PrimitiveValue]]로 해서 value를 얻는 것이다.
/* var num = new Number("123");
console.log(num.valueOf());
debugger; */

// 강의: String타입으로 변환, 지역화 문자
// toString()은 파라미터로 2~36진수로 처리될 수 있고
// 기본적으로 10진수가 반환된다.
/* var value = 20;
console.log(20 === value.toString());
console.log(value.toString(16));
console.log(typeof value.toString(16)); */
// 16진수로 바꿔주세요!
// 뒤에 String의 toString을 보고 나니까
// 진짜 바꾸는 방식이 다르긴 하네.
// 이와 같은 개념으로 built-in-Object에서의 toString도
// 바꾸는 방식이 다른 것이다.

// 유동 소수점 사용
// 20.toString() 형태로 작성하면 에러가 난다.
// 20..toString()로 작성해야 한다.
// 20.0에서 0을 작성하지 않은 것과 같다.
/* console.log((20).toString()); */

// toLocaleString()
// 숫자를 브라우저가 지원하는 지역화 문자로 변환
// 한국, 중국, 프랑스 등에서 사용하는 문자를 지역화 문자
// 브라우저 개발사 마다 다를 수 있음.
// 지역화를 지원하지 않으면 toString()으로 변환
// ES5에서는 파라미터 사용x
// ES6에서는 파라미ㅣ터에 언어 타입 사용 가능
/* const value = 1234.56;
console.log(value.toLocaleString());
console.log(value.toLocaleString("de-DE"));
console.log(value.toLocaleString("zh-Hans-CN-u-nu-hanidec")); */

// 강의: 지수 표기, 고정 소숫점 표기
// toExponential
// 파라미터가 없으면 1.234
// 있으면 적은 수 만큼 소수점 밑으로 남김
/* var num = 1236;
console.log(num.toExponential());
console.log(num.toExponential(2)); 
console.log(value.toExponential(16)); */

// toFixed()
/* var value = 1234.567;
console.log(value.toFixed(2));
console.log(value.toFixed());
console.log(value.toFixed(10)); */
