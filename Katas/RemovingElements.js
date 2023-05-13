// Given an array, remove every other element:

const removeEveryOther = arr => arr.filter((item, index) => ((index + 1) % 2 !== 0));

// Slightly Refactored:

const removeEveryOtherV2 = arr => arr.filter((item, index) => index % 2 === 0);