// 1. arrow function

// 화살표 함수는 this가 없다.
// 그래서 아래의 상황에서는 this.student를
// 사용하면 외부의 group에서 가져온다.
// 새롭게 안 사실은 배열이 students이면,
// student라고도 사용할 수 있다.
// 물론 students라고 사용해도 똑같은 결과가 나온다.
let group = {
  title: "모둠",
  students: ["민수", "영희", "희승"],

  showList() {
    this.students.forEach((student) => console.log(this.title + ":" + student));
  },
};

group.showList();

// 위와 같은 경우에는 화살표 함수가 아닌
// 일반적인 함수의 경우에는 undefined에러가 생김.
// forEach에 전달되는 함수의 this가
// undefined이기 때문이다.

// 2. 유사배열
let array = [1, 2, 3];
let nodes = document.querySelectorAll("div");
let els = document.body.children;
console.log(Array.isArray(array));
console.log(Array.isArray(nodes));
console.log(Array.isArray(els));
// 직접 배열 리터럴로 선언한 array만 배열임.
// 객체도 유사 배열이다.  object.sth ...처럼
// 모두 활용할 수 있다.
// 하지만 배열과 유사배열을 구분해야 하는 이유는
// 유사배열과 같은 경우는 메서드를 사용할 수 없기 때문이다.
// Array.prototype.forEach.call();

// 3. 함수의 메소드와 arguments
let threeplus = function (a, b, c) {
  return a + b + c;
};

threeplus(1, 3, 5);
threeplus.call(null, 1, 2, 3);
threeplus.apply(null, [1, 2, 3]);
console.log(threeplus(1, 3, 5));
console.log(threeplus.call(null, 1, 2, 3));
console.log(threeplus.apply(null, [1, 2, 3]));
// 함수를 호출하는 방법은 ()를 붙이거나
// call, apply하는 방법이 있다.

// 4. 실행 컨텍스트

let name = "zero";
function wow(word) {
  console.log(word + " " + name);
}
function say() {
  let name = "nero";
  console.log(name);
  wow("hello");
}
say();

// 5. window

// window 아래에는 대표적으로
// screen, location, history, document같은 객체들이 있고,
// parseInt, isNan같은 메소드들이 있다.
// window에 대표적인 메소드 중에서는
// window.close()
// window.open()
// open에서는 주소를 링크해서 특정 페이지로 연결을 할 수 있고,
// _self인지 _blank인지, 어느 정도 사이즈로 열지 등을 정할 수 있다.
// opner객체를 이용해서 원래 탭에 접근도 가능하다.

/* let popup = window.open("", "_blank", "width=200,height=200");
popup.document.write("안녕하세요");
popup.opener.document.write("hi");
popup.close(); */

// 그 외에도 window.encodeURI(),
// window.decodeURI(),
// window.setTimeout(func,ms),
// window.setInterval(func,ms),
// window.clearInterval, window.clearTimeout

// 다음은 전역 객체 중에 자주 사용되는 것
// document는 따로 DOM이라고 불리고,
// 나머지는 브라우저에 대한 정보를 가지고 있어서
// BOM browser object model
// 라고 불린다. 아래는 BOM의 종류이다.
// navigator, screen, location
// navigator는 사용자 디바이스와 관련된 정보를,
// screen은 사용자의 화면과 관련된 정보를
// location은 주소와 관련된 정보를 준다.

// 6. document
// document는 html에 관한 것들을 담당하는 객체이니,
// 대부분의 것들이 태그를 선택하고 조작하는데 사용
/* const div = document.createElement("div");
const text = document.createTextNode("textIstext");
const fragment = document.createDocumentFragment();
div.appendChild(text);
fragment.appendChild(div);
document.body.appendChild(fragment); */
// 위와 같이 하는 이유는 js로
// document의 태그를 조작하는 것은 매우
// 성능이 떨어진다. 특히 여러 태그를 반복문을
// 통해서 동시에 추가할때는 더욱!
// 그래서 createDocumentFragment를
// 이용하면 실질적으로 document는 한 번만
// 조작하면 되기 때문에 성능에서 부담이 덜하다.

