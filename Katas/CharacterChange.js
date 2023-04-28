// Write a function that takes in a string and returns another string that replaces the 5s, 0s, and 1s with S, O, and I:

const correct = string => {
  const newString = string.split("");
  newString.forEach((index, i) => {
    if (index === "5") {
      return newString[i] = "S";
    } 
    
    if (index === "0") {
      return newString[i] = "O";
    }
    
    if (index === "1") {
      return newString[i] = "I";
    }

  });
  return newString.join("");
};

console.log(correct("L0ND0N"));

// Refactored:

const correctV2 = string => string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');

console.log(correctV2("L0ND0N"));