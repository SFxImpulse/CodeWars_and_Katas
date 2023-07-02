// Given an array of arrays, return a "Senior" depending on the first number in each nested array being greater than 55 and the second number being greater than 7.
// Otherwise, return "Open":

const openOrSenior = data => {

  const output = [];

  data.forEach(array => {
    if ((array[0] >= 55) && (array[1] >= 7)) {
      output.push("Senior");
    } else {
      output.push("Open");
    }
  });

  return output;

}