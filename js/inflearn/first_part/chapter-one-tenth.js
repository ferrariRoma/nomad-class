// ES3기준 Array오브젝트

// 3은 배열의 기본
// 5는 활용의 차원

// 배열 엘리멘트

// 2의 32승-1개를 엘리멘트로 작성 가능

// index
// 엘리먼트의 위치

// 배열의 특징
// 엘리먼트의 작성이 순서를 갖는다.
// 배열 전체를 작성한 순서로 읽거나,
// 인덱스로 값을 추출할 수 있음.

// 배열 생성 방법
// new Array()
// Array() 함수. new를 사용하지 않았다 뿐이지 인스턴스 생성
// 대괄호 이용 []

// 엘리멘트 작성방법
// js의 모든 타입의 값, 오브젝트 사용가능
// 콤마만 작성하면 undefined가 설정됨

// 배열의 차원
// 1차원 [] 2차원 [[]] 3차원 [[[]]]
/* const list = [12, 34, 56];
for (var k = 0; k < list.length; k++) {
  console.log(list[k]);
} */

/* const list = [[12, 34, 56]];
for (var k = 0; k < list.length; k++) {
  const one = list[k];
  for (var m = 0; m < one.length; m++) {
    console.log(one[m]);
  }
} */

/* const list = [[[12, 34, 56]]];
for (var k = 0; k < list.length; k++) {
  const one = list[k];
  for (var m = 0; m < one.length; m++) {
    const two = one[m];
    for (var n = 0; n < two.length; n++) {
      console.log(two[n]);
    }
  }
} */

// 2차원까지는 모르겠는데, 3차원까지는 가독성이 떨어져서
// 함수로 떼어내는 방법도 있다.

// 강의: 프로퍼티 리스트

// 강의: Array인스턴스 생성, length프로퍼티

// new Array()
// Array인스턴스 생성, 반환
/* const obj = new Array();
console.log(typeof obj);
// new Array()로 생성한 인스턴스 타입은 object
console.log(obj.length); */

/* const one = new Array(10, 20);
console.log(one);
const two = new Array([10, 20]);
console.log(two);

// 위에서 배웠던 2차원 배열을 푸는 것을 적용하면
// 출력할 수 있다.
for (let i = 0; i < two.length; i++) {
  const three = two[i];
  for (let j = 0; j < three.length; j++) {
    console.log(three[j]);
  }
} */

// new Array(3)처럼 파라미터에 숫자를 작성하면
// 3개의 엘리먼트 생성
/* const obj = new Array(3);
// [undefined,undefined,undefined]
console.log(obj); */

// 왜 이렇게 3이란 숫자를 적어서
// 3개 짜리 배열을 만들기도 하는거지?

// 처음에는 배열의 엘리멘트를 하나도 안적었었고,
// 1,2,3 같은 걸 넣으면 엘리멘트들이 설정이 됐음.
// 배열을 만들면 메모리 어딘가에 저장이 됨.
// 그 배열을 obj인것임.
// 메모리의 한 부분을 통째로 자리 잡기 위한 방법임.
// 그게 아니면 여기저기 산발적으로 메모리가 저장될 수 있음.
// 위에서 봤던 one은 앞으로 어떻게 될지 모름.
// 뒤에 더 추가될 수도 있음.
// 하지만 obj처럼 한 번에 잡아주면 한 부분을 통째에
// 잡아줄 수 있음. 속도가 비교적 빠름.
// 최근에는 컴퓨터의 사양이 좋아져서 큰~ 의미가 없음.

// 아마 C언어의 배열의 느낌인듯.

// Array()
// new Array()와 생성 방법 및 기능이 같음.

// 인스턴스 생성 논리
// new Array()는 new연산자에서
// 생성자 함수를 호출하여
// 인스턴스 생성

// Array()는 직접 생성자 함수를
// 호출하여 인스턴스 생성
// 어차피 new를 사용해서 constructor에서
// 호출이 되는 것도
// Array()임.
// 그리고 대문자로 시작하니
// 이미 이 자체가 생성자 함수라고 볼 수 있다..

