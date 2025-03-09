// Import
// First, you start with the 'import' keyword.
// Then, within curly braces, we use the exact name of the exported thing we want, in this case 'multiply'.
// We say we want it 'from' a location.
// and that location must be: in "double quotes", hav a file pathway, and end in the file extension = .js
import { multiply } from "./functions.js";
import { x, y, myName } from "./variables.js";
import { setCount, count, countState, setAnyNumber } from "./counter.js"; // This is called a named import/export.
import someThing from "./defaultExportThing.js"; // This is called a default export.

// get the elements from our HTML:
const myNameH1 = document.getElementById("my-name");
const myLocationH3 = document.getElementById("my-location");

const myCount = document.getElementById("my-counter");
const myButton = document.getElementById("my-button");

const mySecondCount = document.getElementById("my-second-counter");
const mySecondButton = document.getElementById("my-second-button");

// What we're used to:
const num1 = 10;
const num2 = 15;

function sum(a, b) {
  return a + b;
}

console.log(sum(num1, num2));

// Using a function from another file
console.log(multiply(num1, num2));

// Using variables from another file
console.log(sum(x, y));
console.log(multiply(x, y));

// We can do all of the usual stuff we're used to, like
// DOM manipulation
myNameH1.textContent = `${myName} Import Export stuff`;

// Let's look at a counter
myCount.textContent = count;

myButton.addEventListener("click", function () {
  console.log("the button is clicked:", count);
  // Everytime the button is clicked, increase the counter by 1
  setCount();
  console.log("The function has finished running", count);
  // and update the value on the page
  myCount.textContent = count;
});

// This is my 'default-ly' exported function.
myLocationH3.textContent = someThing();

// Let's look at the second counter
mySecondCount.textContent = countState.count;

// Think back to objects. We can add values to an abject, and even change them. But we can't change a whole object to a number, for example.:
countState.myName = "Frankie";
countState.myPet = "Luna";
countState.colours = ["blue", "red", 25];

mySecondButton.addEventListener("click", function () {
  console.log("countState is an object with a property:", countState);
  // We must remember to reassign the value to the result of the function:
  countState.count = setAnyNumber(countState.count, 10);
  mySecondCount.textContent = countState.count;
});