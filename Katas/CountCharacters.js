// Given a 2 strings, determine how often the second strings occurs within the first string:

const strCount = (str, letter) => str.split(letter).length - 1;