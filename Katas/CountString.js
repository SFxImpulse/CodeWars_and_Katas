// Given a string, count the number of occurrences of each character within the string as object key value pairs:

const count = string => {
  
  const result = {};
  
  for (let char of string) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

  return result;

}

// Refactored as One-Liner:

const countV2 = string => [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});