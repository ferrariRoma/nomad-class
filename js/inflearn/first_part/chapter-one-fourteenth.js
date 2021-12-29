// JSON오브젝트

// 강의: JSON오브젝트 개요, JS타입을 JSON타입으로 변환

// JavaScript Object Notation
// 빌트인 오브젝트임
// new연산자로 인스턴스 생성 불가

// 주요 기능
// 데이터 송수신의 변환 기준
// 서버로 데이터로 보낼 때,
// 서버에서 클라이언트로 보낼 때 어떻게 변환해야 하는지

// 텍스트이므로 전송 속도가 빠름
// json전에는 xml을 사용했는데
// 이건 오브젝트였다. 그래서 더 무거웠음.

// 파일 확장자: json,txt도 사용 가능

// JS데이터 타입 지원
// 다른 언어도 사용하지만,
// 완전하게 같지 않을 수도 있음.
// 그래서 서버와 데이터를 주고 받을때는
// 언어가 다를 수 있다는 점을
// 항상 고려해야 한다.

// stringfy()
// 함수이고, js타입을 json타입의 문자열로 변환
// 즉, 우리가 데이터를 보내는 것임

// JSON.stringfy()형태로 호출
// 파라미터가 3개인데,
// 1.변환 대상
// 2.함수 또는 배열opt
// 3.가독성을 위한 구분자opt

// 1. 첫번째 파라미터
/* const value = {
  book: "책",
  title: 123123,
};
const result = JSON.stringify(value);
console.log(result); */

// json은 기본적으로 큰 따옴표 안에 작성을 한다.
// 숫자는 변환하지 않음.
// key도 원래는 스트링타입이라 ""에 작성을 해야 하지만
// 안하는 것이라서 json이 읽을때는 ""을 자동으로 붙여준다.

// 배열 안에 작성하는 경우
/* const value = ["book", "책", 123];
const result = JSON.stringify(value);
console.log(result); */

// 특수한 값 변환
// 서버 언어와 반드시 체크를 해야 하는 부분이다.
/* console.log(JSON.stringify([Infinity, NaN, null]));
console.log(JSON.stringify([true, false])); */

// Infinity, NaN, null은 null로 변환
// true, false는 변환하지 않는다.

// undefined 변환
/* console.log(JSON.stringify(undefined));
console.log(JSON.stringify([undefined]));
console.log(JSON.stringify({ value: undefined })); */

// undefined는 작성한 곳에 따라 다르게 변환된다.
// 값이 하나이면 그대로 변환
// 배열 안에 있으면 null로
// 프로퍼티 값이면 프로퍼티를 제외시킨다.
// 프로퍼티 이름도 없어짐으로 주의해야 함!!

// 2. 두번째 파라미터
// 두 번째 파라미터에 함수 작성
/* const data = { book: "책", point: 55 };
function replace(key, value) {
  return key === "point" ? 11 : value;
}
const result = JSON.stringify(data, replace);
// 이렇게 하면 프로퍼티 단위로 읽으면서 함수를 호출함
// 값만 반환되는 것은 아니고 프로퍼티가 반환된다.
console.log(result); */

// 두 번째 파라미터에 배열 작성
/* const data = { book: "책", point: 11, amount: 90 };
const result = JSON.stringify(data, ["book", "amount"]);
// 배열에 프로퍼티 이름을 작성하면
// 이름이 같은 것만 result에 설정해준다.
console.log(result); */

// 3. 세번째 파라미터

// 세 번째 파라미터에 줄 분리 작성
/* const data = { sports: "soccer", time: 90 };
const result = JSON.stringify(data, "", "\n");
// 사람이 데이터를 보기 쉽게 하기 위한 것으로,
// 줄을 분리하여 표시합니다.
// 가독성을 위한 것이다.
console.log(result); */

// 들여쓰기 숫자 작성
/* const data = { sports: "soccer", time: 90 };
const result = JSON.stringify(data, "", 4);
// 숫자는 들여쓰기 자릿수.
// 줄바꿈도 해준다.
console.log(result); */

// 문자 앞에 삽입할 문자 작성
/* const data = { sports: "soccer", time: 90 };
const result = JSON.stringify(data, "", "##");
// 문자열을 작성하면 데이터 앞에 ##을 표시합니다.
console.log(result); */

// 강의: JSON타입 파싱

// parse()
// JSON타입을 JS타입으로 변환
// stringify가 사용자에서 서버로라면,
// 이건 서버에 있는 데이터를 사용자에게 주는 것이다.

// 파라미터는 2개
// 1. 변환 대상
// 2. 파싱 데이터로 실행할 함수opt

// 값이 숫자일 때
/* const value = "123";
try {
  var result = JSON.parse(value);
} catch (e) {
  console.log("JSON 파싱 에러");
  // 파싱 대상이 서버에서 받은 데이터일 때
  // try-catch 사용은 필수이다.
}
console.log(result);
console.log(typeof result); */

// 서버와 데이터를 주고 받을 때는
// 어떤 일이 발생할지 모른다.
// 그래서 try-catch문이 필수적이다.

// 값이 true, false
/* const value = "true";
const result = JSON.parse(value);
// true도 숫자철머 true로 변환
// 설명 편의를 위해 try-catch를 사용하지 않았으나
// try-catch 사용은 필수입니다.
console.log(result);
console.log(typeof result); */

// 배열에 작성
/* const value = '["ABC", "가나", "12"]';
const result = JSON.parse(value);
// 배열에 작성된 String타입의 숫자는
// 숫자로 변환하지 않습니다.
console.log(result); */

