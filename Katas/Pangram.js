// Given a string, return true if the string is Pangram, false if it is not:

const isPangram = string => new Set(string.toLowerCase().replace(/[^a-z]/g, "")).size === 26;