// Given an string of words, return the length of the shortest word in the string:

const findShort = string => {
  
  const split = string.split(" ");

  return split.sort((a, b) => a.length - b.length)[0].length;

}

// Refactored one-liner:

const findShortV2 = string => Math.min(...string.split(" ").map(s => s.length));