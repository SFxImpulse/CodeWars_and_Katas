/*
Given a number, return an array of numbers descending by one from that number to one.
*/

const reverseSeq = n => {
  const output = [];
  for (let i = n; i > 0; i--) {
    output.push(i);
  }
  return output;
};