// 7. DOM
// document object model
// 아래처럼
// document를 객체로 구현했다고 생각하면 된다.
/* {
  document: {
    html: {
      head: {
        title: ...
      },
      body: {
        header: ...
      }
    }
  }
} */
// 여기서 head와 body는 html태그를
// 건너띄고 document에서 바로 접근을 할 수 있다.
// document.head, document.body와 같이.

// 잠시 Node와 Element에 대해서 알아보도록 하자.
// Node는 태그와 텍스트 노드 전체를 가리키고,
// Element는 텍스트 노드를 제외하고,
// 흔히 생각하는 <a>같은 태그들만 가리킨다.

// 아래는 자주 쓰이는 DOM의 속성이다.
// 태그.nodeType 를 사용하면
// 해당 태그를 알려주는 숫자가 나온다.
/* const Node = document.querySelector("div");
console.log(Node.ELEMENT_NODE);
console.log(Node.TEXT_NODE);
console.log(Node.COMMENT_NODE);
console.log(Node.DOCUMENT_NODE);
console.log(Node.DOCUMENT_TYPE_NODE);
console.log(Node.DOCUMENT_FRAGMENT_NODE); */
// 각각 1,3,8,9,10,11의 숫자가
// 출력이 되는데 사이사이에 숫자가 없는 곳은
// 요즘은 사용이 잘 안되는 것들이다.

// 자식으로 가기 위해서는 children을
// 사용하는데,
// children은 텍스트 노드를 제외하고,
// childNodes는 텍스트 노드를 포함한다.
// 참고로 자식들은 여러명일 수 있으니 복수형을 보통 사용하고,
// 부모는 한 명이니 단수형을 사용한다.
/* document.body.children; // document.body.children[1];
document.body.firstChild; // 첫째 자식만 선택하고 싶을때
document.body.firstElementChild;
document.body.lastChild; // 마지막 자식만 선택하고 싶을때
document.body.lastElementChild;

// 그 부모를 찾기 위해서는 parentNode 속성을 사용한다.
document.body.parentNode;
document.body.parentElement; */

// 형제자매 태그를 찾을 때는 sibling을 사용한다.
/* console.log(document.getElementsByTagName("div")[0].nextSibling); */

// 선택한 태그의 내용물을 얻어오거나 바꿀 수 있음.
// 텍스트 외에도 태그를 집어넣을 수도 있음.
// outerHTML은 현재태그까지 포함한 문자열을 반환.
/* const first_div = document.getElementsByTagName("div")[0];
first_div.innerHTML = "hello";
first_div.innerHTML = "<b>bold</b>";
first_div.outerHTML; */

// 이어서 태그 속성을 알아보자.
// 태그를 선택하고 그 속성을 조회하고 바꿀 수 있다.
// id, className(class), name, value, placeholder,
// checked, disabled, readonly 같은 속성 값을 볼 수 있다.
/* const tag = document.getElementById("DOMtag");
tag.id; */
// 해당 태그가 가지고 있는 모든 속성을 보고 싶으면 태그.attributes
// 태그.clientHeight 태그.clientWidth
// margin,border, scrollbar을 제외한 높이와 너비를 반환
// 태그.offsetHeight 태그.offsetWidth
// margin만 제외한 높이와 너비를 반환
// 태그.scrollHeight 태그.scrollWidth

// 다음으로는 메소드를 알아보자.
// 대표적으로 appendChild를 사용하면 마지막 순서의 자식 태그로 추가된다.
/* const newElement = document.createElement("div");
document.body.appendChild(newElement);
document.body.removeChild(
  document.body.childNodes[document.body.childNodes.length - 1]
); */

// 태그.insertBefore(넣을 태그, 기준 태그) 는 appendChild와는 다르게
// 자신의 형제 태그로, 자신 이전에 집어넣는다.
/* const newElement = document.createElement("header");
document.body.insertBefore(
  newElement, document.getElementById("DOMtag")); */

// 태그.cloneNode 는 자신을 복사함.
// 응용을 하자면 이걸로 복사를 해서 appendChild나 insertBefore로
// 집어넣으면 딱임!
/* const clone = document.getElementsByTagName("div")[0].cloneNode(); */
