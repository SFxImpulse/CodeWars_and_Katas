/*
Given an array of scores and a single score, determine whether the score is higher than the average of the array of scores.
*/

const betterThanAverage = (classScore, yourScore) => yourScore > classScore.reduce((prev, curr) => prev + curr, 0) / classScore.length;