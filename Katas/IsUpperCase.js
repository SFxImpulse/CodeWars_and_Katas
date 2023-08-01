// Given a string, return true if the entire string is uppercase, else return false:

String.prototype.isUpperCase = function() {
  return this == this.toUpperCase() ? true : false;
}