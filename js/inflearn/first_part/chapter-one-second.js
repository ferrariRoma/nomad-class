// 강의: 연산자, 표현식
// typeof sth도 연산이다.
// var total = 1 + 2;
// 계산? 표현식을 평가한다. 평가 결과가 반환된다.
// 고로 js는 표현식의 연결이다!

// 강의: 할당 연산자, 해석/실행 순서
// 먼저 = 앞을 연산한 후 할당
/* let point = 9;
point += 3; // = 앞의 연산을 먼저 연산 후 할당
console.log(point); */

// 강의: 산술 연산자(+연산자)
// 한 쪽이라도 숫자가 아니면 '연결'
/* let number = 1 + 2 + "abc";
console.log(number); */

// 강의: 숫자로 변환
// 연산하기 전 우선 숫자로 변환해서 그렇다!
// undefined나 null도 다 숫자임~
/* var value; // 선언만 하였기 때문에 undefined
console.log(10 + value);
console.log(10 + null);
console.log(10 + true);
console.log(10 + false);
 */
/* console.log(10 + "123");
console.log("123" - 23); */
// + 말고 다른 연산자는 '연결'해주지 않기 때문에
// 숫자로 변환하여 연산

// 강의: 산술 연산자(- * / %)
// 양쪽의 평가 결과가 하나라도 숫자가 아니면
// NaN 반환
/* console.log(10 * "20");
console.log(10 * null);
console.log(10 * true);
console.log(10 * false);
console.log(10 * "A"); */

// / 연산자
// NaN 반환. 1. 양쪽 평가 결과가 하나라도 숫자가 아닐 때
// 2. 분모, 분자 모두 0일 때
// 분모가 0이면 무한대, 분자가 0이면 0반환

// 강의: 단항 연산자
/* const value = "8";
console.log(typeof value);
console.log(typeof +value);  
// number타입으로 반환!
// 하지만 가독성이 떨어지기 때문에 아래의 방법을 더 추천!
console.log(typeof Number(value)); */

// 강의: 관계 연산자
// 한 쪽이 string타입이면 false를 반환
// 양쪽이 모두 string타입이면,
// 유니코드 사전 순서로 비교. 문자 하나씩 비교
/* console.log(1 > "a");
console.log("1" < "a"); // 1과 a의 유니코드를 각각 비교
console.log("b" > "a");
console.log("bad" > "bfz"); */
// true, false가 판명나는 지점까지만 비교!

// 강의: 동등, 부등, 일치, 불일치 연산자
// == 동등 연산자
// 왼쪽과 오른쪽이 같으면 true, 다르면 false인데
// 값 '타입'은 비교하지 않는다. 1과 "1"이 같다!
/* console.log(1 == "1");
console.log(1 === "1"); */

// === 일치 연산자
// 값과 '타입'이 모~두 같으면 true이다.

// 강의: 콤마, 그룹핑, 논리 연산자
// 0은 false, 나머지는 true
// ||는 true가 나오면 더 이상 오른쪽으로 가지 않는다.
// &&는 false가 나오면 더 이상 진행하지 않는다.

// 강의: 조건 연산자, 연산자 우선순위
// exp ? exp-1 : exp-2
// 항이 3개라서 3항 연산자라고도 함.

// 연산자 우선수위
// MDN 참고~

// 강의: 문장, 화이트 스페이스, 세미콜론 자동 삽입, 블록

// 강의: if, debugger
// if, 블록을 사용하지 않을 수 있다.
/* var a = 1,
  b = 1;
if (a === b) 
console.log("1번")
console.log("2번"); */
// 그래도 시멘틱적으로 블록을 사용하는 것이 좋다.

// debugger
/* var sports = "스포츠";
debugger;
console.log(sports); */

// 강의: while
// while
// 표현식의 평가 결과가 false가 될 때까지
// 문장을 반복하여 실행한다.
// 즉, '표현식 동안 반복할게~'
/* var k = 1;
while (k < 3) {
  console.log(k);
  k++;
} */
// 즉, k가 3보다 같거나 커지는 순간 반복문을 탈출!

// do~while
// do를 먼저 실행하고 while반복문을 진행한다는 점에서
// while과 차이가 있다.
/* var k = 0;
do {
  console.log("do: ", k);
  k++;
} while (k < 3)
{
  console.log("while: ", k);
} */
// while의 조건문이 true이면 다시 do문장을 실행하러 간다.
// false이면 while문의 블록을 실행하고 끝!

