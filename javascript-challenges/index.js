// ==== #1 Variables practice

// Create two variables, firstName and lastName
const firstName = "Jake";
const lastName = "Samuels";

// Concatenate the two variables into a third variable called fullName
// const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName}`;

// Log fullName to the console
console.log(fullName);

// ==== #2 Concatenate two strings in a function

let name = "Linda";
let greeting = "Hi there";

// Create a function that logs out "Hi there, Linda!" when called
const greet = function () {
  //   console.log(greeting + ", " + name);
  console.log(`${greeting}, ${name}`);
};

greet();

// ==== #3 Incrementing and decrementing

let myPoints = 3;

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

const add3Points = () => {
  myPoints += 3;
};

const remove1Point = () => {
  myPoints -= 1;
};

// Call the functions to that the line below logs out 10
console.log(myPoints);

// ==== #3 Incrementing and decrementing
// Try to predict what each of the lines will log out
console.log("2" + 2); // 22
console.log(11 + 7); // 18
console.log(6 + "5"); // 65
console.log("My points: " + 5 + 9); // My points: 59
console.log(2 + 2); //  4
console.log("11" + "14"); //  1114

// ==== #4 Incrementing and decrementing
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
document.getElementById("purchase-btn").addEventListener("click", () => {
  document.getElementById("error").textContent =
    "Something went wrong, please try again";
});

// ==== #5 Incrementing and decrementing
let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
const add = () => {
  let result = num1 + num2;
  sumEl.textContent = `Sum: ${result}`;
};

const subtract = () => {
  let result = num1 - num2;
  sumEl.textContent = `Sum: ${result}`;
};

const divide = () => {
  let result = num1 / num2;
  sumEl.textContent = `Sum: ${result}`;
};

const multiply = () => {
  let result = num1 * num2;
  sumEl.textContent = `Sum: ${result}`;
};
