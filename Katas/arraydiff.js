// Given 2 arrays with integers, return the first array with values that are not included in the second array:

const arrayDiff = (a, b) => a.filter(x => !b.includes(x));