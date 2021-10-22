const page = document.querySelector("body");

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
