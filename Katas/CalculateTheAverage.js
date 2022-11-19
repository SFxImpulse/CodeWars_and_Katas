/*
Given an array of numbers, calculate the average of all the numbers in the array.
*/

const findAverage = numbers => numbers.length === 0 ? 0: numbers.reduce((curr, prev) => curr + prev, 0) / numbers.length;