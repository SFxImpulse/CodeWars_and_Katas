// Given an array of integers, return the sum of each integer squared:

const squareSum = (numbers: number[]): number => {
  let result = 0;
  numbers.forEach(number => {
    result += number ** 2;
  });
  return result;
}

// Refactored:

const squareSumV2 = (numbers: number[]): number => {
  return numbers.reduce((prev, curr) => prev + curr * curr, 0);
}