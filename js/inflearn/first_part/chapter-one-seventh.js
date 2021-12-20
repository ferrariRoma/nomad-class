// Built-in Object 오브젝트
// 강의: 자바스크립트 오브젝트 구분, 네이티브/호스트 오브젝트,
// 오브젝트와 인스턴스

// 빌트인 오브젝트,
// 네이티브 오브젝트
// 함수를 호출하면 함수 안에서 만들고
// 함수를 빠져나오면 엔진이 알아서 지움

// 빌트인 오브젝트도 네이티브 오브젝트에 속해 있어서
// 크게 보면 js는 네이티브 오브젝트와
// 호스트 오브젝트로 나뉘어져있다.
// ES5 기준이다.

// 호스트 오브젝트는 빌트인, 네이티브 오브젝트를 제외한
// 오브젝트이다. window, DOM오브젝트
// 즉, 네이티브 오브젝트가 아닌 것은 다 호스트 오브젝트이다.
/* const node = document.querySelector("div");
console.log(node.nodeName); */
// querySelector은 js 스펙에서 제공하는 것이 아니라,
// DOM스펙에 작성된 함수이다. 그런데도 마치 js함수처럼 사용
// 어떠한 처리도 없이 사용을 할 수 있다.
// document는 오브젝트가 되고 querySelector는 함수가 되겠음
// js는 호스트 오브젝트를 마치 js처럼 사용할 수 있음.
// 호스트 오브젝트에서는 js에서 사용할 수 있는 형태로 만들어서 제공함.
// 이런 환경을 호스트 환경이라고 하는데. js는 이런 환경에서
// 브라우저의 모든 요소 기술(호스트 오브젝트)을 연결하고
// 융합하며 이를 제어한다.

// 오브젝트와 인스턴스
// 오브젝트는 new연산자를 사용하지 않고,
// 빌트인 오브젝트로 만든 오브젝트를 지칭
// const abc = new Object();
// const def = {}
// 위 두 개 모두 인스턴스를 만들지만
// 위는 new를 사용했으니 abc인스턴스
// 밑에는 def오브젝트라고 한다.

// 오브젝트를 번역하면 객체인데,,
// 객체는 구체적인 측면과 개념적인 측면으로 나눌 수 있는데
// 오브젝트는 프로퍼티로 이루어져 있고, 그래서 구체적으로 보이는데
// 객체는 개념적인 요소라서 실체가 없다.

// 강의: 프로퍼티 리스트(ES3)
// 빌트인 Object object
// 이건 ES3, ES5로 강의가 나뉘어져 있음

// hasOwnProperty()라는 것에는
// 내가 만든 프로퍼티를 뜻함. 내가 만든 건 수정삭제가 가능
// 내가 만든게 아니면 수정 삭제x

// ES3에서는 아래 6개 프로퍼티가
// 인스턴스를 만들 수 있는 오브젝트에 모두 포함된다.
// 이게 ES3의 특징임. 그래서 ES5랑 구분함.
// valueOf(), hasOwnProperty(), isPrototypeOf(),propertyIsEnumerable(),
// toString(), toLocaleString()

// 강의: Object 인스턴스 생성, 프리미티브 값 구하기
// new Object()
// Object는 파라미터 데이터 타입에 따라 생성할
// 인스턴스가 결정된다.
/* const newNum = new Number(123); // 소문자object. 즉 인스턴스
console.log(typeof newNum);
console.log(newNum + 100);
const newObj = new Object(123); // 마찬가지로 소문자object. 즉 인스턴스
console.log(typeof newObj);
console.log(newObj + 100); */

// 즉 new Object라고 했지만 Number로 사용되고 있다.
// 파라미터 값에 결정된다.

// 파라미터 값이 undefined나 null이면 빈 Object를 반환
/* const newObj = new Object();
console.log(newObj); */
// 원래 인스턴스를 출력하면 프리미티브 값이 출력되는데
// 이게 {}가 나오는 걸 보면 프리미티브 값의 디폴트는
// {}인 것을 알 수 있음

