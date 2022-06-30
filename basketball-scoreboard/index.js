const homeScoreEl = document.querySelector(".home-score-container");
const guestScoreEl = document.querySelector(".guest-score-container");

let homeScore = 0;
let guestScore = 0;

const add1home = () => {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
};
const add2home = () => {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
};
const add3home = () => {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
};

const add1guest = () => {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
};
const add2guest = () => {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
};
const add3guest = () => {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
};
