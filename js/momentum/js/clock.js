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
