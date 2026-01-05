const counter = document.getElementById("counter");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn= document.getElementById("resetBtn");

let count = 0;
let intervalId = null;
startBtn.addEventListener("click", function() {
  intervalId = setInterval(function() {
    count++;
    counter.innerText = count;
  }, 1000)
  startBtn.disabled = true;
  pauseBtn.disabled = false;
});

pauseBtn.addEventListener("click", function() {
  if(pauseBtn.innerHTML == "Pause") {
    clearInterval(intervalId);
    intervalId = null;
    pauseBtn.innerHTML = "Resume"
  } else {
    intervalId = setInterval(function() {
      count++;
      counter.innerText = count;
    }, 1000);
    pauseBtn.innerHTML = "Pause"
  }
})

resetBtn.addEventListener("click", function() {
  clearInterval(intervalId);
  intervalId = null
  count = 0;
  counter.innerText = 0;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  pauseBtn.innerText = "Pause";
})
