// import ".style.css";
/* css import는 이런 식으로 하면 된다. */

const page = document.querySelector("body");
/* 나랑 다른 점. 
초반에 
const body = document.body; 를 사용함.
이는 body, head, title은 querySelector을 이용하지
않고도 document에서 바로 접근을 할 수 있다.
기억하자.
body, title, head

또 배운 부분은 아닌데, css를 js에 import를 시켜서
const상수들에 css className들을 지정해주었다.

또 배운 부분에서 피드백을 할게 하나 더 있는데,
함수 내에 window.innerWidth라는 부분이 반복적으로
사용되는데, 이런 부분은 const width = window.innerWidth;
로 간단한 변수로 지정해두어서 에러의 소지를 줄였다.
*/

function handler() {
  if (window.innerWidth > 1300 && window.innerWidth <= 1500) {
    page.classList.add("width-first");
    page.classList.remove("width-third", "width-second");
  } else if (window.innerWidth > 1100 && window.innerWidth <= 1300) {
    page.classList.add("width-second");
    page.classList.remove("width-first", "width-third");
  } else if (window.innerWidth > 900 && window.innerWidth <= 1100) {
    page.classList.add("width-first");
    page.classList.remove("width-third", "width-second");
  } else if (window.innerWidth > 700 && window.innerWidth <= 900) {
    page.classList.add("width-second");
    page.classList.remove("width-first", "width-third");
  } else if (window.innerWidth > 500 && window.innerWidth <= 700) {
    page.classList.add("width-second");
    page.classList.remove("width-first", "width-third");
  } else {
    page.classList.add("width-third");
    page.classList.remove("width-second", "width-first");
  }
}

window.addEventListener("resize", handler);
