const clockTitle = document.querySelector(".js-clock");
const christmas = new Date("2021-12-25T00:00:00");

function dDay() {
  const currentTime = new Date();
  const counter = christmas - currentTime;
  const day = Math.ceil(counter / (1000 * 60 * 60 * 24));
  const hours = Math.ceil((counter / (1000 * 60 * 60)) % 24);
  const minutes = Math.ceil((counter / (1000 * 60)) % 60);
  const seconds = Math.ceil((counter / 1000) % 60);
  clockTitle.innerHTML = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

/* 니꼬쌤은 getFullYear을 이용해서 크리스마스 날짜를
얻었음. 내가 찾은 방법으로도 동일한 값을 얻을 수 있지만,
니꼬쌤이 저렇게 사용한 것은 다 이유가 있을 것이니,
저 방법 역시 익혀두도록 하자.  

const christmas = new Date("2021-12-25T00:00:00");
console.log(christmas);
const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
console.log(xmasDay);

위와 같이 얻은 값을 통해서 오늘 날짜를 구하고
그 차이를 구하는데, 차이를 구할때도 new Date를 이용했다는
점에서 차이가 있다.

const counter = christmas - currentTime;
console.log(counter);
const test = new Date(christmas - currentTime);
console.log(test);

내가 한 방법으로 하면 바로 밀리세컨드가 값으로 나오지만
니꼬가 한 방법대로 하면 날짜를 반환해준다.

이후 내가 한 방법대로 

const day = Math.ceil(counter / (1000 * 60 * 60 * 24));

이렇게 여러번 나눠주기 보다는

  const secondsInMs = Math.floor(difference / 1000);  // ms -> s
  const minutesInMs = Math.floor(secondsInMs / 60);  // s -> m
  const hoursInMs = Math.floor(minutesInMs / 60);  // m -> h
  const days = Math.floor(hoursInMs / 24);  // h -> d
  const seconds = secondsInMs % 60;  // ms -> current s
  const minutes = minutesInMs % 60;  // m -> current m
  const hours = hoursInMs % 24;  // h -> current h

  이처럼 단계별로 변수를 설정하고 계산을 진행했다는
  점이 다르다.

*/

dDay();
setInterval(dDay, 1000);
