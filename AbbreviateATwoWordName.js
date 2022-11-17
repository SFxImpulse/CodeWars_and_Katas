/*
Abbreviate a two word name.
*/

const abbreviate = name => {
  const fullName = name.split(" ");
  return `${fullName[0][0]}.${fullName[1][0]}`.toUpperCase();
}