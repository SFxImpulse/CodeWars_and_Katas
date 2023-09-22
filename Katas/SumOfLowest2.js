// Given an array of integers, return the sum of the two lowest integers in the array:

const sumTwoLowestNumbers = (arr) => {
  const [ a, b ] = arr.sort((x, y) => x - y);
  return a + b;
}