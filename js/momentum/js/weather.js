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
