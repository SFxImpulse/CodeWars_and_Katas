// Given an integer, return an array containing all the values of integers to the power of 2 from 0 to the integer:

const powersOfTwo = n => {

  const output = [];

  if (n === 0) {
    return output;
  };

  let i = 0;
  while (i < n) {
    output.push(2 ** i);
    i++
  }

  return output;

};

// For Loop option:

const powerOfTwoV2 = n => {
  const output = [];

  for (let i = 0; i < n; i++) {
    output.push(Math.pow(2, i));
  };

  return output;

};

// One Liner:
const powerOfTwoV3 = n => Array.from({length: n + 1}, (v, k) => 2 ** k);