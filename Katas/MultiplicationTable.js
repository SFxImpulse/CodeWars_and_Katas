// Given an integer, return a 2D array of factors up to that integer:

const multiplicationTable = n => {
  let output = [];
  for (let i = 1; i <= n; i++) {
    let x = [];
    for (let j = 1; j <= n; j++) {
      x.push(i * j);
    }
    output.push(x);
  }
  return output;
}