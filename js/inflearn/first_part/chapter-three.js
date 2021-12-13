// "use strict";

// 강의: 글로벌 변수 문제
// 자주 있지는 않지만 가능성의 부분은 따질 수 있음
// 로컬과 글로벌 변수를 구분한 목적을 생각해야
/* value = 100;
function point() {
  value = 300; // 외부에 선언된 global변수를 변경
  console.log("함수:", value);
}
point(); */
// 가장 위에 있는 use strict를 사용하면
// 에러가 난다. var를 사용하지 않은
// 글로벌 변수 사용 불가
// 전체가 그런 것은 아니나,
// ES6+에서는 use strict가 디폴트 환경

// 강의: function 블록
// scope가 다르기 때문에
// function 안과 밖에
// 서로 다른 let변수가 있어도
// 각각의 scope 안에서 사용할 수 있음.
/* let sports = "축구";
function show() {
  //   let sports = "농구";
  console.log("안: ", sports);
}
show();
console.log("밖: ", sports); */
// 함수 안에서 밖의 변수를 사용할 수 있다.
// 함수 안에서 찾고 안되면 밖에서 찾는다.
// 이것을 클로저라고 한다.
// 내부함수가 외부변수에 대해 접근하는 것

// try-catch문도 블록 스코프 적용
// 다 비슷하지만 catch가 예외적이다.
// try블록 밖에 있는 변수를 가지고 와서
// 사용을 하는 편이다.
/* let sports = "축구";
try {
  let sports = "농구";
  console.log("안: ", sports);
  abc = error;  // 에러유발
} catch (e) {
  console.log("catch: ", sports);
  // catch부분은 외부변수를 참조한다.
}
console.log("밖: ", sports); */

// switch-case문도 블록 스코프이다.
// 이건 switch가 하나의 거대한 블록인 것이다.
// 같은 switch안에 같은 이름의 변수가 있으면
// 에러가 발생!
/* let item = 1;
switch (item) {
  case 1:
    let sports;
    break;
  case 2:
  // let sports;  // already been declared
  default:
    console.log(sports);
} */

// 강의: let 변수 개요
// let은 블록 스코프를 가진 변수이다.
/* let sports = "축구"; // 함수 밖
if (sports) {
  let sports = "농구"; // 함수 안
  console.log("안: ", sports);
}
console.log("밖: ", sports); */
// 블록은 안과 밖의 스코프가 구분되어 있음.
// 다르다는 것임.
// 변수 이름이 같아도 값이 대체되지 않음.
// var은 각각 존재할 수 없고,
// 최종적으로 대체되는데 let은 스코프가
// 다르기 때문에 대체되지 않는다.

// syntax
/* let name1 = "value1",
  name2 = "value2";
console.log(name1, name2); */
// 값을 할당하지 않으면 undefined가 초깃값으로
// 할당됨. var도 같지만 다른 점은 var의 초깃값
// undefined는 값으로 사용이 가능하지만,
// let의 초깃값 undefined는 사용이 불가능함.

// let변수와 var변수 차이
// for() 문에서 반복할 때마다
// var 변수는 스코프를 갖지 않음.
// let 변수는 스코프를 가짐.
// 예시
/* var node = document.querySelector(".sports");
for (let k = 0; k < node.children.length; k++) {
  node.children[k].onclick = function (event) {
    event.target.style.backgroundColor = "yellow";
    console.log(k);
  };
} */
// k가 var로 선언이 되었으면 전체를 하나의 블록으로 보기 때문에
// 마지막 값인 3만 계속 출력이 되는데,
// let는 반복문 마다 스코프를 가지기 때문에 하나씩 증가하는
// 값을 출력할 수 있다.
// 뭐가 옳은지는 상황에 따라 다르니 그때 상황에 맞게 맞추어
// 잘 사용하면 된다.

