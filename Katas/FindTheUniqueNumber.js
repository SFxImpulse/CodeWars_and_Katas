// Write a function that accepts an array of all equal numbers except for one, and return that unique number:

const findUniq = arr => {
  const counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  };

  for (const count in counts) {
    if (counts[count] === 1) {
      return Number(count);
    }
  }

};

console.log(findUniq([1, 1, 1, 2, 1, 1]));

// Refactored:

const findUniqV2 = arr => arr.find(arr.indexOf(num) === arr.lastIndexOf(num));

console.log(findUniqV2([1, 1, 1, 2, 1, 1]));