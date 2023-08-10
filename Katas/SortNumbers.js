// Given an array of integers, sort the integers numerically and ascending:

const solution = arr => {
  if ((!arr) || (arr[0] === null) || (arr.length === 0)) {
    return [];
  }
  return arr.sort((a, b) => a - b)
}

// Refactored:

const solutionV2 = arr => (arr || []).sort((a, b) => a - b);