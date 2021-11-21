const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const recordBtn = document.querySelector(".btn-record");
const initBtn = document.querySelector(".btn-init");
const timerClock = document.querySelector(".timer-form__clock");

let TIME = 0;
let TIME_PLUS;

const HIDDEN = "hidden";

let timePot = [];

function updateTime() {
  timerClock.innerText = getTime(TIME);
  TIME++;
}

function handleStart() {
  TIME_PLUS = setInterval(updateTime, 1000);
  stopBtn.classList.remove(HIDDEN);
  startBtn.classList.add(HIDDEN);
  recordBtn.classList.remove(HIDDEN);
  initBtn.classList.add(HIDDEN);
}

startBtn.addEventListener("click", handleStart);

function handleStop() {
  clearInterval(TIME_PLUS);
  startBtn.classList.remove(HIDDEN);
  stopBtn.classList.add(HIDDEN);
  recordBtn.classList.add(HIDDEN);
  initBtn.classList.remove(HIDDEN);
}

stopBtn.addEventListener("click", handleStop);

function handleInit() {
  clearInterval(TIME_PLUS);
  timerClock.innerText = "00:00:00";
  TIME = 0;
  timePot = [];
  const removeSequence = document.querySelector(".history");
  record_order.remove(removeSequence);
  saveTime();
}

initBtn.addEventListener("click", handleInit);

const record_order = document.querySelector(".record-content");
let EACH_TIME;
let POINT_TIME = 0;

function getTime(time) {
  const hours = Math.floor(time / 3600);
  const minutesInSec = Math.floor(time / 60);
  const minutes = minutesInSec % 60;
  const seconds = time % 60;
  return `${hours < 10 ? `0${hours}` : hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}:
    ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function paintTime(timePot) {
  const listContent = document.createElement("li");
  const lapTime = document.createElement("span");
  const gapTime = document.createElement("span");
  listContent.classList.add("history");
  lapTime.innerText = timePot.each;
  gapTime.innerText = timePot.point;
  listContent.appendChild(lapTime);
  listContent.appendChild(gapTime);
  record_order.appendChild(listContent);
}

const TIME_KEY = "timekey";

function saveTime() {
  localStorage.setItem(TIME_KEY, JSON.stringify(timePot));
}

function handleRecord() {
  EACH_TIME = TIME - POINT_TIME;
  POINT_TIME = TIME;
  const timePotArr = {
    each: getTime(EACH_TIME),
    point: getTime(POINT_TIME),
    full: POINT_TIME,
  };
  timePot.push(timePotArr);
  paintTime(timePotArr);
  saveTime();
}

recordBtn.addEventListener("click", handleRecord);

const getItemTime = localStorage.getItem(TIME_KEY);
if (getItemTime) {
  const parseTime = JSON.parse(getItemTime);
  timePot = parseTime;
  timePot.forEach(paintTime);
  const arrLength = timePot.length;
  TIME = timePot[arrLength - 1].full;
}
