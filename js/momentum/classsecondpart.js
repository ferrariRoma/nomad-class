/* 3-0강
js는 html과 상호작용하기 위해서 사용한다.
각각의 element들을 js를 통해서 변경하고 읽을 수 있음.
접근해서 값을 js의 관점에서 볼 수 있고,
그 값을 변경해줄 수도 있다.
당장에 콘솔에서 document를 치면 html을 볼 수 있고
document.title를 치면 (document라는 object의
    title멤버) 페이지의 title을 확인 할 수 있고,
console.dir(document)를 치면 페이지의 상세한
정보들을 볼 수 있다.

수정도 가능함!
document.title="I am Iron man";
 */

// document.title = "WHat a js from js";

/* 3-1강
그럼 js에서 html을 이용해서 어떻게 원하는 정보를
가져올 수 있을까?
있다. 
js에서는 html의 element들을 볼 수 있지만
전체를 볼 수는 없다. html의 객체(object)들을 보여줄 뿐이다.
js에서 html의 elements들을 얼마든지 가져올 수 있고,
얼마든지 변경할 수 있다.
 */
// const title = document.getElementById("title");
// console.dir(title);
// title.innerText = "got you";
// title.className = "titleClass";

/* 3-2강
정작 위의 방법으로는 className이나 id를 가져오는 경우는 잘 없다.
아래처럼 가져오면 HTMLCollection에는 배열로 된 정보가 들어있는 것을
확인 할 수 있다. 여러개의 h1이 있으면 그것을 배열의 형태에 넣어서
모두 확인할 수 있다.
object형식이 아니기 때문에
element를 확인하는 정도로의 방법으로만 사용할 수 없고,
objectName.sth 처럼 무언갈 더 할 수 있지는 않다. */
// const title = document.getElementsByTagName("h1");
// console.log(title);

/* 니꼬쌤이 생각하는 가장 쿨한 element를 가져오는 방법은
querySelector나 querySelectorAll이다.
querySelector는 element를 css selector을 이용해서 검색할 수 있다.
이 말은 표면적으로는 .className처럼
css selector를 이용해서 '특정' 값을 확인할 수 있다는
것이고, 내부적으로는 
getElementsByTagName처럼 배열 형태로 다수의 h1을 모두
가지고 오는 것이 아니라 특정 className 있는 h1을 가지고 올 수 있다는
것을 의미한다.
아래에서 확인할 수 있듯이 querySelector은 단 하나의 element를
return해준다.
중복되는 elements가 있으면 가장 첫번째 것을 출력해준다.
querySelectorAll은 배열 형식으로 모든 중복된 elements를
가지고 와준다. 
즉, querySelector에서는 cssSelector을 이용한다고 볼 수 있다.*/
// const title = document.querySelector(".hello-two h1");
// console.log(title);
// const titleSecond = document.querySelectorAll(".hello-one h1");
// console.log(titleSecond);
// const titleThrid = document.querySelectorAll(".hello-three h1:first-child");
// console.log(titleThrid);

/* 이처럼 querySelector은 배열형식으로
elements들을 반환하지 않기 때문에 object.sth의 형식으로
값을 업데이트 할 수도 있다. */
// const title = document.querySelector(".hello-two .hello-two__third");
// title.innerText = "Hello in JS";

/* 3-3강
지난 강에서 배웠던 것을 이용해서 elements의 내부를
보고싶다면 console.dir을 마찬가지로 사용하면 된다.
그러면 object로 표시한 element들을 볼 수 있게 된다. */
// const title = document.querySelector("div.hello-two .hello-two__third");
// console.dir(title);

/* title의 object로 표시되는 여러가지들을
보다 보면 style이라는 object가 있는데 그 안의 color를
바꿔보자. object에 접근을 할때는 .을 사용한다는 것을
이용해보자! */
// const title = document.querySelector("div.hello-two .hello-two__third");
// title.style.color = "blue";

/* js에서 대부분 우리가 할 일은 event를 Listen하는
일이다.
이를 위해서는 HTMLelement를 js로 가져와야 한다.
그건 이때까지 배웠고 이제 그럼 어떻게 하면 듣게 할 수 있는지를 배워야 한다.
handleTitleClick()이라고 arguments를 적어주지 않은 이유는
바로 실행하지 말고 클릭했을 때, 실행되길 바라기 때문이다.
저렇게 ()을 적어주지 않으면 클릭이 되었을때 js가 실행시켜준다.
html elements를 불러와서 event listener을 추가해줌! */
// const title = document.querySelector("div.hello-two .hello-two__third");
// function handleTitleClick() {
//   console.log("title was clicked");
//   title.style.color = "blue";
// }
// function handleMouseleave() {
//   title.innerText = "Mouse out";
// }
// function handleMouseenter() {
//   title.innerText = "Mouse on";
// }
// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseleave", handleMouseleave);
// title.addEventListener("mouseenter", handleMouseenter);

