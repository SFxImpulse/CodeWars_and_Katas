/*
Given a list of numbers and strings, return an array of only numbers.
*/

const filterList = list => list.filter(listItem => typeof(listItem) === "number");