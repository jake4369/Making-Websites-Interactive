const btn = document.getElementById("btn");
const passwordOne = document.getElementById("password-1");
const passwordTwo = document.getElementById("password-2");

// prettier-ignore
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// prettier-ignore
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];

let password = [];

const generatePassword = () => {
  for (let i = 0; i < 4; i++) {
    password.push(
      lowercase[Math.floor(Math.random() * lowercase.length - 1) + 1]
    );
    password.push(
      uppercase[Math.floor(Math.random() * uppercase.length - 1) + 1]
    );
    password.push(numbers[Math.floor(Math.random() * numbers.length - 1) + 1]);
  }

  for (let i = 0; i < 3; i++) {
    password.push(symbols[Math.floor(Math.random() * symbols.length - 1) + 1]);
  }

  return password.sort(() => Math.random() - 0.5).join("");
};

btn.addEventListener("click", () => {
  passwordOne.textContent = generatePassword();
  password = [];
  passwordTwo.textContent = generatePassword();
  password = [];
});

passwordOne.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordOne.textContent);
  document.querySelector(".copied").textContent = "Copied to clipboard";
  setTimeout(() => {
    document.querySelector(".copied").textContent = "Click password to copy";
  }, 2000);
});

passwordTwo.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordTwo.textContent);
  document.querySelector(".copied").textContent = "Copied to clipboard";
  setTimeout(() => {
    document.querySelector(".copied").textContent = "Click password to copy";
  }, 2000);
});
