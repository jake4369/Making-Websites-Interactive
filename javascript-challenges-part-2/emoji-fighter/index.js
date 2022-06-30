const fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

const stageEl = document.getElementById("stage");
const fightButton = document.getElementById("fightButton");

let randInt = () => {
  return Math.floor(Math.random() * fighters.length - 1) + 1;
};

fightButton.addEventListener("click", function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  let fighterOne = fighters[randInt()];
  let fighterTwo = fighters[randInt()];
  if (fighterOne !== fighterTwo) {
    stageEl.textContent = `${fighterOne} vs ${fighterTwo}`;
  }
});
