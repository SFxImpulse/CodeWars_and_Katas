// Given an integer with more than 1 digit, return the sums of those digits:

const sumDigits = num => {
  
  let sum = 0;
  
  const string = String(num).split("");
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "-") {
      string.shift();
    }
    sum += Number(string[i]);
  }
  
  return sum;
  
}

// Refactored:

const sumDigitsV2 = num => Math.abs(num).toString().split('').reduce(function(a,b){return +a + +b}, 0);