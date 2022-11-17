/*
Given a large digit number, take the square root of each individual digit and concatenate them.
*/

const squareDigits = num => Number((num.toString()).split("").map(number => number * number).join(""));