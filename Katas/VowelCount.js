/*
Given a string, return the number of vowels in that string.
*/

const getCount = str => str.toLowerCase().split("").filter(letter => letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u").length;