// length 프로퍼티
// 열거/삭제는 할 수 없지만, 변경은 가능
// 변경을 하면 배열의 엘리먼트 수가 변경된다.
/* const value = [1, 2, 3];
value.length = 2;
console.log(value);
value.length = 4;
console.log(value); */

// 하지만 보통 변경은 잘 안씀

// 강의: 엘리멘트 추가/삭제 메커니즘

// 엘리먼트 추가
// 배열에 엘리멘트를 추가하기 위해서는
// 삽입할 위치에 인덱스를 지정하면 됨~
/* const value = [1, 2];
value[4] = 5;
// 2,3번째에 undefined가 들어감
console.log(value); */

// 표현식으로도 인덱스를 지정할 수 있다.
/* const value = [1, 2];
value[value.length + 2] = 5;
console.log(value); */

// delete연산자

// var변수는 삭제가 불가능하다.
/* var value = 123;
console.log(delete value); */

// var 키워드를 사용하지 '않은'
// 글로벌 변수는 삭제가 가능하다.
/* value = "global variable";
console.log(delete value);
// try-catch로 삭제여부 확인
try{
  console.log(value);
}catch(e){
  console.log("존재하지 않음");
} */

// 프로퍼티 삭제
/* const book = { title: "책" };
console.log(delete book.title);
console.log(book.title);
console.log(book); */

/* var train = { title: "srt" };
console.log(delete train);
const book = { title: "책" };
console.log(delete book);
let sport = { title: "축구" };
console.log(delete sport);
// 강좌에서는 var키워드라고 했지만,
// const,let도 마찬가지로 오브젝트 전체를
// 삭제할 수 없다.
// 키워드를 사용하지 않으면 삭제가 됨.
food = { title: "팔보채" };
console.log(delete food); */

// ES5에서 삭제 불가 설정 가능

// 인덱스로 배열의 엘리먼트 삭제
// 삭제를 해도 전체 길이는 그대로
/* const value = [1, 2, 3, 4];
console.log(delete value[1]);
console.log(value.length); */

// 배열 엘리먼트 삭제 메커니즘
// 삭제된 인덱스에 undefined설정
// 배열을 읽을 때 제외시켜야 됨.

// 강의: 엘리먼트 삽입, 첨부

// unshift()
// 0번 인덱스에 파라미터 값 삽입
// 현재 배열에 있던 엘리먼트는 뒤로 이동
/* const value = [1, 2];
value.unshift(345, 67);
console.log(value); */

// push()
/* const value = [1, 2];
value.push(345, 67);
console.log(value); */

// push는 서버에서 데이터를 받을때
// 데이터를 받을 때마다 렌더링을 해서
// DOM을 생성하기 보다는
// 배열의 push를 통해서 데이터를 쭉 추가해서
// 한 번에 렌더링을 해주는게 낫다.

// 테이블 형태를 다룰때는 push, join을
// 많이 쓴다더라~

// concat()
// 배열의 파라미터 값을 연결해서 반환
/* const value = [1, 2, 3];
const result = value.concat(4, 5);
console.log(result); */

// 파라미터가 1차원 배열이면 값만 반영
/* const value = [1, 2, 3];
const result = value.concat([6], [7]);
console.log(result); */

// 강의: 엘리먼트 복사

// slice()
// 배열의 일부를 복사하여 배열로 반환
// => 다수를 반환
// 첫번째 인덱스부터 두번째 '직전'까지
// 두번째 인덱스의 default가
// length라서 그런듯~
/* const origin = [1, 2, 3, 4, 5];
const result = origin.slice(1, 3);
console.log(origin);
console.log(result); */

// true, false를 숫자로 변환
/* const origin = [1, 2, 3, 4, 5];
console.log(origin.slice(true, 3));
console.log(origin.slice(false, 3)); */

