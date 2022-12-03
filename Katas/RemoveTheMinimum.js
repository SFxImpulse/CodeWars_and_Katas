/*
Given an array of numbers, remove the smallest number.
*/

const removeSmallest = numbers => {
  const indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
};