/* 3-5강 */
/* 지난 시간에 addEventListener을 이용해서 window 상의
이벤트를 감지해보았다. 하지만 title.onClick을 이용해서
event를 탐지할 수도 있다! */
// const title = document.querySelector("div.hello-two .hello-two__third");
// function handleTitleClick() {
//   console.log("title was clicked");
//   title.style.color = "blue";
// }
// function handleMouseleave() {
//   title.innerText = "Mouse out";
// }
// function handleMouseenter() {
//   title.innerText = "Mouse on";
// }
// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseenter;
/* 니꼬쌤이 eventlistener을 더 좋아하는 이유는
나중에 .removeEventListener을 이용해
이벤트를 제거해줄 수도 있기
때문이다. */
// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy() {
//   alert("copy done!");
// }
// function handleWindowoffLine() {
//   alert("no wifi");
// }
// function handleWindowOnLine() {
//   alert("on wifi");
// }
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("online", handleWindowOnLine);

/* 3-6강 */
// const h1 = document.querySelector("div.hello-two .hello-two__third");

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else if (currentColor === "tomato") {
//     newColor = "white";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }
// h1.addEventListener("click", handleTitleClick);

/* 3-7강
이번에는 css에서 active라는 클래스를 적어두고,
js를 통해서 h1에 active class를 전달해보록
하자. */
// const h1 = document.querySelector("h1");
// function handleHOne() {
//   h1.className = "active";
// }
// h1.addEventListener("click", handleHOne);

/* h1.className은 getter, setter 두 개의 역할을 다 한다.
즉, className을 업데이트 할수도 있지만 얻어올 수도 있다.
함수에 console.log(h1.className);을 대신 입력하면
얻을 수 있기 때문이다.
이런 사실들과 if문을 이용해서 className이 없을때
active라고 정의해주고, 있을때는 없애주는 함수를 구현할 수 있다.
 */
// const h1 = document.querySelector("h1");
// function handleHOne() {
//   const clickedClass = "clicked sexy__font";
//   if (h1.className === clickedClass) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// }
// h1.addEventListener("click", handleHOne);

/* 
이번에는 css의 h1항목에
active일때 색을 다르게 해놓았으니
거기에 transition을 추가해보자.
하지만 위에 active라는 것을 두번 중복시켰다.
이런 것들이 나중에 가서는 다 에러의 소지가 된다.
고로 알아보기 쉽도록 clicked라는 명칭으로 바꿔주자!
더 좋은 방법은 함수 내에 상수를 설정해서 더욱 에러의
소지를 줄일 수 있다.
특히나 이렇게 함수 내 변수를 이용하면 오타가 났을때
js에서 알려주니까 더욱 안전하다!

한편, 만약 h1에 이미 다른 className이 있다면
위의 설정들 때문에 다 지워지게 된다. 이것도 어떻게 보면 에러임!
그럴 때는 그 class도 변수에 함께 추가시켜주면 된다.
하지만 이런 건 별로 좋은 방법은 아니다.
class를 하나씩 추가할때 마다 일일이 다 추가해주어야 하기 때문이다.
우리가 진짜 하고자 하는 것은 모든 className을 변경시키는 것이 아니다.
sexy__font라는 class를 살려두고 싶다는 것임.
*/

/* 3-8강 지난 강의에 이어서...
className을 완전히 변경시키는 방법 말고,
다른 방법은 classList를 사용하는 방법이 있다.
classList를 사용하면 class들의 목록으로
작업할 수 있게끔 해준다.
className은 모든 클래스들을 교체해준다면 이건 좀 다르다.
DOMTokenList를 참조!
classList를 이용해서 clicked를 포함하고 있는지만을
확인하려는 것이다.
 */
// const h1 = document.querySelector("h1");
// function handleHOne() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }
// h1.addEventListener("click", handleHOne);

/* 하지만 역시나 이 친구도 className을 교체하는
방법을 사용하고 있다.
DOMTokenList를 보면 remove와 add도 있다.
이를 이용하면 특정한 부분만 add하고 remove할 수 있다.
이처럼 우리를 편하게 해주는 function은 또 있다.
toggle
이름처럼 특정 className이 없으면 추가해주고,
있으면 삭제해준다. 즉, 우리가 위에 구현한
코드를 가지고 있는 함수이다.
이제 토글을 이용해서 조금 더 깔끔하게 코드를 만들어보자!
*/

// 1. 먼저 documen를 이용해서 h1의 element를 가지고 오고,
const h1 = document.querySelector("h1");

// 3. event의 반응을 할 함수를 만들어준다.
function handleHOneClick() {
  // 여러번 반복을 하지 않으니 함수 내에
  // const를 생성해주지 않아도 된다.
  const clickClass = "clicked";
  h1.classList.toggle(clickClass);
}

// 2. addEventListener을 이용해서 event를 감지할 수 있도록 한다.
h1.addEventListener("click", handleHOneClick);

/* 이제는 class name들로 HTMLelement에서 숨기고 표시하는
방법과 이를 이용해서 toggle을 사용할 수 있게 되었음! */
