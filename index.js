//*********************** Global Variables ****************************** */

const PLAY_TIME = 30;
let time = PLAY_TIME;

//************************* Nodes**************************************** */

const startBtn = document.querySelector(".start-btn");

const scoreContainer = document.querySelector(".score-container");
const score = document.querySelector(".score");

const timer = document.querySelector(".timer");

const bunny1 = document.querySelector(".bunny-1");
const bunny2 = document.querySelector(".bunny-2");
const bunny3 = document.querySelector(".bunny-3");
const bunny4 = document.querySelector(".bunny-4");

const layer11 = document.querySelector(".layer-11");
const scoreResume = document.querySelector(".score-resume");
const playAgainBtn = document.querySelector(".again-btn");

//*********************************************************************** */

const createCounter = () => {
  let counter = 0;

  return {
    incrementCounter: () => {
      counter++;
      return counter;
    },
    resetCounter: () => {
      counter = 0;
    },
  };
};

const counter = createCounter();

//*********************************************************************** */

const incrementScore = () => {
  score.textContent = counter.incrementCounter();
};

//*********************************************************************** */

const updateTimer = () => {
  timer.textContent = `${time} Segs`;
  if (time === 0) {
    layer11.classList.remove("inactive");
    scoreResume.textContent = score.textContent;
  } else {
    time--;
    setTimeout(updateTimer, 1000);
  }
};

//*********************************************************************** */

const start = () => {
  bunny1.addEventListener("click", incrementScore);
  bunny2.addEventListener("click", incrementScore);
  bunny3.addEventListener("click", incrementScore);
  bunny4.addEventListener("click", incrementScore);

  startBtn.classList.add("inactive");
  scoreContainer.classList.remove("inactive");
  timer.classList.remove("inactive");

  updateTimer();
};

//*********************************************************************** */

const playAgain = () => {
  bunny1.removeEventListener("click", incrementScore);
  bunny2.removeEventListener("click", incrementScore);
  bunny3.removeEventListener("click", incrementScore);
  bunny4.removeEventListener("click", incrementScore);

  layer11.classList.add("inactive");
  startBtn.classList.remove("inactive");
  scoreContainer.classList.add("inactive");
  timer.classList.add("inactive");

  counter.resetCounter();
  time = PLAY_TIME;
  score.textContent = 0;
};

//*********************************************************************** */

startBtn.addEventListener("click", start);
playAgainBtn.addEventListener("click", playAgain);
