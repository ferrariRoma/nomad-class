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
