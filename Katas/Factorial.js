// Given an integer, return the factorial of that integer:

const factorial = n => {
  
  let result = n;
  
  while (n !== 0) {
    result *= n;
    n--;
  }

  return result;

}