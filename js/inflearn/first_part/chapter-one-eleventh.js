// Array오브젝트 ES5기준

// 강의: 프로퍼티 리스트, 함수 여부 체크

// 프로퍼티 리스트
// forEach(), every(), some(), filter(), map(),
// reduce(), reduceRight()는 콜백 함수를 호출한다.
// 그래서 대화를 반복할 '때마다' 호출한다.
// forEach()는 중간에 빠져나올 수 없다.
// forEach부터 map까지 5개의 메소드의 공통점은 파라미터가 3개라는 점.
// 1. 현재 처리 중인 엘리먼트 값
// 2. 현재 처리 중인 인덱스
// 3. 배열 전체를 넘겨줌

// every는 false일 때까지
// some은 true일 때까지

// filter는 true만 반환하는데
// map은 콜백 함수에서 값을 조정하고 변경할 수 있음

// reduce, reduceRight
// 두 개는 왼쪽에서 오른쪽으로 가는 것과
// 오른쪽에서 왼쪽으로 가는 것의 차이임

// isArray()
// 체크 대상이 배열인지 아닌지를 확인
// 얘는 함수임. 그래서 아래와 같이 사용해주어야 한다.
/* console.log(Array.isArray([1, 2]));
console.log(Array.isArray(123)); */

// ES3에는 없었던 것이 ES5에 왜 생겼을까?
// 아래 3개가 모두 object가 나온다.
// 그러니 배열을 구별하는 함수를 하나 만들어 준 것이다.
/* console.log(typeof { a: 1 });
console.log(typeof [1, 2]);
console.log(typeof null);
console.log(Object.is(null)); */

// null은 Object.is()를 사용한다.

// 강의: index처리 메소드

// indexOf()
// 파라미터 값과 같은 엘리먼트의 '인덱스' 반환

// 값이 같은 엘리먼트가 있으면 검색 종료
/* const value = [1, 2, 5, 4, 5];
console.log(value.indexOf(5));
// 데이터 타입까지 체크
// 같은 값이 없으면 -1을 반환한다.
console.log(value.indexOf("5"));
// 두 번째 파라미터의 인덱스부터 검색
console.log(value.indexOf(5, 3));
// 빌트인String과 빌트인Array의 indexOf()차이
// 두번째 파라미터에 음수를 작성했을 때 검색 방법이 다르다.
// String오브젝트는 0으로 간주하여 처음부터 검색
console.log("ABCDE".indexOf("C", -2));
const list = ["A", "B", "C", "B", "C"];
// Array오브젝트는 음수에 length를 더해 시작 인덱스로 사용
console.log(list.indexOf("C", -2)); */

// lastIndexOf()
// 파라미터 값과 같은 엘리먼트의 마지막 인덱스 반환
// 역시나 두번째 파라미터는 검색 시작 인덱스임
// 다른 처리 방법은 indexOf()와 같음
/* const value = [1, 2, 5, 2, 5];
console.log(value.lastIndexOf(5)); */

// 근데 여기서 오른쪽에서 왼쪽으로 가는게
// 왼쪽에서 오른쪽으로 가는 것보다 더 속도가 좋음.
// 그래서 왼쪽에서 오른쪽으로 가면서
// 마지막 인덱스를 반환한다고 생각하지 말고,
// 뒤에서 앞으로 검색한다고 생각하는게 편함.

// 강의: 콜백 함수를 가진 Array()메소드, forEach()

// 지금부터 다루는 7개 메소드는 '모두' 콜백 함수를 호출합니다.

// 키워드는 시맨틱과 독립성 입니다.

// forEach()메소드
// 파라미터로는
// 1.콜백함수, 2.this로 참조할 오브젝트opt

// 배열의 엘리먼트를 하나씩 읽어 가면서 콜백 함수를 호출
// 콜백함수 파라미터로는
// 엘리먼트 값, 인덱스, 배열 전체 순이다.
/* const list = ["A", "B", "C"];
list.forEach(function (el, index, all) {
  console.log(el + "(엘리먼트): " + index + "(인덱스): " + all + "(배열전체)");
}); */

// 콜백함수에는 break나 continue를 사용할 수 없다.
// 따라서 처음부터 끝까지 반복을 하게 된다.
// forEach의 특징임.

// throw는 사용 가능하다.

// 콜백 함수 분리(독립성)
/* const list = ["A", "B", "C"];
const fn = function (el, index, all) {
  console.log(el + "(엘리먼트): " + index + "(인덱스): " + all + "(배열전체)");
};
list.forEach(fn); */

