/*
Given two strings, return true of false based on whether the two words are anagrams of each other.
*/

const sortWord = word => word.toLowerCase().split("").sort().join("");

const isAnagram = (test, original) => sortWord(test) === sortWord(original);