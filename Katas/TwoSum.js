// Write a function that takes an array of numbers, and returns the indecies of two numbers that are the sum of the target number.

const sumTwo = (arr, num) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) return [i, j];
    }
  }
};

console.log(sumTwo([1, 2, 3], 4));

console.log(sumTwo([1234, 5678, 9012], 14690));