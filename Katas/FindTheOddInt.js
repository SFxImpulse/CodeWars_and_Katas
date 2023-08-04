// Given an array, return the integer that occurs an odd number of times:

const findOdd = array => {
  let count = 0;
  let arr = A.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}

// Refactored:

const findOddV2 = array => array.reduce((a, b) => a ^ b);