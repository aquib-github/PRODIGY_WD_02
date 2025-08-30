let timer;
let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", () => {
  if (!running) {
    running = true;
    timer = setInterval(updateTime, 10);
  }
});

document.getElementById("pause").addEventListener("click", () => {
  running = false;
  clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", () => {
  running = false;
  clearInterval(timer);
  milliseconds = 0; seconds = 0; minutes = 0; hours = 0;
  display.textContent = "00:00:00:00";
  laps.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
  if (running) {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
});

function updateTime() {
  milliseconds += 1;

  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

  display.textContent = `${h}:${m}:${s}:${ms}`;
}
