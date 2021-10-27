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

dDay();
setInterval(dDay, 1000);