// 강의: let변수와 this
// 글로벌 오브젝트에서 let변수를 this로 참조 불가하다!
// 글로벌 오브젝트에서 var과 let변수가 설정되는 위치구조
/* var music = "음악";
let sports = "축구";
console.log(this.music, this.sports); */
// var로 변수를 선언하면 window오브젝트에 설정됨.

// 강의: 다수의 js파일 사용
// 모든 js파일에서 글로벌 오브젝트에 작성한
// var변수 뿐만 아니라 let변수를 공유합니다.
// 블록 안에 작성하면 공유하지 않는다.
// 글로벌 오브젝트에 작성한 let변수는
// script라는 블록에 작성하라고 되어있다.
// 글로벌 오브젝트에서 var키워드를 사용해서 선언한 변수는
// window오브젝트에 설정되기 때문에 모든 js파일에서
// 공유한다.
// 글로벌 오브젝트에서 let변수를 사용하면 script에
// 설정되며 모든 js파일에서 변수를 공유합니다.
// 블록 안에 적으면 공유되지 않는다.
// ES5에서는 윈도우 오브젝트에 변수들이 들어가니까
// 이런 스코프에 대한 상세한 부분들이 없었는데,
// ES6부터는 Block, Local, Script, Global로
// scope가 상세히 나누어진다.
/* var globalVar = "var 변수";
let globalLet = "let 변수"; // script
{
  let globalBlock = "block 변수";
}
function showLocal() {
  var localVar = "var 변수";
  let localLet = "let 변수";
  {
    let blockLet = "block 변수";
  }
} */

// 강의: 호이스팅
// ES5의 실행 콘텍스트 처리 순서
// 1. 함수 선언문 설정
// 2. 변수 이름을 바인딩. 함수 이름도 변수값임.
// 함수이름의 변수값은 undefined로!
// 3. 소스 코드 실행
/* console.log("music 변수: ", music);
var music = "음악"; */
// 만약 music이라는 변수를 식별하지 못하면 에러가 나는데
// var은 밑에 작성하더라도 변수 이름을 사용해서 값을 구할 수 있는데
// undefined가 구해진다.
// let변수는 호이스팅 되지 않는다. 그래서 let변수 앞에서 변수 사용불가
/* try {
  console.log(sports);
} catch (e) {
  console.log("호이스팅 불가");
}
let sports = "축구";
// var sports = "축구"; */
// let변수는 변수 선언을 실행한 후에 변수를 인식할 수 있습니다.
// 즉, 식별자를 해결할 수 있습니다.
/* {
  console.log(variable);
  // console.log(blockLet);  // error
  var variable = "var 변수";
  let blockLet = "let 변수";
  console.log(variable);
  console.log(blockLet);
} */
// 블록 안에는 한 번 엔진이 스캔을 해서
// let변수도 script에 추가된 모습을 찾아볼 수 있다.
// 그래도 값을 초기화하기 전까지는 error가 뜬다.

// 강의: Arrow Function
/* const point = (param) => ({ book: param });
const result = point("책");
for (const key in result) {
  console.log(key + ":" + result[key]);
  console.log(`${key} : ${result[key]}`);
} */

// 강의: 화살표 함수 구조, arguments 사용 불가
// 일반함수에는 있는 prototype과 constructor가 없음.
// prototype에 메소드를 연결하여 확장할 수 없음.
// prototype이 없기 때문에 그만큼 가벼움.
// _proto_에 보면 built-in Object의 prototype에 연결되어있는
// 메소드들이 사용되지도 않는데 주렁주렁 달려있는 것을 볼 수 있다.
// constructor가 없기 때문에 new연산자로 인스턴트를 생성할 수 없다.
// const temp = new New(); 처럼 생성자 함수 New를 참고하는
// 인스턴트 temp를 생성할 수 없다.

// arguments를 사용할 수 없음. 대신에 rest파라미터를 사용한다.
// arguments는 파라미터가 유동적일때 사용한다.
