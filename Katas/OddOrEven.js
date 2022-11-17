/*
Given an array of integers, determine whether the sum of its elements is odd or even.
*/

const oddOrEven = numbers => (numbers.reduce((prev, curr) => prev + curr, 0)) % 2 === 0 ? "even" : "odd";