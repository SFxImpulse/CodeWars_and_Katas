// Given an array of arrays, return the sum of the arrays by adding the first elements in each nested array, and then subtracting that total by the sum of the second elements in each nested array:

const number = busStops => {

  let result = 0;

  let resultSum = 0;
  let resultDifference = 0;

  for (let stop of busStops) {

    resultSum += stop[0];
    resultDifference += stop[1]; 

    result = resultSum - resultDifference;

  }

  return result;

}

// Refactored:

const numberV2 = busStops => busStops.reduce((rem, [on, off]) => rem + on - off, 0);