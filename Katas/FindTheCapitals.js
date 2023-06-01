// Given a string, return an array of the indexes where the letter in the string is a capital letter:

const capitals = word => {
  
  const output = [];

  for (let i = 0; i < word.length; i++) {
    if (/[A-Z]/.test(word[i])) {
      output.push(i);
    }
  }
  return output;
}

// Refactored:

const capitalsV2 = word => word.match(/[A-Z]/g).map(x => word.indexOf(x));