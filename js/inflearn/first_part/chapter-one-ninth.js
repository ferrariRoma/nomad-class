// Global오브젝트

// 강의: Global오브젝트 개요,Global함수,변수
// 개요
// 모든 script를 통해 하나만 존재
// new연산자로 인스턴스 생성불가
// 모든 코드에서 공유

// 이름은 있지만 실체가 없음.
// 그래서 오브젝트를 작성할 수 없음.
// 그래서 글로벌 오브젝트에 있는 프로퍼티의 값을 설정하기 위해선
// 글로벌.프로퍼티가 아니라 바로 프로퍼티.~~로 접근
// 그래도 엄연한 오브젝트이긴 함

// 글로벌 오브젝트 함수, 변수

// 글로벌 오브젝트가 전역 객체라고도 부름

// 강의: Global프로퍼티, 프로퍼티 리스트
// 글로벌 오브젝트는 인스턴스를 만들 수 없기 때문에
// 모두 함수이다. 인스턴스를 만들 수 있으면 메소드도 있겠지?
// parseInt에서 parse는 보통 parsing한다고 이야기 하는데,
// A에서 B로의 변환을 의미한다.
// 20px에서 25를 더하려고 하면 parseInt(20px)를 하면
// px를 떼고 20을 돌려준다.

// Global프로퍼티
// NaN: Not-a-Number
// Infinity: 무한대
// undefined: undefined

// 상수 개념으로 사용
// 그래서 외부에서 프로퍼티 값 변경 불가
// delete연산자로 삭제불가!

// 대문자로도 안되어 있고
// undefined처럼 값도 다 아닌데...
// 고로 프로퍼티네!
// 그럼 Number.MAX_VALUE처럼 사용해야 할탠데
// 왜 그냥 NaN만 딸랑 씀?

// 글로벌 오브젝트는 실체가 없기 때문에
// 프로퍼티 이름만 작성한다.
// 그래서 오브젝트 이름을 작성하지 않으면
// 글로벌 프로퍼티로 인식

// 한편, 이것들도 프로퍼티인데
// key/value로 어딘가에 저장이 되어있어야 될탠데
// 그런데 글로벌 오브젝트는 실체가 없다면서?
// 처음 설계할 때 글로벌 오브젝트의 프로퍼티와 함수는
// Window오브젝트에 저장을 하였음.
// 그래서 window.NaN해도 값이 나온다.

// 강의: Global과 Window의 관계

// 글로벌과 윈도우 오브젝트의 주체
// 글로벌은 JS가 주체이다. JS스펙에 정의되어 있다.
// window오브젝트는 window가 주체

// 주체는 다르지만, 글로벌 오브젝트의 3개의 프로퍼티와 9개의 함수가
// window오브젝트에 설정됨.

// 참고로 use strict환경에서는
// window.undefined처럼 오브젝트를 사용해야 하며,
// undefined처럼 프로퍼티 이름만 사용할 수 없습니다.

/* console.log(undefined);
console.log(window.undefined);
debugger; */

// 글로벌 오브젝트의 실체가 없는데
// 윈도우 오브젝트에 설정될 수 있는 개념은
// Host오브젝트 개념의 활용임
// 브라우저 안의 오브젝트를 js가 마치 내것처럼 쓰는 개념

// 강의: 정수, 실수 변환
// parseInt()
// 소수점 밑은 잘라버림. 반올림이 아니라
/* console.log(parseInt(123.45)); */

// 값이 123px이면 123반환. 이 용도로 많이 사용됩니다.
/* console.log(parseInt("-123.45"));
console.log(parseInt("123px"));
console.log(parseInt("12AB34")); */

// 0또는 빈 문자를 제외시킨다.
/* console.log(parseInt("0012"));
console.log(parseInt("  123"));
console.log(parseInt()); */

// 진수를 적용하여 값을 반환
/* console.log(parseInt(13, 16));
console.log(parseInt("0x13")); */

// parseFloat()
// js는 기본적으로 실수로 처리하므로
// 실수로 변환하는 것이 의미가 없지만
// 문자열의 실수 변환은 의미가 있음
/* console.log(parseFloat("-123.45") + 6);
console.log(parseFloat("12.34AB56") + 6); */

// 지수와 공백을 반환한다.
/* console.log(parseFloat("1.2e3"));
console.log(parseFloat("  12.34  ") + 20);
console.log(parseFloat()); */

// 강의: NaN, 유한대 체크 함수

// isNaN()
/* console.log(isNaN("ABC"));
console.log(isNaN()); */

// String이라도 값이 숫자면 number로 인식
// null도 숫자로 보면 0임
/* console.log(isNaN(123));
console.log(isNaN("123"));
console.log(isNaN(null)); */

/* console.log(NaN === NaN); 
// 설계 실수...
console.log(Object.is(NaN, NaN));
// ES6의 Object.is()를 사용하면 되네?
// 값을 처리하고 NaN냐? 하고 물어보는 것임 */

// isFinite()
// infinite, NaN이면 false를 반환

// NaN
/* console.log(isFinite(0 / 0));
console.log(isFinite("ABC")); */

// Infinity
/* console.log(isFinite(1 / 0));
console.log(isFinite(0/1)) */

// String이라도 값이 숫자면 숫자로 인식
/* console.log(isFinite(123));
console.log(isFinite("123"));
console.log(isFinite(false)); */

// 강의: 인코딩, 디코딩
// encodeURI()
// 05년도에 AJAX가 나왔는데
// 거기선 비동기통신을 제공함.
// AJAX에서는 이런식으로 인코딩을 하지 않고,
// JSON으로 파싱해서 보내준다.
// 제이슨은 문자열 형태라서, 그래서 그냥 보내주는데,
// 보이지 않는 영역으로 서버로 저장됨.

// 동기/비동기
// 동기는 회원가입한다고 다른 곳으로 가면
// 회원가입 페이지 말고는 다른 것은 아무것도 못함.
// 다른 페이지를 클릭을 해도 작동이 안됨
// 비동기는 그게 됨. 그래서 비동기 통신 방법이 UI가 좋다.
// 요즘은 대부분 비동기를 씀

// encodeURIComponent()
// encodeURI와 비슷하지만 인코딩 제외문자가 적다

// decodeURI()

// decodeURIComponent()

// 강의: eval()함수
// 파라미터의 문자열을 js로 간주하여 실행

// 보안의 문제가 있다고 알려져서 사용 비권장
