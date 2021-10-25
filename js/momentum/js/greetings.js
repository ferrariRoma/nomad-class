const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleSubmit(event) {
  event.preventDefault();
  const user = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, user);
  greeting.innerText = `Hello ${user}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(user);
}

function paintGreetings(user) {
  greeting.innerText = `Hello ${user}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleSubmit);
} else {
  paintGreetings(savedUsername);
}
