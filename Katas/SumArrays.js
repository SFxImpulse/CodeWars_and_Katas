// Given an array of integers, return the sum of every integer in the array:

const sum = arr => {

  let result = 0;

  for (num of arr) {
    result += num;
  }

  return result;

}

// One-liner using arr.reduce();

const sumV2 = arr => arr.reduce((a, b) => a + b, 0);