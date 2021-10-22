const superEventHandler = {
  mouseTurnOn: function () {
    h1.innerText = "mouse on";
    h1.style.color = "red";
  },
  mouseTurnOff: function () {
    h1.innerText = "mouse off";
    h1.style.color = "green";
  },
  windowModify: function () {
    h1.style.color = "blue";
    h1.innerText = "You resized";
  },
  clickRight: function () {
    h1.style.color = "tomato";
    h1.innerText = "click right button";
  },
};

const h1 = document.querySelector("h1");
h1.addEventListener("mouseenter", superEventHandler.mouseTurnOn);
h1.addEventListener("mouseleave", superEventHandler.mouseTurnOff);
window.addEventListener("contextmenu", superEventHandler.clickRight);
window.addEventListener("resize", superEventHandler.windowModify);

/* 이 과제에서 중요한 점은 3가지의 과정을 통한다는 것임.
document.querySelector을 이용해서 h1의 elements를
가지고 와서 h1에 이벤트 리스너를 붙여주고,
두번째 argument로 들어가는 것을 설계해준다.
조건 중에 하나의 객체 안에 함수를 모두 넣으라고 하였기 때문에
각 이벤트들에 반응하는 함수를 객체 멤버들로 만들고
그 객체를 2번째 argument로 지정해준다. */
