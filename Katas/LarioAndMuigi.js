// Given an array of integers, return another array where each integer is bigger than the previous index by only 1:

const pipeFix = (numbers) => Array.from({length: numbers.slice(-1) - numbers[0] + 1}, (_, index) => index + numbers[0]);