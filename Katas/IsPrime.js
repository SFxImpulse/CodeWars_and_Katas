// Given an integer, return a boolean based on whether that integer is prime or not:

const isPrime = n => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}