// Given a string, return a boolean based on whether the string is palindrome:

const isPalindrome = str => {
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, '');
  const reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

// Refactored:

const isPalindromeV2 = str => str.split("").reverse().join("").toLowerCase() === str.toLowerCase() ? true : false;