// Given a string, return another string with the original string's vowels removed:

const disemvowel = string => string.replaceAll("a", "").replaceAll("A", "").replaceAll("e", "").replaceAll("E", "").replaceAll("i", "").replaceAll("I", "").replaceAll("o", "").replaceAll("O", "").replaceAll("u", "").replaceAll("U", "");

// The above function was definitely a little reidiculous, here's the refactor:

const disemvowelV2 = string => string.replace(/[aeiou]/gi, "");