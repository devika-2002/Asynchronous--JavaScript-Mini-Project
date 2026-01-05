const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

const scoreDiv = document.getElementById("score");

let score = 0;
let activeBox = null;

box1.addEventListener("click", function () {
  handleClick(box1);
});

box2.addEventListener("click", function () {
  handleClick(box2);
});

box3.addEventListener("click", function () {
  handleClick(box3);
});

box4.addEventListener("click", function () {
  handleClick(box4);
});

box5.addEventListener("click", function () {
  handleClick(box5);
});

box6.addEventListener("click", function () {
  handleClick(box6);
});

box7.addEventListener("click", function () {
  handleClick(box7);
});

box8.addEventListener("click", function () {
  handleClick(box8);
});

box9.addEventListener("click", function () {
  handleClick(box9);
});


function handleClick(box) {
  if (box === activeBox) {
    score++;
    scoreDiv.textContent = "Score: " + score; 
    box.style.backgroundColor = "gray";
    activeBox = null;
  }
}

function activateBox() {
  if (activeBox) {
    activeBox.style.backgroundColor = "gray";
  }

  let random = Math.floor(Math.random() * 9) + 1;

   if (random === 1) {
    activeBox = box1;
  }

  if (random === 2) {
    activeBox = box2;
  }

  if (random === 3) {
    activeBox = box3;
  }

  if (random === 4) {
    activeBox = box4;
  }

  if (random === 5) {
    activeBox = box5;
  }
   if (random === 6) {
    activeBox = box6;
  }

  if (random === 7) {
    activeBox = box7;
  }

  if (random === 8) {
    activeBox = box8;
  }

  if (random === 9) {
    activeBox = box9;
  }
  
  activeBox.style.backgroundColor = "green";
  
  setTimeout(function() {
    if (activeBox) {
      activeBox.style.backgroundColor = "gray";
      activeBox = null;
    }
  }, 1000);
}

let gameInterval = setInterval(activateBox, 2000);

setTimeout(function() {
  clearInterval(gameInterval);
  if (activeBox) {
    activeBox.style.backgroundColor = "gray";
  }
}, 30000);