// Object()
// 이또한 오브젝트 인스턴스를 생성하는데 new를 안쓴거고,
// 파라미터에 {name:value}형식으로 적으면 된다.
/* const obj = Object({ name: "JS책" });
console.log(obj); // 인스턴스의 프리미티브 값
// 즉 파라미터 값에 작성한 값이 인스턴스의 프리미티브 값
const noNewobj = Object();
console.log(noNewobj); // 인스턴스의 프리미티브 값 */

// 오브젝트 함수를 호출하나 new연산자로 오브젝트 생성자 함수를 호출하나
// 같다

// Object 생성 방법
// var abc = {};
// var avc = Object()와 같다.
// var abc = {}을 실행하면 Object 인스턴스가 생성됨
// {} 이거를 오브젝트 리터럴이라고 부른다.
/* const obj = Object({ name: "value" });
console.log(obj);
console.log(obj instanceof Object);
const noObj = { name: "value" };
console.log(noObj);
console.log(noObj instanceof Object); */

// 위 아래의 결과 값이 같다.
// 그래서 간단하게 {}를 자주 쓴다.

// valueOf()

// 강의: 빌트인 오브젝트 구조
// 빌트인 오브젝트를 정리하는 느낌~
// 키워드는 '구조'

// prototype이 있고 없고는 인스턴스 생성 가능 여부 기준
// prototype은 또한 프로퍼티를 연결할 수 있다.
// 프로토타입도 오브젝트라서 메소드나 프로퍼티로 연결할 수 있음.
// 오브젝트.prototype.method 처럼.
// .constructor
// 생성자 함수는 내부에서 .constructor을 호출
// 따라서 constructor가 실질적으로 인스턴스를 생성함
// 이 constructor도 프로토타입에 있어서 프로토타입이 없으면 constructor가 없다!
// 그래서 프로토타입이 없으면 생성자 함수를 못 만듦.
// 프로토타입이 있으면 constructor는 default로 따라 붙음.
// 그래서 프로토타입의 유무로 인스턴스의 생성 유무를 확인할 수 있다는 것임
// .method
// 오브젝트.prototype.method를 작성 가능~
// 잠깐! 메소드라? 메소드 대신 함수라고 했는데 메소드라니~?
// 이건 다음 절에서 다루겠음~

// 오브젝트 구조
/* const obj = Object;
const proto = Object.prototype;
debugger; */

// proto에서 constructor을 보면
// Object()함수가 할당되어 있는 것을 알 수 있다.
// 이것이 생성자 함수임. 이게 인스턴스를 만드는 것이고.
// 그래서 생성자 함수를 호출하면 constructor를 내부에서 호출함.
// 이걸 보면 Object의 모든 것이 들어가 있다.
// Built-in Object가 할당되어 있는 것을 확인할 수 있다.
// 즉, 같음.
// 아! 그래서 오브젝트.prototype.constructor = 오브젝트 이구나!

// 하지만 ES5에서는 이 constructor을 수정할 수가 없음
// 6에서는 변경할 수 있음. 사용성이 높아짐

// 어렵게 생각하지 말자. 중요한 부분이지만 그냥 이게 다임. 별 거 없다.

// 강의: 함수와 메소드 연결, 함수, 메소드 호출
// 함수는 오브젝트에 연결.
// Object.create()
// 데이터가 파라미터 위치에 들어감!

// 메소드는 오브젝트의 prototype에 연결
// Object.prototype.toString()
// 데이터가 앞에 옴.

// ES5는 이런 기준으로 두 개를 사용하는데,
// 6에서는 스테틱 메소드라는게 또 나옴.
// 그래서 총 3개로 구분됨.

// 그럼 왜 구분할까?

/* console.log(Object.create);
console.log(Object.prototype.create); */
// 존재여부 체크

// 함수 호출 방법은
// Object.create();
// 메소드 호출 방법은
// Object.prototype.toString()
// 또는 인스턴스를 생성하여 호출
/* console.log(Object.prototype.toString);
const obj = {};
console.log(obj.toString); */

// {}이게 레터럴 오브젝트이지만 인스턴스와 다름이 없어서
// 인스턴스의 toString을 호출하는 것과 같음
// 즉, 함수와 메소드 방법 모두로 호출 가능함.

