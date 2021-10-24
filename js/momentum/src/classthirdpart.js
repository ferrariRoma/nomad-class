/* 4-0강 */
// const loginForm = document.getElementsByClassName("form");

/* loginform을 이용해서 div 안에 있는 Input과 button을 확인해보자!
document를 이용할 수도 있다. */
// const loginInput = document.querySelector(".form input");
// const loginInput = document.querySelector(".form button");

/* 어떻게 input 안에 있는 친구를 찾아볼 수 있을까?
잘 모르겠으면 console.dir을 이용해보자! */
/* input을 보면 빈칸으로 입력 버튼을 눌러도
아래처럼 hello를 추가해놓으면 value값이
지정된다. 빈칸일때는 입력을 받지 않으려면 어떻게 해야할까?

여기서 가장 좋은 방법은 html에 있는 내장 요소들을 활용하는 것이다.
maxlength나 required 등 html에서 활용할 수 있는 요소들을
먼저 활용하는 것이 현명한 방법이다.
*/
// function handleClick() {
//   console.log("hello", loginInput.value);
//   console.log("click");
// }

// loginBtn.addEventListener("click", handleClick);

const loginForm = document.querySelector(".form");

const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
/* 4-1강
html에서 하는 것이 가장 좋긴 하지만 js에서도 유효성
검사를 할 수 있다.
.length라는 것을 통해서 길이를 확인 할 수 있다.
+ input의 유효성 검사를 위해서는
form 안에 들어있어야 한다.

이를 이용해서 아래와 같은 방법으로 input이 빈 칸일때를 감지할 수 있다. */
function handleClick() {
  const value = loginInput.value;
  if (value === "") {
    alert("Please answer your name!");
  } else if (value.length > 15) {
    alert("Your name is too long! Please write it down in 15 letters");
  }
}

loginBtn.addEventListener("click", handleClick);

/* 하지만 버튼을 누르면 form 전체가 새로고침 된다.
이는,
<input type="button" value="log in" />으로 해도 똑같다.
어떻게 하면 이렇게 새로고침 되는 걸 막을 수 있을까? */

/* 4-2강
이제 우리는 버튼은 됐고, login-form 그 자체에 집중을
해보자.
submit이라는 이벤트가 발생하는 걸 아예 막거나
중간에 개입해서 submit event가 발생했다는
걸 파악하고 싶기 때문이다.
자 그럼 form에 대해서도 변수를 지정해서
element를 가져와보자

실험을 해보니, input에 입력된 것이 순식간에 console창에
출력이 되고 새로고침으로 인해 지워지는 것을 볼 수 있다.
form이 submit을 누르면 그렇게 되도록 디폴트 값이 
설정되어 있기 때문이다.
*/
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function handleSubmit(event) {
  event.preventDefault();
  // const user = loginInput.value;
  console.log(event);
}

loginForm.addEventListener("submit", handleSubmit);
/* addEventListener를 이용해서 함수를 호출할 때는
사실 handleSubmit(여기에) 정보를 가진채로 호출을 한다.
이는 매우매우 중요한 요소이다.
이를 확인하는 방법은 뭐라도 (여기에) 넣어서
여기에.preventDefault(); 를 해보면 된다.

이는 function이 하나의 argument를 받도록 하고
그걸 js로 넘겨주는 것이다.
그것은 발생한 일에 대해 내가 필요로 할만한 정보를 주는 것이다.

그리고 addEventListener의 첫번째 파라미터
(여기서 argument라고 하는 것)는 지금 막 벌어진 일들에
대한 정보이다. 고로 지금 막 벌어진 일은 submit이고,
handleSubmit(여기에) 그 막 벌어진 일에 대한
정보를 가진채로 함수를 호출하는 것이다.
그리고 그것을 .preventDefault()과
console.log(tomato)를 통해서 확인해 보면 우린 정보를
얻을 수 있다.

여기서 .preventDefault();의 기능은
브라우저가 어떤 event의 기본 동작을
실행하지 못하게 막는 역할이다.
여기에 해당하는 부분은 보통 event로 적어주는게
관례이다. 아무거나 적어도 되지만 말이다.

조금 더 설명을 하자면 .preventDefault();는
event object 안에 있는 기본 함수이다.  */

/* 4-3강
이번에는 링크를 가지고 지난 시간에 했던
preventDefault와 관련된 내용들을 가지고 놀아보도록
하자! 링크에 default action을 막아보자. */
const link = document.querySelector("a");

function handleLink(event) {
  event.preventDefault();
  console.log(event);
  console.dir(event);
}
link.addEventListener("click", handleLink);
/* alert를 설정해두어도 디폴트 값 때문에 창을 닫으면
페이지 링크로 이동한다.
다시 그럼 event를 이용해서 내부를 살펴보도록 하자.
내부에는 아까 input을 살폈을때와는 다른 정보가 있는 것을
알 수 있다. 당연함! 왜냐면 이건 anchor와 관련된
event info이니까!
즉 그냥 다른 예를 드는 거니까 지난 내용을 이해했음 땡~ */

/* 4-4강 
클릭했을때 form 자체가 사라져야 됨.
아예 없어져야 된다.
이걸 구현하려면 html 요소 자체를 없애는 것,
그리고 다른 방법은 css를 이용해서 숨기는 것이다.
visibility: hidden
코코아톡 마지막에 splash화면 숨기는 것 때문에 배웠었지?
아 그거랑은 다르게 이번에는 
display: none
을 사용하는구나.
이걸 이용해서 login버튼을 누르면 
form화면이 사라지도록 만들어보자.
visibility:hidden은 공간은 그대로 두고 보이지만 않는건데
display:none은 잡아둔 공간도 사라진다고 하더라고요!


이렇게 하니까 input에 적었던 것은
변수 user에 저장이 되고,
form 화면만 사라졌다.

여기에 다른 html요소를 추가해보자.
원하는 모양이, form에는 hidden클래스를
추가하고,
h1이나 태그들을 통해서 제목이나
내용들을 적어둔 것은 hidden클래스를
처음부터 할당했다가 해제하는 방식으로
form화면과 main내용을 교체하려고 함.

유저의 이름을 변수로 저장해서,
그 이름을 h1에 넣어보자!

참고로 중간에 변수 이름이 대문자인데,
이런 부분은 관습적인 부분이다.
string만 포함된 변수는 대문자로 표기함.
특히나 중요한 정보가 아닐때는 더욱 더!

string을 합치는 방법 중에서는 +가 별로긴 하다.
그래서 다른 방법을 알아보자!
greeting.innerText = `Hello ${user}`;
''이게 아니라 fn + (영어키 놓고)esc를 이용한 ``을 사용!
 */

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function handleSubmit(event) {
  const user = loginInput.value;
  event.preventDefault();
  console.log(user);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting.innerText = "Hello " + user;
  greeting.innerText = `Hello ${user}`;
}

loginForm.addEventListener("submit", handleSubmit);
