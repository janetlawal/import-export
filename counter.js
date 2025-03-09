// To allow this function to work, we put the variable and the function together in one file.
// This file also has a specific purpose, being a counter, rather than being loose in a 'variables.js' or a 'functions.js'

// JavaScript does not allow direct reassignment of an imported variable, because they are "read-only live bindings"
// Instead we can we store count in a 'module-private' variable:
export let count = 15;

export function setCount() {
  count += 1;
}

// Alternatively, because we're able to change values of an item on an object, we can decalre our variable this way
export const countState = {
  count: 150,
};

// And now we can make a dynamic function which can change any number:
export function setAnyNumber(valueToBeChanged, increaseAmount) {
  console.log("in the function", valueToBeChanged, increaseAmount);
  return (valueToBeChanged += increaseAmount);
}