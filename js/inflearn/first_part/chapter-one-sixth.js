// 강의: String오브젝트

// 강의: 문자열로 변환, 프리미티브 값 구하기
/* var obj = new String(123);
console.log(typeof obj);
console.log(obj.valueOf());
debugger; */
// Number와 똑같다. 이렇게 하면 프리미티브 값이
// obj에 할당된다.

// 강의: length 프로퍼티, 값 반환 논리
/* var value = "ABC";
console.log(value.length);
for (var k = 0; k < value.length; k++) {
  console.log(value[k]);
} */
// 근데 가만히 생각을 해보면 value는 그저 "ABC"를
// 할당 받았을 뿐인데 왜 .length를 사용할 수 있을까?
// value는 length 프로퍼티가 없는데,
// 왜 3이 출력이 될까?
/* var value = "ABC";
console.log(value.length);
console.log(value.valueOf());
console.log(value["0"]);
var obj = new String("ABC");
debugger; */
// 엔진이 value.length를 만나면
// value가 String타입인 걸 확인하고,
// 내부에서 new String("ABC")를 하게 된다.
// 생성한 인스턴스 length값인 3을 반환!
// 즉, value는 엔진에서 만든 instance가 된 후,
// .length를 한다.

// value에 valueOf가 작동하는 원리도 같다.\
// 하지만 속을 확인해보면 length, [[PrimitiveValue]]
// length는 개발자 코드로
// length프로퍼티를 사용할 수 있다는 것이고
// [[PrimitiveValue]]는 외부에서 사용하지 않고
// 내부에서 사용하겠다는 뜻이다.
// 그래서 이 값을 사용하기 위해서는
// valueOf라는 함수를 이용해서 접근을 하는 것이다!

// 위에서 반복문을 통해서 value의 ABC를
// 출력하는 것도 같은 원리이다.
// new String으로 바꿔서 안에 있는 0: "A" ...
// 에 접근을 하는 것임.
// 0을 프로퍼티 값으로 보고 거기에 해당하는 값을 출력!

// 강의: 화이트 스페이스 삭제
// trim()
/* var value = "  abcd ";
console.log(value.length);
console.log(value.trim().length); */
// 1. value.trim() -> "abcd"반환
// 2. 그 버전의 value.length = 4
// 이렇게 . . . 해서 이어지는 것을 메소드 체인이라고 한다.

// 강의: 함수 호출 구조, __proto__ 구조
// toString()

/* 문자열에도 왜 toString()이 있을까?
"123".toString();
일단 위 예제를 보면 string타입을 굳이
string으로 변환해주고 있다.
왜그러지? 의미가 없지 않나?
 */

/* var obj = String; // prototype에 toString이 있다!
// prototype은 String에게 받은 것.
// [[prototype]]은 __proto__와 같은 것이니,
// String()이 함수이기 때문에 할당된 상위 오브젝트,
// 즉, Function 오브젝트에 대한 복사본.
var instance = new String("123"); // [[prototype]]에 있다.
// instance의 [[prototype]]의 toString이 있는지를 확인해보자
var oneProto = instance.__proto__;
var oneString = oneProto.toString; // toString이 할당되어있음
// 그런데 instance.__proto__.__proto__
// 인스턴스의 프로토를 전개하면 또 프로토가 있고,
// 그곳에 또 toString이 있음.
// 그것은 built-in Object타입임
var twoProto = instance.__proto__.__proto__;
var twoString = twoProto.toString;
debugger; */

// 결국은 toString이 2개 있는 모습이다.
// String 오브젝트에 toString()이 없으면,
// Object 오브젝트에 toString()이 호출된다.
// 계층적으로 내려가면서 찾으려는 것을 찾는다.

// Q. 아니 그래서 왜 toString은 2개가 있는데요?
// Object는 key: value로 작성
// String은 단일 값만 작성.
// 그래서 단일 값을 딸랑 들고 Object로 toString을
// 찾으러 가면 이상해진다.
// 그래서 그런 것을 방지하지 위해 toString을 String에도
// 넣어두었다. Number에 toString이 들어간 것도 같은 맥락.

// 프로그래밍을 할때도 같다.
// String의 toString처럼 반복되지만 위에서 작동되게 만들어 줄 수도 있고,
// 중복되는 것이니 아래에서 작동되게 만들어 줄 수도 있다.
// 결론은 아래의 toString은 프로퍼티를 toString으로 변환시켜주는 것이고,
// 위의 toString은 문자열을 toString으로 변환시켜주는 것이다.

// 그래서 대부분의 빌트인 오브젝트에는 toString과 valueOf가 있다.
/* var value = 123; // ㅇ0ㅇNumber네~
value.toString(); // Number의 toString 실행
// 이것도 이전 강의에서 본 것과 같은 절차이다.
// 엔진이 built-in Number Object로 Number인스턴스를 만들어서
// 함수를 호출하고 값을 반환!
"123".toString(); // String의 toString 실행 */

/* var result = toString(123);
console.log(result); */
// 이 경우에는 앞에 따로 오브젝트가 없음.
// 이럴 때는 2번째 프로토 단계로 가서 빌트인 Object로 가서
// toString()을 호출. 그러면 이상한 결과가 나온다.
// 이걸 방지하기 위해서 Number, String오브젝트에서
// toString이 있는 것이다.

// 강의: index로 문자열 처리
// charAt()
/* const value = "sports";
console.log(value.charAt(1));
console.log(value[1]); // 위와 같은 결과
console.log(value.charAt(10));
console.log(value[10]); */
// charAt(index) => index번째 문자를 반환
// 문자열의 길이보다 인덱스가 크면 빈 문자열을 반환
// 일반적으로 존재하지 않으면 undefined가 반환
// 차라리 undefined가 나음

// indexOf()
// 왼쪽에서 오른쪽으로 검색
/* const value = "123123";
console.log(value.indexOf(2));
console.log(value.indexOf(23));
// 값을 구하면 더 이상 값을 구하지 않음
console.log(value.indexOf(2, 3));
// 2를 검색하는데 3번째 문자부터 검색
console.log(value.indexOf(15));
// 같은 문자가 없으면 -1이 반환
// 두번째 인덱스가 length보다 크면 -1을 반환
*/

// lastIndexOf()
// 오른쪽에서 왼쪽으로 검색
/* const value = "123123";
console.log(value.lastIndexOf(2));
console.log(value.lastIndexOf(2, 1)); */
