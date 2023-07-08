// Given two integers, create an array of all the integers between the two provided, including the two provided:

const between =  (a, b) => {
  const output = [];
  for (let i = a; i < b + 1; i++) {
    output.push(i);
  }
  return output;
}

// Refactored:

const betweenV2 = (a, b) => Array.from(new Array(b - a + 1), (_, i) => a + i);