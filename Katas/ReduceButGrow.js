/*
Given an array of numbers, multiply each number in order by the previous number to make a total product.
*/

const grow = x => x.reduce((prev, curr) => prev * curr);