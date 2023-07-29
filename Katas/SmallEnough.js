// Given an array of integers, return true if the values of each index in the array is less than the value of limit:

const smallEnough = (a, limit) => {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i], limit)
    if (a[i] > limit) {
      return false;
    }
  }
  return true;
}

// Refactored:

const smallEnoughV2 = (a, limit) => Math.max(...a) <= limit;