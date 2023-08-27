// Given two strings, return true if the first and last characters of each string are the same:

const feast = (beast: string, dish: string): boolean => beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];