const btn = document.getElementById("btn");
const passwordOne = document.getElementById("password-1");
const passwordTwo = document.getElementById("password-2");

// prettier-ignore
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// prettier-ignore
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];

const generatePassword = () => {
  let password = [];
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

const copyPassword = function (el) {
  navigator.clipboard.writeText(el.textContent);
  document.querySelector(".copied").textContent = "Copied to clipboard";
  setTimeout(() => {
    document.querySelector(".copied").textContent = "Click password to copy";
  }, 2000);
};

btn.addEventListener("click", () => {
  passwordOne.textContent = generatePassword();
  passwordTwo.textContent = generatePassword();
});

passwordOne.addEventListener("click", () => {
  copyPassword(passwordOne);
});

passwordTwo.addEventListener("click", () => {
  copyPassword(passwordTwo);
});
