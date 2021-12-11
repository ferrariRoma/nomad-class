/* 5-0강 
intervals와 timeout에 대해 먼저 얘기를 해보자.
interval은 매번 일어나야 하는 무언가

2초마다 hello를 출력해보도록 하자.
setInterval
위 함수는 두개의 arguments를 받는데,
첫번째는 내가 실행하고자 하는 function이고,
두번째는 function 간격을 몇 ms로 할지 쓰면 된다.
C에서도 clock이 ms단위로 됐는데 여기서도 그렇구나.

setInterval(sayHello, 5000);
setTimeout(sayHello, 5000);

*/

/* 5-1강
두번째인 timeout에 대해서 보자.
timeout은 몇 초 뒤에 첫 실행을 해줄지를 정할 수 있다.
setInterval이랑 비슷함.
setTimeout()
동작은 완전히 다르다.
첫번째는 작동하고자 하는 함수, 그리고 두번째는
얼마나 '기다렸다가' 실행시켜줄 것인지를 정한다.

setInterval(sayHello, 5000);
setTimeout(sayHello, 5000);

자, 그럼 시계를 만들어 주기 위해서 js에 있는
Date object라는 tool을 사용할 것이다.
이는 이미 내장되어 있어서 data를 콘솔에 딱 치면
정의가 나온다.

new Data()
라고 치면 현재 시간이 나온다.
const date = new Date()
date.getDay()
date.getDate()
date.getFullYear()
date.getHours()
date.getMinutes()
date.getSeconds()

지금까지 배운 걸 생각을 해보자.
setInterval, setTimeout, new Date()
뭘 쓰면 좋을까? 우린 반복해서 시간을 불러와야 한다.
고로 첫번째를 사용하면 딱 알맞을 것이다.

만들고 나니 멋지지만 부족해보이는 점이 있다.
초가 1자리수 일때 01,02처럼 보이게 할 수는 없을까?

다른 문제 하나는 시간을 바로 보여주지 않는다.
1초를 기다려야 하거든!
그럼 화면이 load되자마자 getClock을 실행하도록,
그리고 또 매초마다 다시 실행되도록 해보자.

getClock();
setInterval(getClock, 1000);

setInterval 전에 getClock을
따로 한 번 '즉시' 호출하는 것이다.
 */
const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  //   아래와 같은 방법으로 시간을 불러와주자!
  //   지난 시간에 배웠던 백틱기호를 이용해서 00:00의 모양을
  // 만들어주는 것이다!
  //   console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);

/* 5-2강 
자 이제 string을 문자 두 개로 채워보자.
01, 02, 03 이런거
이런 부분은 이미 함수로 만들어져 있다!
(난 if else 사용해야 하는 줄)
고거슨 padStart

"1".padStart(2,"0");

2자리수로 만들어 주세요.
대신 앞쪽에 빈 칸엔 0을 채워주세요!
하는 거임.
반대로는
padEnd
"1".padEnd(2,"0");
이렇게 하면 10이 출력이 된다.

이렇게 하기 위해서는
우리가 clock.innerText에 작성했던 것을
바꿔줘야 한다.

그럼 이걸 어떻게 적용시켜 줄 수 있을까?

const hours = date.getHours().padStart(~~);

하지만 위처럼 사용하면 padStart를
쓸 수 없다.
사용하려면 text여야 하는데,
Date() 종류는 모두 숫자이다.

예전에 text를 number로 변환하기 위해
parseInt를 사용했었는데,
반대로 number을 text로 하려면
C에서 형변화처럼
String(~~~)을 해주면 된다.


 */

const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

/* 5-3강
5단원의 recap이다!
이번에는 Date object를 호출해서 현재
날짜랑 시간을 알아보았다.
이 Date object는
number 타입을 return해주는데
padStart는 string을 취급하기 때문에
Date object를 string으로
바꿔줘야 한다.
이를 위해서 String()으로 감싸줘서
형변환을 시킴.

이렇게 만든 것을 어떻게 사용을 했지?
setInterval을 통해서 매 초마다 시간 표시 함수를 호출했음.
같이 배운 setTimeout은 딜레이를 설정하는 함수였다.

하지만
setInterval(함수, 몇 초)
라고 설정해주면 처음엔
'몇 초'가 지날때까지 화면에 출력이 안된다.
그래서 처음부터 표시가 될 수 있도록,
시간 표시 함수를 하나 기술한다.
그럼 처음엔 시간 표시 함수가 최초시간을
띄워주고,
그 다음부터는 setInterval을 통해서
시간이 '몇 초'마다 설정이 된다.
 */
