/* 4-5강
이번에는 value를 저장해보자!
매번 사용자에게 이름을 묻는 건 별로다!
어떻게 하면 좋을까? API를 사용해보자!
그 API의 이름은 local storage이다.
console에 localStorage를 검색해보면,
이미 존재한다는 것을 알 수 있다.
그 중 setItem을 이용하면 local storage에
정보를 저장할 수 있다.
localStorage.setItem("아이템 이름",값(변수));
당연히 불러올 수도 있는데,
getItem을 사용하면 된다.
removeItem을 이용하면 삭제도 된다~

이제 당면한 과제는
유저명은 저장이 되는데 새로고침을 할때마다 form이 계속 출력된다.
이걸 어떻게 하면 해결할 수 있을지 다음 시간에 이어서 배워보자!
 */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function handleSubmit(event) {
  event.preventDefault();
  const user = loginInput.value;
  console.log(user);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem("user", user);
  greeting.innerText = `Hello ${user}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleSubmit);
