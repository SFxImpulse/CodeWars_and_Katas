// Given an integer, return a specific string based on that integer:

const peopleWithAgeDrink = (old: number): string => old < 14 ? "drink toddy" : old >= 14 && old < 18 ? "drink coke" : old >= 18 && old < 21 ? "drink beer" : "drink whisky";

// Refactored:

const peopleWithAgeDrinkV2 = (old: number): string => `drink ${(old < 14 ? "toddy" : old < 18 ? "coke" : old < 21 ? "beer" : "whisky")}`;