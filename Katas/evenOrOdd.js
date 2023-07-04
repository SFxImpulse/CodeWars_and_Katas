// Given a number, return "Even" if the number is even, or "Odd" if the number is odd:

const evenOrOdd = x => x % 2 === 0 ? "Even" : "Odd";

// Refactored:

const evenOrOddV2 = x => (x % 2) ? "Even" : "Odd";