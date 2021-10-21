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
