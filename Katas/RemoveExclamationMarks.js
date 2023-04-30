// Given a string with exclamation marks, remove every instance of them from the string:

const removeExclamationMarks = string => string.replaceAll("!", "");

// Regex Version:

const removeExclamationMarksWithRegex = string => string.replace(/!/g, "");