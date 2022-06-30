const countEl = document.getElementById("count-el");
const total = document.getElementById("total");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const img = document.querySelector("img");
const resetBtn = document.querySelector(".reset");

let goals = 0;
let totalGoals = localStorage.getItem("totalGoals")
  ? Number(JSON.parse(localStorage.getItem("totalGoals")))
  : 0;

total.textContent = `Goals this season: ${totalGoals}`;

const increment = () => {
  goals += 1;
  countEl.textContent = goals;
  totalGoals += 1;
  localStorage.setItem("totalGoals", totalGoals);
  img.src = "images/goal.png";
  //   img.classList.add("fade-in");
  setTimeout(() => {
    // img.classList.remove("fade-in");
    img.src = "images/ollie.png";
  }, 2000);
};

const save = () => {
  total.textContent = `Goals this season: ${totalGoals}`;
  goals = 0;
  countEl.textContent = goals;
};

const reset = () => {
  totalGoals = 0;
  localStorage.setItem("totalGoals", totalGoals);
  total.textContent = `Goals this season: ${totalGoals}`;
};

incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);
resetBtn.addEventListener("click", reset);
