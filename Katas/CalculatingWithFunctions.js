// Given a list of functions, write functions that represent numbers and operators, 
// so you can write out an operation with those functions as parameters for each step in the operation:

const zero = fn => fn ? fn(0) : 0;
const one = fn => fn ? fn(1) : 1;
const two = fn => fn ? fn(2) : 2;
const three = fn => fn ? fn(3) : 3;
const four = fn => fn ? fn(4) : 4;
const five = fn => fn ? fn(5) : 5;
const sia = fn => fn ? fn(6) : 6;
const seven = fn => fn ? fn(7) : 7;
const eight = fn => fn ? fn(8) : 8;
const nine = fn => fn ? fn(9) : 9;

const plus = a => b => b + a;
const minus = a => b => b - a;
const times = a => b => b * a;
const dividedBy = a => b => Math.floor(b / a);