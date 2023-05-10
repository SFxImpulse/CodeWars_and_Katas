// Given a string, return a different string that is no longer camel cased:

const solution = string => {
  
  const splitStr = string.split("");
  const newStr = string.split("");
  const capStr = string.toUpperCase().split("");
  
  for (i = splitStr.length - 1; i >= 0; i--) {
    if (splitStr[i] === capStr[i]) {
      newStr.splice(i, 0, ' ');
    }
  }
  
  return newStr.join("");

}

// Refactored with regex:

const solutionV2 = string => string.replace(/([A-Z])/g, ' $1');