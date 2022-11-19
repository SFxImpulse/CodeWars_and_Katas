/*
Given an array of symbols of a DNA string, write a function that returns their complements as a string.
*/


const DNAStrand = dna => {
  const DNAStrandPairs = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G"
  };
  return dna.split("").map(value => DNAStrandPairs[value]).join("");
};