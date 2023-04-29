// Given an array, write a function that returns a number that only occurs once.

const stray = arr => arr.reduce((a, b) => a ^ b);