// 그럼 왜 꼭 구분해야 할까?
// 물론, 지금까지 배운것 처럼 작성 방법이 달라서.
// 함수는 파라미터에 값을 작성하고,
// 메소드는 메소드 앞에 값을 작성
/* console.log(String.fromCharCode(49, 65)); */

// 파라미터가 하나가 아니기 때문에
// [49,65].fromChar~~~로 호출하면
// 앞에께 배열이기 때문에 배열에는 fromCharCode가
// 없어서 에러가 난다.
// 그래서 함수의 형태로 호출했고, 앞에 String.을 붙여줌

// prototype에 연결된 것은 메소드, 바로 연결된 것은 함수
// 함수는 파라미터에 데이터를 작성, 메소드는 메소드 이름 앞에 데이터 작성

// 강의: 프로퍼티 처리 메소드
// 인스턴스에 파라미터 이름이 존재하면 true를 반환
/* const obj = { value: 123, second: undefined };
const ownFirst = obj.hasOwnProperty("value");
const ownSecond = obj.hasOwnProperty("second");
console.log(ownFirst);
console.log(ownSecond); */

// undefined는 false로 인식되지만,
// 이건 프로퍼티 이름의 존재 여부만

// 존재하지 않거나
// 혹은 자신이 만든 것이 아니라 상속 받은 프로퍼티면
// false
/* const obj = {};
const own = obj.hasOwnProperty("hasOwnProperty");
console.log(own); */

// propertyIsEnumerable()
// 오브젝트에서 열거할 수 있으면 true, false
/* const obj = { sports: "축구", gadget: "hidden" };
// obj의 형태는 for~in 문으로 열거가 가능하다.
console.log(obj.propertyIsEnumerable("sports")); */

// 열거할 수 없는 경우
/* const obj = { sports: "축구" };
Object.defineProperty(obj, "sports", { enumerable: false });
console.log(obj.propertyIsEnumerable("sports"));
for (var name in obj) {
  console.log(name);
} */

// defineProperty는 ES5에서 나오지만
// 반대 예시를 보여주기 위해서 사용했음
// ES5에서는 프로퍼티를 열거, 삭제, 변경하는 함수들이 추가됨

// 강의: Object와 prototype, 빌트인 Object특징
// 빌트인 Object와 prototype
// 빌트인 Object 특징
// 인스턴스를 만들 수 있는 모든 빌트인 오브젝트의
// __proto__에 Object.prototype의 6개 메소드가 설정됨
/* const numberInstance = new Number(123);
debugger; */

// [[prototype]]의 [[prototype]]에 가면 Object가 나옴
// 위에서 말한 빌트인 Object의 6가지 메소드가
// [[prototype]]의 [[prototype]]에 설정됨
// 이것은 규칙임. 모든 인스턴스에 해당됨.
// Number인스턴스를 만들면,
// Number을 첫번째 [[prototype]]에 설정하고
// Object를 두번째 [[prototype]]에 설정하고,
// 그곳에 빌트인Object의 프로토타입의 6가지 메소드를 설정

// isPrototypeOf()
/* const numObj = new Number(123);
console.log(Object.prototype.isPrototypeOf(numObj)); */
// Object.prototype이 numObj에 존재하느냐?

// toString()
/* const point = { book: "책" };
console.log(point.toString());

const obj = new Number(123);
console.log(Object.prototype.toString.call(obj)); */
/* const point = { book: "책" };
console.log(point.toString());
const obj = new Number(123);
// console.log(Object.prototype.toString.call(obj));
console.log(Object.prototype.toString.call(obj)); */

// object(인스턴스) Object(빌트인 Object)(타입)
// call도 메소드인데,
// 프로토타입에 있는 메소드를 인스턴스를 거치지 않고 사용하기 위해서는
// call을 사용한다.

// toLocaleString()
// 지역화 문자 변환 메소드를 대체해서 호출함.
// Array, Number, Date 오브젝트의
// toLocaleString() 메소드가 먼저 호출된다.
// 그게 아닐땐 빌트인 Object의 toLocaleString이 호출됨
/* console.log((1234.56).toLocaleString());
console.log("4567.89".toLocaleString()); */

// String은 toLocale이 없어서 대체해서 호출했고,
// 그대로 출력됨.
