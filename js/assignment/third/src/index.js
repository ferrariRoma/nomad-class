const questionNum = document.querySelector("#questionNum");
const form = document.querySelector("#questionForm");
const pcAnswer = document.querySelector("#pcAnswer");
const answer = document.querySelector("#answer");
const cpyAnswer = document.querySelector("#cpyAnswer");
const resultForm = document.querySelector("#resultForm");
const result = document.querySelector("#result");

function noMinus() {
  if (questionNum.value < 0) {
    alert("0 이상의 정수를 입력해주세요!");
    return window.location.reload();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const randNum = Math.floor(Math.random() * parseInt(questionNum.value));
  const value = parseInt(answer.value);
  pcAnswer.innerHTML = randNum;
  cpyAnswer.innerHTML = value;
  if (randNum === value) {
    result.innerHTML = "You won!!";
    result.classList.add("animation");
  } else {
    result.innerHTML = "You lost...";
  }
}

function hidden() {
  resultForm.classList.remove("hidden");
}

form.addEventListener("submit", noMinus);
form.addEventListener("submit", handleSubmit);
form.addEventListener("submit", hidden);
