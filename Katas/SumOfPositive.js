// Given an array of positive and negative integers, return the sum of only the positive integers:

const positiveSum = arr => {

  let result = 0;

  for (num of arr) {
    if (num >= 0) {
      result += num;
    } else {
      result += 0;
    }
  }

  return result;

}

// One-liner using arr.reduce();

const positiveSumV2 = arr => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);