/* // 첫번째 파라미터만 작성
// 두번째 값의 디폴트는 length임
console.log([1, 2, 3, 4, 5].slice(2));
// 두번째가 더 클 때는 빈 배열.
// 앞에서 다른 경우처럼 위치를 바꾸고 그런거 없음
console.log([1, 2, 3, 4, 5].slice(4, 3));
// 파라미터가 음수일 때
// length값을 양쪽 모두에 더한다.
// slice(1,3)
console.log([1, 2, 3, 4, 5].slice(-4, -2)); */

// 강의: 엘리먼트 값을 문자열로 변환
// join()
// 엘리먼트와 분리자를 하나씩 결합하여 문자열로 연결
/* const value = [1, 2, 3];
let result = value.join("##");
console.log(result);
console.log(typeof result);
// 파라미터를 작성하지 않으면 콤마로 분리
result = value.join();
console.log(result);
// 빈 문자열을 작성하면 다 붙여줌
// 사용 빈도수가 높음
// 데이터로 HTML의 마크업을 만들어
// 한 번에 표시할 때 사용
result = value.join("");
console.log(result); */

// toString()
// 배열의 엘리먼트 값을 문자로 연결
// 콤마로 엘리먼트를 구분
/* const result = ["A", "B", "C"].toString();
console.log(result);
// 2차원 배열을 적어도 1차원으로 배열을 펼치고
// 다시 1차원을 문자열로 연결한다.
console.log([["가"], ["다"]].toString()); */

// toLocaleString()
// 엘리멘트 값을 지역화 문자로 변환
// 문자열을 콤마로 연결하여 반환
/* const value = [12.34, 56];
console.log(value.toLocaleString("zh-Hans-CN-u-nu-hanidec")); */

// 과제

// 1차 시도
/* const ul = document.querySelector("ul");
const arr = [];
for (let i = 3; i <= 10; i++) {
  const newList = document.createElement("li");
  arr.push(i);
  newList.id = `id${i}`;
  newList.innerHTML = `id${i}`;
  ul.appendChild(newList);
} */
// 성공은 했는데 이렇게 하면 배열arr을 사용못하는 것이고,
// join도 사용을 못하는 것이기 때문에 결과적으로는 오답이다.
// const modify = arr.join();
// console.log(arr);
// console.log(modify);
// const newList = document.createElement("li");
// newList.id = "id3";
// document.body.appendChild(newList);

// 2차 시도
// 인프런의 다른 학우분이 올려주신 풀이 참조
/* "use strict";
// ES5에서는 이거 써줘야 됨
// ES6에서는 자동 use strict모드임

const html = [];
// 배열 만들어주고
html.push("<ul>");
// push를 이용해서 그 배열에 마크업을 주우우욱 넣어준다.

for (let i = 1; i <= 10; i++) {
  // html.push("<li id=id" + i + ">" + "id" + i + "</li>");
  html.push(`<li id=id${i}>id${i}</li>`);
}
html.push("</ul>");

let result = html.join();
console.log(result);
result = html.join("");
// 그리고 나서 join("")을 해주면 하나의 문자열로 합쳐지니까
console.log(result);

document.body.innerHTML = html.join("");
// 그걸 통째로 innerHTML로 body에 넣어주면
// 마크업 언어가 통째로 들어가는 거니까
// 웹 페이지에 잘 들어감 */

// 강의: 엘리멘트의 삭제
// shift()
// 배열의 첫 번째 엘리먼트 삭제
// 삭제한 엘리먼트 값이 undefined로 남지 않고
// 완전히 삭제된다.
// 그래서 length값이 하나 줄어든다.
/* const value = [1, 2, 34];
console.log(value.shift());
// 삭제할 엘리먼트를 반환
console.log(value); */

// 빈 배열이면 undefined가 반환됨.
/* const value = [];
console.log(value.shift()); */

// pop()
// 배열의 마지막 엘리먼트 삭제
// 삭제한 엘리먼트 값이 역시 완전하게 삭제 된다.
// 빈 배열이면 undefined반환 하는 것까지 같다.
/* let value = [1, 2, 34];
console.log(value.pop());
console.log(value);
value = [];
console.log(value); */