// 위가 좋을까 아래가 좋을까?
// 당연히 아래가 더욱 좋다.
// 같은 함수가 계속 복사가 되어
// 중복되는 것을 방지할 수 있다.

// this로 오브젝트 참조 가능하다.
/* const list = [1, 2];
const fn = function (el, index, all) {
  console.log(el + this.ten);
};
list.forEach(fn, { ten: 10 }); */

// 콜백함수에서 값 또는 데이터를 얻을 수 있는 방법은?
// 1. 파라미터로 값을 얻는다.
// 그 파라미터를 매개변수로 삼아서 값을 얻는다.
// 2. this를 이용해서 참조.
// 3. 다른 함수를 호출해서 함수에서 반환한 값을 이용

// 강의: for()과 forEach()의 차이, [코딩 시간]

// forEach()
// forEach()를 시작할 때 반복 범위 결정
// 엘리먼트를 추가하더라도 처리하지 않음
/* const list = [1, 2, 3];
const fn = function (el, index, all) {
  if (index === 0) {
    list.push("AB");
  }
  console.log(el);
  // 반복하는 와중에 추가되는 AB는 처리하지 않는다.
};
list.forEach(fn); */

// 현재 인덱스보다 큰 인덱스 값을 '변경'하면 변경된 값을 사용
// 당연히 현재 인덱스 보다 작은 인덱스의 값을 변경하면 처리하지 않는다.
/* const list = [1, 2, 3];
const fn = function (el, index, all) {
  if (index === 0) {
    list[2] = 345;
  }
  console.log(el);
};
list.forEach(fn); */

// 현재 인덱스보다 큰 인덱스의 엘리먼트를 '삭제'하면,
// 배열에서 삭제되므로 반복에서 제외됨.
// 위에서 배웠던 것처럼 추가는 처리가 되지 않지만,
// 삭제는 반영이 된다.
/* const list = [1, 2, 3];
const fn = function (el, index, all) {
  if (index === 0) {
    delete list[2];
  }
  console.log(el);
};
list.forEach(fn); */

// for()와 forEach()의 차이

// forEach()는 시맨틱 접근
// 처음부터 끝까지 반복한다는 시맨틱
// 반복 중간에 끝나지 않는다는 시맨틱
// 시맨틱으로 소스 코드의 가독성 향상

// for()는 함수 코드를 읽어야 알 수 있음
// break, continue 사용 가능!

// forEach()는 반복만 하며,
// 콜백 함수에서 기능 처리, this 사용 가능

// forEach()는 인덱스 0부터 시작
// for()와 같이 인덱스 증가 값을 조정할 수 없음
// 뒤에서 앞으로 읽을 수도 없음, 이것도 시맨틱 접근

// 프로그램은 코드가 아닌 시나리오로 풉니다.

// 과제
/* //문제에서는 1000000까지라고 했는데
// 큰 차이가 없어서 100000000이정도로 하니 차이가 확실했음
function check(el, index, all) {}
const arr = [];
for (i = 0; i < 100000000; i++) {
  arr.push(i);
}
let start = Date.now();
arr.forEach(function (el, index, all) {});
let end = Date.now();
console.log("내부: " + (end - start));
start = Date.now();
arr.forEach(check);
end = Date.now();
console.log("외부: " + (end - start));
// 외부가 더 빠르구만! */

// 강의: true, false를 반환하는 메소드

// every()메소드
// forEach()처럼 시맨틱 접근
// 배열의 엘리먼트를 하나씩 읽어가면서
// 다른점은 false를 반환할 때까지 콜백 함수 호출
/* const value = [20, 10, 30, 40];
const fn = function (el, index, all) {
  console.log(el);
  return el > 15;
};
const result = value.every(fn);
// "false를 반환할 때까지!!"
console.log("결과: ", result); */

// false가 되는 조건이 배열의 앞에 있을 때
// 효율성이 높음! 빨리 찾고 끝나니까

// some()
// every()처럼 시맨틱 접근
// 단, true를 반환할 때까지 콜백 함수 호출
// true를 반환하지 않으면 false를 반환
/* const value = [10, 20, 30, 40];
const fn = function (el, index, all) {
  console.log(el);
  return el > 15;
};
const result = value.some(fn);
// "false를 반환할 때까지!!"
console.log("결과: ", result); */

// every와 마찬가지로 true가 되는 조건이
//  배열의 앞에 있을때 효율성이 높음.

// 강의: 필터, 매핑