const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

/* 6-0강
명언 10개를 배열형식으로
나열하고 시작하자!
각각의 object들은 string으로
된 명언을 가지고 있음.
이번에는 랜덤배경화면이랑 랜덤명언을 구현해보자!

이 quotes는 list에 object형태로
각 항목들이 있다.
총 명언은 21개. 즉 0~20까지
 */

const quotes = [
  {
    quote: "Devide & Conquer",
  },
  {
    quote: "HARD WORK WORKS",
    author: "Denzel Washington",
  },
  {
    quote: "Life is a series of building, testing, chaging and iterating",
    author: "Lauren Mosenthal",
  },
  {
    quote: "위대하게 사는게 아니라, 살아내는게 위대한 것이다.",
    author: "포스코 석좌교수 이재영",
  },
  {
    quote:
      "모든 것이 어렵지 않다고 생각하면, 어려울 건 하나도 없다. 이 정신만 가지고 살아간다면 실패하더라도 끝내 목표에 도달할 것이다.",
    author: "기업가 사이토 히토리",
  },
  {
    quote: "스스로에게 엄격하지 못한 자는 작은 일도 해낼 수 없다.",
    author: "코린이 안동규",
  },
  {
    quote: "언제 시작했냐는 중요하지 않다. 얼마나 열심히 하느냐가 중요하다.",
    author: "코딩의 신 아샬",
  },
  {
    quote:
      "언어는 하나도 중요하지 않다. 컴퓨터를 올바르게 이해하는 것이 정말 중요하다.",
    author: "코딩의 신 아샬",
  },
  {
    quote:
      "무슨 언어를 배워야 하냐고? 평생을 바쳐서 기를 쓰고 모든 언어를 다 해야 한다.",
    author: "코딩의 신 아샬",
  },
  {
    quote: "자료구조와 알고리즘은 학부 2학년 과정이다.",
    author: "코딩의 신 아샬",
  },
  {
    quote:
      "이것도 공부해야 하냐고? 그거 다 하고 그 이상도 해야 한다. 남들이 안하는 것까지도.",
    author: "코딩의 신 아샬",
  },
  {
    quote: "꿈은 있는데 실천을 안하는 것 만큼 불행한 인생은 없다.",
    author: "수학 선생님 정승재",
  },
  {
    quote:
      "오늘 안하면 내일도 안합니다. 그러니까 잠을 줄여가면서 무조건 오늘 끝내세요.",
    author: "수학 선생님 정승재",
  },
  {
    quote:
      "내일 좋은 컨디션으로 공부하는 것이 효율이 좋을거라는 속삭임과 타협하는 순간 매일 타협해야 한다.",
    author: "수학 선생님 정승재",
  },
  {
    quote: "이 세상 모든 사람들은 다 사연이 있다.",
    author: "수학 선생님 정승재",
  },
  {
    quote:
      "어떤 작품은 잘되기도 하고 잘 안되기도 하지만 실망하지말고, 지치지말고, 자책하지 않고 계속하다 보면 생각지도 못한 위로와 보상이 찾아오게 될 것이다.",
    author: "백술예술대상 오정세",
  },
  {
    quote:
      "삶이란 선택하기 따라 달려있다. 남탓 하지마라. 내가 공부하고 일할 의지가 있으면 모든지 이룰 수 있다.",
    author: "감독 루 홀츠(Lou Holtz)",
  },
  {
    quote:
      "지금 최선을 다해야 하고, 지금 열심히 해야 한다. 이 기회가 아깝지도 않나?",
    author: "한국축구 레전드 안정환",
  },
  {
    quote:
      "작은 일에 실망하고 좌절하면 평생 그렇게 살아야 한다. 자신감은 다른 사람이 심어주는 것도 있지만, 본인이 자신감을 찾으면 된다. 누구도 날 도와주지 않는다.",
    author: "한국축구 레전드 안정환",
  },
  {
    quote:
      "'나는 노력했다'고 망상하지 마라. 운동장에서는 거짓말이 없다. 자신을 속이지 말고 자신에게 부끄러운 사람이 되지마라.",
    author: "한국축구 레전드 안정환",
  },
  {
    quote: "젊음의 매 순간이 기회임을 '젊음'은 종종 잊는다.",
  },
];

