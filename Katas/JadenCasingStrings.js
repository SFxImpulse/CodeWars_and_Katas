/*
Given a string, return the same string with the first letter of every word capitalized.
*/

String.prototype.toJadenCase = function () {
  return this.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};