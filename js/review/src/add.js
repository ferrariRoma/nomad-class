const loginForm = document.querySelector("#loginform");
const loginInput = document.querySelector("#logininput");
const loginGreet = document.querySelector("#logingreet");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function ctlSubmit(event) {
  event.preventDefault();
  const user = loginInput.value;
  loginForm.classList.add(HIDDEN);
  loginGreet.classList.remove(HIDDEN);
  localStorage.setItem(USERNAME_KEY, user);
  loginGreet.innerText = `Hello ${user}`;
}

function setGreeting(user) {
  loginGreet.classList.remove(HIDDEN);
  loginGreet.innerText = `Hello ${user}`;
}

/* From input in ctlSubmit
const user = loginInput.value; */
// From localStorage
const username = localStorage.getItem(USERNAME_KEY);

if (localStorage.getItem(USERNAME_KEY) === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", ctlSubmit);
} else {
  setGreeting(username);
}
