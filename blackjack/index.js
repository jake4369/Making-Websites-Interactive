const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const startBtn = document.getElementById("start-btn");
const newCardBtn = document.getElementById("new-card-btn");
const newGameBtn = document.getElementById("new-game-btn");
let playerEl = document.getElementById("player-el");

let cards = [];
let sum = 0;

let hasBlackjack = false;
let isAlive = false;
let message = "";

let player = {
  name: "Jake",
  chips: 200,
};

const renderScore = () => {
  playerEl.textContent = `${player.name}: £${player.chips}`;
};

const getRandomCard = () => {
  const randInt = Math.floor(Math.random() * 13 + 1);
  if (randInt === 1) {
    return 11;
  } else if (randInt > 10) {
    return 10;
  } else {
    return randInt;
  }
};

const startGame = () => {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard;
  renderGame();
};

const renderGame = () => {
  cardsEl.textContent = `Cards: ${cards.join(" ")}`;
  sumEl.textContent = `Sum: ${sum}`;
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Woohoo! You've got Blackjack! 🥳";
    hasBlackjack = true;
    newGameBtn.style.display = "inline-block";
    player.chips += 100;
  } else {
    message = "You're out of the game 😭";
    isAlive = false;
    newGameBtn.style.display = "inline-block";
    sum = 0;
    player.chips -= 10;
  }

  messageEl.textContent = message;
  renderScore();

  newCardBtn.style.display = "inline-block";
};

const newGame = () => {
  sum = 0;
  cards = [];
  renderGame();
  sumEl.textContent = "Sum: ";
  newCardBtn.style.display = "none";
  newGameBtn.style.display = "none";
};

const newCard = () => {
  if (isAlive && !hasBlackjack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
};

startBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCard);
newGameBtn.addEventListener("click", newGame);
