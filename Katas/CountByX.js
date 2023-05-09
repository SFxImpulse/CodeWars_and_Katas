// Given two integers, return an array of values counting up to the second integer by the first integer:

const countBy = (x, n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(i * x);
  };

  return result;
  
};

// Refactored:

const countByV2 = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x);