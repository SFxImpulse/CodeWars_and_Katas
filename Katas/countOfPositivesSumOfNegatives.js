// Given an array of integers, return a count of the positive integers, and the sum of the negative integers:

const countPositivesSumNegatives = arr => {
  
  if ((arr === null) || (arr.length === 0)) {
    return [];
  }
  
  console.log(arr);
  
  let countPositive = 0;
  let sumNegative = 0;
  for (let num of arr) {
    if (num > 0) {
      countPositive++;
    } else {
      sumNegative += num;
    }
  }
  
  return [countPositive, sumNegative];
  
}