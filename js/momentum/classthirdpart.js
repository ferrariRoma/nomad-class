/* 4-0강 */
const loginForm = document.querySelector(".form");
// const loginForm = document.getElementsByClassName("form");

/* loginform을 이용해서 div 안에 있는 Input과 button을 확인해보자!
document를 이용할 수도 있다. */
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
// const loginInput = document.querySelector(".form input");
// const loginInput = document.querySelector(".form button");

/* 어떻게 input 안에 있는 친구를 찾아볼 수 있을까?
잘 모르겠으면 console.dir을 이용해보자! */
/* input을 보면 빈칸으로 입력 버튼을 눌러도
아래처럼 hello를 추가해놓으면 value값이
지정된다. 빈칸일때는 입력을 받지 않으려면 어떻게 해야할까? */
// function handleClick() {
//   console.log("hello", loginInput.value);
//   console.log("click");
// }

// loginBtn.addEventListener("click", handleClick);