// Object에 작성
/* const value = '{ "point": "123" }';
const result = JSON.parse(value);
// js는 프로퍼티 이름에 큰따옴표를 사용하지 않으므로
// 큰 따옴표가 표시되지 않음
console.log(result); */

// 오브젝트나 배열에 작성한 string타입의 숫자들은
// string 그대로 가지고 온다.

// 작성 주의
// "123."을 "123.0"으로 작성
// "0123"처럼 첫 자리에 0사용 불가
// 대문자 "NULL"사용불가, "null"사용
// 10진수 사용

// parse()
// 두번째 파라미터 작성
/* const data = '{ "book": "책", "movie": "영화" }';
const check = function (key, value) {
  return key === "book" ? "JS책" : value;
};
const result = JSON.parse(data, check);
// Stringify에서 배웠던 것과 같음.
// data에서 프로퍼티 한 쌍 key:value를
// check함수로 두 개를 전달해줌.

// 함수에서 값을 반환하면
// 파싱 결과를 result변수에 반영
// 값을 반환하지 않거나 undefined를 반환하면
// 프로퍼티가 제외되므로 반환해야 한다.

// 그래서 위처럼 "JS책":value처럼
// 조건과 다를 때 반환할 값을 설정해주어야 한다.
// 두 번째 파라미터에 함수를 사용할 땐
// 프로퍼티가 제외되지 않도록 항상 이 부분을
// 고려해주어야 한다.
console.log(result); */

// Data오브젝트

// 강의: Date오브젝트 개요, 시간값 표시 기준,
// -시간의 문자열 형태

// 개요
// 1970.1.1 기준으로 밀리초를 제공. 남는 초는 무시
// 이 날을 기준으로 전후 1억 일(day)를 지원해준다.
// UTC와 GMT 기준

// 시간값 표시 기준
// 월은 0부터 시작.
// 0:1월, 1:2월, 11:12월

// 일은 1~31일까지 정수로 표시

// 요일은 0부터 시작
// 0:일요일, 1:월요일, 6:토요일

/* const obj = new Date(1970, 1, 1, 1, 1, 1, 1);
// 인스턴스를 생성. 시간 값을 적지 않으면 현재 값으로 설정
// 위 값은 프리미티브 값에 저장됨.
// 저장이 밀리초로 됨.
console.log(obj.toLocaleString()); */

// 시간의 문자열 형태
/* YYYY-MM-DDTHH:mm:ss.sssZ */

// 강의: 프로퍼티 리스트, Date인스턴스 생성,
// -Date오브젝트 함수 분류

// new Date()
// 인스턴스 생성
// 파라미터 값을 인스턴스의 프리미티브 값으로 설정
// 파라미터로는 년, 월만 '필수'고
// 일,시,분,초,밀리초는 모두 옵션임
/* const obj = new Date(2019, 02);
// 작성하지 않으면 0으로 간주
console.log(obj); */

// 파라미터를 작성하지 않으면
// UTC기준 현재 시간
/* console.log(new Date()); */

// 파라미터를 문자열로 작성하면,
// 밀리초로 변환
/* console.log(new Date("2019-02")); */

// 2019,02로 하면 02가 3월로 변환되는데
// "2019-02"는 2월로 변환됩니다.

// 시간 자동 넘김
// 범위를 넘치면 상위 시간값에 반영된다.
// 단, 문자열로 작성하면 에러가 난다.
/* console.log(new Date(2019, 11, 34)); */

// Date.now()
// 현재 시간을 밀리초로 반환
// 아래 둘은 같은 시간값이지만
// 값 표시가 다르다.
/* console.log(Date.now());
console.log(new Date()); */

// Date.parse()
// 문자열 값을 밀리초로 변환
/* console.log(Date.parse("2019-01-23T09:11:23.123")); */

// Date오브젝트 함수 분류

// 시간을 반환하는 함수
// getMonth(), getDate() 등
// 시간을 설정하는 함수
// setMonth(),setDate() 등
// 함수 이름으로 기능을 알 수 있으므로 설명 생략

// Math오브젝트

// 강의: Math오브젝트 개요, Math상수,
// -Math함수

// 개요
// 수학 계산용 오브젝트
// new연산자로 인스턴스 생성 불가
// 배운 것 중에서는
// Math, JSON, 글로벌 오브젝트가 인스턴스를 생성할 수 없음.
// 인스턴스를 생성할 수 없다는 것은 프로토타입이 없다는 것이다.

// 하지만 글로벌 오브젝트는 프로토타입의 사용여부를
// 브라우저 개발사에 일임하였기 때문이다.
// 메소드를 설정하기 위함이 아니다.
// 그래서 모두 함수임.

// Math상수

// Math함수

// abs()
// 절댓값

// floor()
// 소수 이하 버림
// 정숫값 반환

// ceil()
// 소수 이하 올림
// 정숫값 반환

// round()
// 소수 이하 반올림
// 정숫값 반환
// 양수 -> 반올림
// 음수 -> 반내림

// max()
// 파라미터 값 중 가장 큰 값을 반환
// NaN가 하나라도 있으면 NaN을 반환

// min()
// max와 같음

// pow()
// 파라미터 x값의 y승 값을 반환
// y가 0일 때 x가 NaN라도 1을 반환
// y가 NaN이면 NaN반환
// 이처럼 경우의 수가 많으므로
// 사용하기 전에 테스트 필요

// random()
// 0~1미만 사이 난수 반환
