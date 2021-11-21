// const startBtn = document.querySelector(".btn-start");
// const stopBtn = document.querySelector(".btn-stop");
// const recordBtn = document.querySelector(".btn-record");
// const initBtn = document.querySelector(".btn-init");
// const timerClock = document.querySelector(".timer-form__clock");

// let TIME = 0;
// let CRON;

// function clockUpdate() {
//   const hours = Math.floor(TIME / 3600); // 1hour = 3600s
//   const minutesInMs = Math.floor(TIME / 60); // minutes =
//   const minutes = minutesInMs % 60;
//   const seconds = TIME % 60;
//   timerClock.innerText = `${hours < 10 ? `0${hours}` : hours}:
//     ${minutes < 10 ? `0${minutes}` : minutes}:
//     ${seconds < 10 ? `0${seconds}` : seconds}`;
//   TIME++;
//   console.log(TIME);
// }

// function handleStart() {
//   clockUpdate();
//   clearInterval(CRON);
//   CRON = setInterval(clockUpdate, 1000);
//   startBtn.classList.add("hidden");
//   stopBtn.classList.remove("hidden");
// }

// // submit를 하려면 form을 대상으로 해야함.
// startBtn.addEventListener("click", handleStart);

// function clockReset() {
//   clearInterval(CRON);
// }

// function handleInit() {
//   timerClock.innerText = "00:00:00";
//   clockReset();
//   return (TIME = 0);
// }

// initBtn.addEventListener("click", handleInit);

// function handleStop() {
//   clearInterval(CRON);
//   startBtn.classList.remove("hidden");
//   stopBtn.classList.add("hidden");
// }

// stopBtn.addEventListener("click", handleStop);