// filter()메소드
// forEach()처럼 시맨틱 접근
// 배열의 엘리먼트를 하나씩 읽어가면서
// 콜백 함수에서 true를 반환하면,
// 현재 읽은 엘리먼트를 반환
/* const value = [10, 20, 30, 40];
const fn = function (el, index, all) {
  return el > 15;
};
const result = value.filter(fn);
// true인 친구들로만 모아서
// 새로 배열을 만듦
console.log(result); */

// 콜백 함수에서 false만 반환하면,
// 빈 배열이 반환
// 조건에 맞는 엘리먼트를 추려낼 때 유용

// map()메소드
// 파라미터: 콜백함수, this로 참조할 오브젝트opt

// forEach()처럼 시맨틱 접근
// 배열의 엘리먼트를 하나씩 읽어가면서
// 콜백 함수에서 반환한 값을 새로운 배열에 첨부하여 반환
/* const value = [10, 20, 30];
const fn = function (el, index, all) {
  return el + this.add;
};
const point = { add: 100 };
const result = value.map(fn, point);
console.log(result); */

// forEach처럼 처음부터 끝까지 읽는 건 같지만
// 반환하는게 있고 없고의 차이가 있음

// 강의: 반환 값을 파라미터 값으로 사용

// reduce()
// forEach()처럼 시맨틱 접근
// 배열 끝까지 콜백 함수 호출
// 파라미터 작성 여부에 따라 처리가 다름

// 콜백 함수만 작성한 경우
// 즉, 파라미터를 하나만 작성
/* const value = [1, 3, 5, 7];
const fn = function (prev, curr, index, all) {
  // 엘리먼트가 두 개 설정
  // 처음 시작할 때 인덱스가 1임
  console.log(prev + "," + curr);
  return prev + curr;
  // 최초의 1,3이 호출이 되어서
  // 1+3=4가 되고, 이 4를 prev 파라미터 값으로
  // 돌려준다. 그 다음은 4,5가 된다.
  // 최초 index는 1이 된다.
};
const result = value.reduce(fn);
console.log("결과 : ", result); */

// 두 번째 파라미터를 작성한 경우
// 처음 콜백 함수를 호출할 때
/* const value = [1, 3, 5, 7];
const fn = function (prev, curr, index, all) {
  console.log(prev + "," + curr);
  return prev + curr;
};
const result = value.reduce(fn, 7);
// 7이 최초의 prev에 할당되게 되고,
// 배열에서 1이 curr이 되게 된다.
// 최초 index는 0이 된다.
console.log("결과 : ", result); */

// reduceRight()
// reduce()와 처리 방법이 같음
// 단, 배열의 끝에서 앞으로 하나씩 읽어가면서
// 콜백 함수에서 반환한 값을 반환
/* const value = [1, 3, 5, 7];
const fn = function (prev, curr, index, all) {
  console.log(prev + "," + curr);
  return prev + curr;
};
const result = value.reduceRight(fn);
console.log("반환:", result); */

// Boolean오브젝트
// 강의: Boolean오브젝트 개요, 프로퍼티 리스트, Boolean값으로 변환
// 빌트인 오브젝트
// true, false처리

// 값이 있으면 true로 인식

// false인식 기준
// => undefined, null, NaN
// 빈 문자열, 숫자 타입의 0

// 숫자 값 변환 기준
// true 1, false 0

// new Boolean()
// Boolean인스턴스 생성
/* const value = [undefined, null, NaN, 0, ""];
for (let k = 0; k < value.length; k++) {
    let obj = new Boolean(value[k]);
    console.log(obj + 1);
} */

// 파라미터 값을 true또는 false로 변환하여
// 프리미티브에 설정

// 문자열이면서 값이 있으면 true로 변환
/* const value = [12, "1", "0", "false"];
for (let k = 0; k < value.length; k++) {
  let obj = new Boolean(value[k]);
  console.log(obj + 1);
} */

// Boolean()
// 불리언 값으로 변환
// 인스턴스를 생성하지 않고,
// true 또는 false로 변환
/* const value = [12, "1", "0", "false"];
for (let k = 0; k < value.length; k++) {
  console.log(Boolean(value[k]) + 1);
} */

// toString()
// data위치의 true,false를 문자열로 변환
/* const result = true.toString();
// true니까 불리언 인스턴스를 호출하게 되고
console.log(result);
// true를 반환
console.log(typeof result); */

// valueOf()
// 불리언 인스턴스의 프리미티브 값의
// true, false 반환
/* const obj = new Boolean(3);
console.log(obj.valueOf()); */
