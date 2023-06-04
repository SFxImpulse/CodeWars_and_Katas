// Write a function that accepts an integer and returns an array of numbers:

const humanYearsCatYearsDogYears = humanYears => {
  
  let catYears = 0;
  let dogYears = 0;

  if (humanYears > 0) {
    catYears += 15;
    dogYears += 15;
  }

  if (humanYears > 1) {
    catYears += 9;
    dogYears += 9;
  }

  if (humanYears > 2) {
    catYears += (4 * (humanYears - 2));
    dogYears += (5 * (humanYears - 2));
  }

  return [humanYears, catYears, dogYears];

};

// Refactored:

const humanYearsCatYearsDogYearsV2 = humanYears => {
  if (humanYears === 1) return [1, 15, 15];
  if (humanYears === 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
}