const loginForm = document.querySelector(".form");

const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");

/* 4-1강
.length라는 것을 통해서 길이를 확인 할 수 있다.
추가적으로 input의 유효성 검사를 위해서는
form 안에 들어있어야 한다. */
function handleClick() {
  const value = loginInput.value;
  if (value === "") {
    alert("Please answer your name!");
  } else if (value.length > 15) {
    alert("Your name is too long! Please write it down in 15 letters");
  }
}

loginBtn.addEventListener("click", handleClick);