/*일단 각각의 span element를 불러오자 */
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

/* 이제 randomness에 대해 알아보자.
일반 먼저 위의 명언 모음 배열에 접근을 해보자.
여기서 [여기에] 숫자를 랜덤으로 주는 function이 필요하다.
매우 간단한데, 이걸 위해서 Math module을 사용할 것이다.
이것 역시 js에 이미 있다.
Math.pi()
등의 Math 안의 object를 사용할 수 있다.
그 중 하나는 random()이다.

Math.random()

은 0~1 사이의 수를 제공해준다.
하지만 우리는0부터 20까지가 필요하다. 
어떻게 얻을 수 있을까? *21을 해주면 된다.

Math.random() * 21

해보면 알겠지만 정수부분 뒤에 소수부분도
그대로 출력이 된다.
이걸 없애기 위해서는 3가지의 function을
사용할 수 있다.

Math.round(1.45)

이건 반올림을 해줘서 정수부분만 남겨준다.

Math.ceil(1,4)

이건 숫자를 천장까지 높여주는 것이다.
즉 올림.

Math.floor(1.3)

이건 내림이다.

이번에는 float를 사용해보자.
*/
// const rand = Math.floor(Math.random() * quotes.length);
// console.log(quotes[rand]);

/* 여기까지는 우리가 명언을 더 이상 추가하지 않는다는 전제하에
작동이 잘 될 것이다.
추가해도 잘 작동하려면?
배열의 길이를 즉석에서 구해서 그걸 *21 처럼 곱해주면 되지!

array.length

이제 화면에 출력 해보자!
*/

const randQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randQuote.quote;
author.innerText = randQuote.author;

/* 6-1강
이제는 배경 이미지를 만들거임!
랜덤으로 말이얌~
전체적인 컨셉은 quote와 같다.
랜덤으로 이미지를 고르고 
배경화면으로 출력을 하는 것이니까 */

const images = [
  "sky.jpg",
  "winter.jpg",
  "dream.jpg",
  "bottle.jpg",
  "autumn.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

/* 이 과정은 조금 다르다. 
이전까지는 html에서 무언가를 가지고 오는 작업이었다면,
이것은 html에 추가하는 작업이다.
예를 들어서 html에
<img src="img/sky.jpg"></img>
처럼 만들어주는 것을 해보자.
즉, img 태그를 생성해주고 거기에 src를 추가해주자.

태그를 생성해주기 위해서는 

document.createElement

를 사용해준다.

const bgImage = document.createElement("img");
console.log(bgImage);

이렇게 해보면 img태그가 생성된 것은 확인할 수 있지만
우클릭해서 패널확인을 해보면 찾을 수 없다고 나온다.
볼 수는 없는데 있긴 있다.

그럼 
bgImage.src
를 통해서 src도 추가해줄 수 있다는 것이다.
추가해줄 때는 이것 역시 문자열을 추가하는 것이기 때문에
백틱기호를 통해서 추가해주자.

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

이렇게 하고 
console.log(bgImage);
를 해보면 src까지 추가된 완전한 img태그를
확인할 수 있다.
이렇게 하면 js에서 html로 
보낼 새로운 태그를 다  만들었다.

하지만 아직 만들기만 해서
이렇게 하고 새로고침을 해봤자 배경화면에 안보인다.
아직 document에 존재하지 않고 js에만 존재하기 때문이다.

참고로 body, head, title은 document에서 바로 접근이
가능하다.

document.body.appendChild(bgImage);

이것을 통해서 
 */

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

/* 6-2강 복습!
우리가 한 것은 배열에서 랜덤으로 하나를 골라내는 것이었다.
보통 랜덤으로 하면 0~1의 수가 나오는데
그래서 우리가 배열의 길이를 구해서 그걸 곱해줌으로써
해결해줬다.
그리고 소수점을 제거해주기 위해서
우리는 floor을 사용해줬다.
배경화면에서는
document.createElement를 해서
html에 추가해줄 태그를 만들었다.
그리고 .src를 이용해서 소스를 추가해주고
appendChild를 이용해서 html에 추가해줬다.

추가적으로
prepend를 하면 html 가장 앞줄에 추가해준다.
 */
