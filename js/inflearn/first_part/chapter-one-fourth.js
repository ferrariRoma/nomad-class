// 강의: 프로퍼티 개요, 프로퍼티 추가/변경
// value에 js에서 지원하는 타입
// Number, String, Boolean, Object
// function까지~
/* const book = {
  title: "책", // 스트링
  point: {
    // Object를 사용해서 프로퍼티를 확장
    ten: 10, // 숫자
    bonus: true, // boolean
    promotion: function () {}, // 함수까지
  },
}; */
// Object는 객체라고도 부름

// 오브젝트에 프로퍼티 추가, 변경
/* var obj = {};

obj.abc = 123;
obj["def"] = "456";
var varName = "title";
obj[varName] = "HTML책";
console.log(obj);

delete obj.abc;
console.log(obj); */

// 강의: 프로퍼티 값 추출, for~in 문
// for~in
// 오브젝트에서 프로퍼티를 열거
/* const sports = {
  soccer: "축구",
  baseball: "야구",
};
for (const item in sports) {
  console.log(item);
  console.log(sports[item]);
} */

// 강의: Built-in
// 값 타입, 연산자, 오브젝트(Object)를 사전에 만들어 놓은 것
// 이전에는 값 타입과 연산자를 보았고,
// 이번에는 오브젝트 형태를 보도록하자

// built-in number object로
// 빌트인 오브젝트 형태를 확인해보자
// 대문자 오브젝트는 name(key): value 형태로 데이터를 저장,
// object는 이미 key: value형태로 만들어져 있음.
// 대문자가 key: value로 데이터를 저장하는 것이 중점이면,
// 소문자는 데이터를 처리하는 것이 중점. 그래서 함수가 있음.
/* const temp = Number;
debugger; */
// 여기서 확인을 해보면 함수이든 프로퍼티 값이든,
// 공통적인 부분은 key:value의 형태라는 것이다.
// 다만 함수는 value자리에 함수가 위치해 있는 것이다.
// js의 기본적인 구조이다.

// 그럼 왜 빌트인 Number, String이 필요한걸까?
// 빌트인 Number는 Number처리를 위한 프로퍼티 집합이다.
// 역시, 빌트인 String은 String처리를 위한 프로퍼티 집합이다.

// 강의: 빌트인 오브젝트 유형(11개)
// Number오브젝트:
// 숫자, 상수, 지수를 처리하기 위한 오브젝트

// String오브젝트:
// "abc"와 같은 문자열을 분리하고 연결하기 위한 오브젝트

// Boolean오브젝트:
// true, false를 처리하기 위한 오브젝트

// Object오브젝트:
// {key: value}형태로 프로퍼티를 처리하기 위한 오브젝트

// Array오브젝트:
// [1,2,3,"가나다"]형태의 배열을 처리하기 위한 오브젝트

// Function오브젝트:
// 함수를 지원하기 위한 오브젝트

// Math오브젝트:
// 절대값, 반올림 등의 수학 계산용 함수를 지원하는 오브젝트

// Date오브젝트:
// 현재 시간, 과거 시간, 미래 시간에 대한 값을 구하고 설정하는 오브젝트

// JSON오브젝트:
// 서버와 통신하는 데이터 형태를 지원하는 오브젝트
// [{"name":"value"}]

// RegExp오브젝트:
// 정규 표현식을 지원하는 오브젝트. ^나 $와 같은 기호를 사용

// 글로벌오브젝트:
// 앞에서 보았던 것은 데이터를 처리하기 위한 함수를 지원하는 오브젝트임
// 이것은 소스 파일 전체에서 하나만 존재.
// 모든 코드에서 공유 및 접근 가능.
// 전역 객체라고도 하지만 뉘앙스에 차이가 있다.
