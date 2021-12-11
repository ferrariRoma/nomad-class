/* 8-0강
마지막으로 날씨를 불러올 건데,
이것을 위해
위치를 불러오는 함수를 사용해볼 것이다.
고거슨
navigator.geolocation.getCurrentPosition();
이다.
여기에는 argument가 2개 들어감.
하나는 잘 됐을때,
다른 하나는 잘 안됐을때이다.

성공을 하면 js는 우리의 위치를 반환해준다!

function onGeoDone(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live it ", lat, lng);
}
자. 위와 같이 좌표를 구하는 함수를 만들었으니,
이제는 이 숫자들을 장소로 바꿔줄 서비스를 사용해야 한다.

*/
function onGeoDone(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live it ", lat, lng);
}

function onGeoError() {
  alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoDone, onGeoError);

/* 8-1강
이번에는 지난 시간에 얻은 좌표로
API를 이용해서 해당 좌표의
날씨를 알아볼 수 있도록 하자.
확인해보자.

아래는 API 코드를 url창에 붙여넣어서
lat과 lon, 그리고 api key를
붙여넣은 것이다.
http://api.openweathermap.org/data/2.5/weather?lat=35.8334771&lon=128.7298668&appid=9ffd1581a6aa8e045e626ae0cbf35da2
그럼 js에서 어떻게 저 url을 부를 수 있을까?

fetch라는 함수가 있다.
이는 url을 부를 수 있다.

inspect 네트워크로 가보면
fetch가 작동됨을 확인할 수 있다.

이 결과를 사용해서 조금 더 해보도록 할까?
1. 내가 사는 곳
2. 날씨
더 원한다면 기온 습도까지
불러올 수 있다.

그와중에 온도는 화씨를 사용하고 있는데,
url에 &units=metric을 붙여주면
섭씨로 값을 얻을 수 있다.

fetch는 서버가 응답하는데 시간이 걸린다.
그래서 뒤에 .then()을 붙여줘야 한다.

이제 fetch로 얻은 정보를 이용해서
js에게 추가적인 명령을 해주자!
이와 관련된 것들은 wetube를 들으면 알 수 있음!ㅎㅅㅎ

하지만 일단 추출을 해주는 과정 같음.

fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name, data.weather[0].main);
    });

json으로부터 자료를 받아사용하는 느낌ㅇㅇ

콘솔에 정상적으로 표시가 되는 것을 확인했으니,
이제 const를 이용해서
변수로 만들자.

 */
const API_KEY = "9ffd1581a6aa8e045e626ae0cbf35da2";

function onGeoDone(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main}`;
      city.innerText = `${data.name} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoDone, onGeoError);
