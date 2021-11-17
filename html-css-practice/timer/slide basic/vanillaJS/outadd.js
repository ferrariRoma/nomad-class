const slideList = document.querySelector(".slide__list");
const slideContents = document.querySelectorAll(".slide__content");
const slideBtnNext = document.querySelector(".slide__btn__next");
const slideBtnPrev = document.querySelector(".slide__btn__prev");
const pagination = document.querySelector(".slide__pagination");
const slideLen = slideContents.length;
const slideWidth = 400;
const slideSpeed = 300;
const startNum = 0;

slideList.style.width = slideWidth * (slideLen + 2) + "px";
// 앞뒤로 추가할 노드 두개까지 포함해서 slideLen+'2'

// copy first and last slide
let firstChild = slideList.firstElementChild; // 주소값을 할당
let lastChild = slideList.lastElementChild; // 주소값을 할당
let clonedFirst = firstChild.cloneNode(true); // 노드 자체를 복사
let clonedLast = lastChild.cloneNode(true); // 노드 자체를 복사

// Add copied slides
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);

// 최초위치 설정. 5 1 2 3 4 5 1에서 최초 위치를 1로 맞춰줌.
slideList.style.transform =
  "translate3d(-" + slideWidth * (startNum + 1) + "px, 0px, 0px)";

let curIndex = startNum;
let curSlide = slideContents[curIndex];
curSlide.classList.add("slide__active");

// Next button Event
slideBtnNext.addEventListener("click", function () {
  if (curIndex <= slideLen - 1) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform =
      "translate3d(-" + slideWidth * (curIndex + 2) + "px, 0px, 0px)";
  }
  if (curIndex === slideLen - 1) {
    // slideLen=5 => curIndex = 4.. 5번째 div 일때!
    setTimeout(
      function () {
        slideList.style.transition = "0ms";
        // duration 0으로!
        slideList.style.transform =
          "translate3d(-" + slideWidth + "px, 0px, 0px)";
        // 0초간 어떤 움직임을 가져갈지!
      },
      slideSpeed
      // 딜레이 0.3ms
    );
    curIndex = -1;
  }
});
