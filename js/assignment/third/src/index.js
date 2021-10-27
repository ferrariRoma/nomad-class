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
  const randNum = Math.floor(Math.random() * parseInt(questionNum.value, 10));
  const value = parseInt(answer.value, 10);
  pcAnswer.innerHTML = randNum;
  cpyAnswer.innerHTML = value;
  /* if (randNum === value) {
    result.innerHTML = "You won!!";
    result.classList.add("animation");
  } else {
    result.innerHTML = "You lost...";
  } */
  result.innerHTML = `You chose: ${value} <br />
  machine chose: ${randNum} <br />
  <strong> ${value === randNum ? "You won!" : "You lost"} </strong>
  `;
}

/* 결과를 표시하는 것에서
  resultSpan.innerHTML = `
  You chose: ${userGuess},
  the machine chose: ${random}.<br />
  <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
  `;

  이렇게 해줌! 그냥 innerHTML이기 때문에
  <br />이랑 
  <strong> 을 사용해도
  출력이 되지 않음. 이래서 innerText 말고
  innerHTML을 사용하는구나!
  나는 사용은 해도 제대로된 사용이 아니었군..

  userGuess === random ? "You won!" : "You lost!"
  이 부분은 C 공부할 때 지나갔던 건데, 여기서 다시 보는구나!

  전체적으로 보면 나는 아래의 form.addEventListener을
  여러차례 했지만 니꼬쌤은 함수 하나로 끝내서 그걸 바탕으로
  한 번의 리스너 호출만으로 끝냈다.
*/

function hidden() {
  resultForm.classList.remove("hidden");
}

form.addEventListener("submit", noMinus);
form.addEventListener("submit", handleSubmit);
form.addEventListener("submit", hidden);
