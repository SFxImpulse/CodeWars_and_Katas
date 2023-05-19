// Given an array of positive integers, return the index of n to the power of n:

const index = (arr, n) => n < arr.length ? arr[n] ** n : -1;

// Slightly Shorter Solution:

const indexV2 = (arr, n) => arr[n] ** n || -1;