// splice()
// 1번 인덱스: 시작 인덱스, 디폴트0
// 2번 인덱스: 삭제할 엘리먼트 수
// 3번 인덱스: 추가할 엘리먼트opt

/* const value = [1, 2, 3, 4, 5];
console.log(value.splice(1, 3));
// 엘리먼트를 삭제하고 삭제한 엘리먼트 반환
// 삭제한 엘리먼트를 반환
console.log(value);
// 뒤의 엘리먼트가 앞으로 당겨진다. */

// 삭제한 위치에 세 번째 파라미터 삽입
/* const value = [1, 2, 3, 4, 5];
console.log(value.splice(1, 3, "A", "B"));
console.log(value); */

// 파라미터를 작성하지 않으면?
/* const value = [1, 2, 3, 4, 5];
console.log(value.splice());
// 두번째 엘리먼트는 무조건 적어야 되는데,
// 안적었기 때문에 삭제하지 않습니다.
// 그러니까 빈 배열 반환
console.log(value); */

// 강의: sort(분류), sort()와 Unicode

// sort()
// 파라미터로 함수를 작성할 수 있음
// 엘리먼트 값을 승순으로 정렬

// 정렬 기준은 엘리먼트 값의 Unicode
/* let value = [4, 2, 3, 1];
console.log(value.sort());
// 코드 포인트가 작으면 앞에 오고, 크면 뒤에 옴
value = ["A1", "A01", "B2", "B02"];
console.log(value.sort());
// 왼쪽에서 오른쪽으로 문자 하나씩 비교하여 정렬 */

// sort 대상 배열도 정렬됨
/* const value = [4, 2, 3, 1];
console.log(value.sort());
console.log(value);
// 생성한 배열 자체를 정렬해준다. 
// 따로 수정된 것을 할당해주지 않았는데도. */

// 값이 undefined이면 끝으로 이동
// undefined가 1보다 크다는게 아니라
// 그냥 undefined라서 그러는 것임
/* const value = [, , 1, 2];
console.log(value.sort()); */

// sort()와 Unicode
// 숫자에 해당하는 Unicode의 code point로 정렬
/* const value = [101, 26, 7, 1234];
console.log(value.sort()); */

// 보통의 생각은 크기대로 정렬될 것이라고 생각하지만
// 왼쪽부터 오른쪽으로 가면서
// 차례대로 비교하는 것이기 때문에
// 101 1234 26 7순으로 정렬이 된다.

// 이를 우리가 생각한대로 해결하려면 sort()의 파라미터에 함수를 작성하고
// 함수에서 정렬해야 합니다.

// 강의: sort알고리즘, 역순 정렬, [코딩시간]

// sort알고리즘
/* const value = [101, 26, 7, 1234];
value.sort(function (one, two) {
  return one - two;
});
console.log(value); */
// 1. sort()의 파라미터의 function(){}을 호출하면서
// 101과 26을 파라미터 값으로 넘깁니다.
// 101이 one에, 26이 two에 설정됩니다.

// 2. one(101)-two(26)의 결과는 양수이며
// 이 값을 반환한다.
// 이때 0보다 큰 값이 반환되면 배열에서
// 값의 위치를 바꾸고, 0보다 작은 값이 반환되면
// 순서를 그대로 둔다.

// 3. 이렇게 쭉 해서 다시 처음으로 돌아가
// 바뀌는 것이 없을 때까지 배열의 엘리먼트의 위치를 조정한다.

// return 값에 two-one을 할 수도 있다.

// 과제
/* const value = [101, 26, 7, 1234];
value.sort(function (one, two) {
  return two - one;
});
console.log(value); */

// reverse()
// 배열의 엘리먼트 위치를 역순으로 바꾼다.
// 엘리먼트 값이 아닌 '인덱스' 기준
// 대상 배열도 바뀜
/* const value = [1, 3, 7, 5];
console.log(value.reverse()); */