// 강의: for()

// 강의: break, continue
// break
// for, for~in, while, do~while, switch에서 사용
// continue
// for, for~in, while, do~while에서 사용

// 강의: switch
/* var a = 1;
switch (a) {
  case 1:
    value = 100;
  case 2:
    value = 800;
  case 3:
    value = 200;
}
console.log(value); // 200 */
// break가 없으면 밑에 다른 케이스가 계속 진행됨
// 그래서 break와 함께 자주 사용한다.

/* var a = 2;
switch (a) {
  case 1:
  case 2:
    value = 800;
    break;
  case 3:
    value = 200;
    break;
}
console.log(value); // 200 */
// 이렇게 사용하면 OR의 효과를 낼 수 있다.
// 1 또는 2 일때 800을 작동한다.

// 강의: try-catch, throw
// try 블록 catch(식별자) 블록
// try 블록 finally 블록
// try 블록 catch(식별자) 블록 finally 블록

/* var value;
try {
  value = ball;
  // 1. 에러발생. try문에 적었기 때문에 에러가 발생하더라도
  // 프로그램이 죽지 않고 catch문이 진행
} catch (error) {
  // 2. catch문 실행(err), (e)
  console.log("catch 실행");
} */
// 통신을 해서 서버에서 데이터를 가져올때는
// 데이터를 잘못 보내는 일은 거의 없다고 봐야 하지만,
// 통신에서 자주 에러가 나기 때문에 무조건 try~catch문을
// 안에 작성을 해야 한다.

// finally블록은 예외 발생과 관계없이 실행
/* var value;
try {
  value = ball;
} catch (error) {
  console.log("catch 실행");
} finally {
  console.log("finally 실행");
  // 에러가 나든 말든 무조건 실행
} */

// throw
// throw는 예외를 발생시킬때 사용한다.
// 발생하면 catch를 사용
/* try {
  throw "예외 발생시킴";
  // 에러 의도적으로 발생.
  // "메시지"를 catch의 error로 전달.
  var sports = "스포츠"; // throw 밑으로 실행하지 않음
} catch (error) {
  console.log(error);
  console.log(sports);
}
 */

// throw에 프로퍼티 형식으로 작성가능
/* try {
  throw {
    msg: "예외 발생시킴",
    bigo: "임의의 이름 사용",
  };
} catch (e) {
  console.log(e.msg);
  console.log(e.bigo);
} */

// Error 오브젝트 사용
/* try {
  throw new Error("예외 발생시킴");
} catch (error) {
  console.log(error.message);
} */
// throw 표현식에 Error 오브젝트 작성
// ("message")
// 문자열이나 파라미터를 던지냐,
// new 오브젝트를 만들어서 던지냐의 차이다.

// 강의: strict
// "use strick"
// 작성한 위치부터 적용
/* book = "책";
console.log(book); */

/* "use strict";
book = "책";
console.log(book);
 */

/* "use strict";
try {
  book = "변수 선언하지 않음";
  console.log(book);
} catch (e) {
  console.log(error.message);
} */
// 퍼포먼스도 빨라지도 엔진도 간결해진다.
// 고로 필수적으로 사용하는 것이 좋다.

// 과제: label
/* "use strict";
var i, j;
loop1: for (i = 0; i < 3; i++) {
  loop2: for (j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log("i = " + i + ", j= " + j);
  }
} */
// 라벨을 붙인 함수 선언문은 strict모드에서
// 신텍스 에러를 발생시킨다. 그래서 label을 사용하지 않는듯

// 과제: with
// 네이버에 찾아보니,
// with는 명령문의 스코프 체인을 확장해주는 구문
// 특정 객체를 여러 번 사용하는 경우
// 객체명을 생략할 수 있도록 도와준다.
/* // "use strict";
let a, b, c;
let d = 5;
with (Math) {
  a = d * random();
  b = d * PI;
  c = sqrt(d);
}
console.log(a);
console.log(b);
console.log(c); */
// 위의 예제를 보면 Math를 여러번 사용하고 있기 때문에
// with(여기에) Math를 추가하고 나니,
// with 블록에 random, PI, sqrt 등을 사용할 때
// Math를 안붙여도 된다.

// 근데 왜 strict 모드에서는 금지가 된걸까?
// 이것에 대해서는 잘 모르겠네
