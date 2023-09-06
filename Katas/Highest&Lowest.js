// Given an array of string numbers, return the highest and lowest numbers as a string:

const highAndLow = numbers => {
  const arr = numbers.split(" ");
  let lowest = 0;
  let highest = 0;
  arr.forEach(number => {
    highest = Math.max(...arr);
    lowest = Math.min(...arr);
  });
  return `${highest} ${lowest}`;
};

// Refactored:

const highAndLowV2 = numbers => {
  const arr = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}